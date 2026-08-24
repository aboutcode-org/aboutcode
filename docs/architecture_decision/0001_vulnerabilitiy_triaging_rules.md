---
status: in progress
date: 2026-08-21
related:
  - https://github.com/aboutcode-org/vulnerablecode/issues/1961
  - https://www.cisa.gov/news-events/directives/bod-26-04-implementation-guidance-prioritizing-security-updates-based-risk
inspired_by:
  - https://github.com/package-url/purl-spec/blob/main/docs/decisions/001-PURL_type-software_without_registry.md
---

# Decision: Product-centric truth-table triage rules for DejaCode

## Background

[VulnerableCode #1961](https://github.com/aboutcode-org/vulnerablecode/issues/1961)
wants a rule system to **filter or re-rank vulnerabilities** based on the
real product / app / device. It also talks about **SSVC**-style decisions.

**Basic idea**

- A product has packages. Some packages have vulnerabilities.
- We look at severity, risk scores, exploitability, SSVC, deploy context
(`is_deployed`, purpose), CWE, EPSS, and similar things.
- Rules can make priority higher or lower, or mute it, and also can trigger
things like notifications.
- Users should be able to **configure** the rules.
- Rules can be grouped in **profiles / rulesets**
(example: CRA, mobile apps, internal apps, FedRAMP).

The issue also says we should look at policy-as-code tools:

- **Rego / OPA**
- **Drools**
- other rule engines
- policy languages
- decision trees

Separately, [CISA BOD 26-04 guidance](https://www.cisa.gov/news-events/directives/bod-26-04-implementation-guidance-prioritizing-security-updates-based-risk)
talks about fixing vulns based on risk, with clear decision points and time
limits. It also talks about forensic triage, and about patching in some days
vs doing more analysis.

We used this idea for our **outcomes**:

- return clear **actions**
- each action applies to a **package** or a **product**
- include a **timeline in days**
- we do **not** only return a score

**What DejaCode already has**

- links between product, package, and vulnerability
- `reporting.Query` + `reporting.Filter` for true/false questions on models
- dataspace support
- queries that can respect permissions

**Main question**

How do we write and run triage policy inside DejaCode, and not build a second big system?

---

## Proposal

We use a **truth table** (decision table) that works on the **product**.


| #   | Piece                | What it is                                                                                                    |
| --- | -------------------- | ------------------------------------------------------------------------------------------------------------- |
| 1   | **Decision points**  | Named true/false checks on package, vulnerability, or product. Uses `reporting.Query` / `Filter`.             |
| 2   | **Triage decisions** | Named results. Has an **action**, apply-to (**package** or **product**), and a **timeline**.                  |
| 3   | **Rulesets**         | Groups of rules (example: “CRA”, “internal”). We ship **built-in** ones; users can also **make their own**.   |
| 4   | **Rules**            | One row in the table. Conditions say which decision points must be `true` or `false`.                         |
| 5   | **Evaluation**       | For one product: build a decision vector → first matching rule per ruleset → highest-precedence ruleset wins. |


**Result of evaluation**

- decision for the product/package
- plus the true/false vector
- for package actions: apply to the packages that matched

**How policy is written**

- **YAML** → good for built-in packs
- **Web UI** → good for custom rulesets
- both write to the same DB models

---

## Goals

- Write policy as **simple tables** people can read (no Rego / other policy language).
- Reuse DejaCode **reporting queries** (no second filter language).
- Support **rulesets** with precedence (CRA vs internal vs FedRAMP).
- Ship **built-in** rulesets; let users **create their own**.
- Return clear **actions**, with **package or product** scope, and **timelines**.
- Run triage again when inventory or vuln data changes, and also once a **day**.
- Keep the engine simple, testable, and inside Django.

---

## Non-goals (for this decision)

- Do **not** embed a full SSVC tree as the only engine.
(SSVC fields can still be inputs when we have them.)
- The engine does **not** install patches or change network rules itself.
It only returns **labeled decisions**. Other tools / workflows apply them.
- Do **not** add OPA, Drools, etc. as a required dependency.

---

## Alternatives considered

We looked at these options from #1961 and from what fits DejaCode.

### 1. Open Policy Agent (OPA) / Rego

**Idea:** Write policy in [Rego](https://www.openpolicyagent.org/).
Send product + vuln JSON to OPA. Get allow/deny or custom answers.

**Pros**

- known policy tool, used a lot for authz
- good for nested JSON
- policy stays outside app code

**Cons**

- extra runtime to install and take care of
- same kind of filters already exist in `reporting.Query`
- hard to edit as normal DejaCode UI objects

**Why not picked:** Too much cost for DejaCode.
We want users in a dataspace to edit policy and link it to inventory queries.
We do not want a separate policy service.

### 2. Drools / general production rule engines

**Idea:** Use Drools (or similar) with when/then rules on domain objects.

**Pros**

- strong pattern matching

**Cons**

- big and heavy dependency
- does not fit well with Django ORM style
- too much for simple true/false tables
- hard to show as YAML + Web UI forms

**Why not picked:** Too complex.
Most #1961 examples are simple like “if risk ≥ 7 and exploit exists → promote”.
A truth table is enough.

### 3. Pure SSVC / fixed decision trees

**Idea:** Only use SSVC trees and map the tree leaf to a triage result.

**Pros**

- matches industry triage ideas
- good for exploitability × impact × mission

**Cons**

- SSVC alone does not cover all DejaCode cases
(deploy purpose, package-only rules, CRA profiles)
- one fixed tree is not enough for many org profiles
- we still need custom checks, timelines, and action labels

**Why not picked as the only engine:** SSVC is useful **input**, not the whole
policy system. Decision points can use SSVC fields when we have them.
Profiles still stay as truth tables that users can edit.

### 4. Imperative scoring / long if-else code

**Idea:** Python scripts that change a priority score and send notifications.

**Pros**

- fast to build a demo
- easy to add side effects

**Cons**

- hard to read and hard to audit
- hard to version and test as data
- policy is stuck in code deploys

**Why not picked:** Does not match “users can configure profiles”.  
Also hard to ship base CRA/FedRAMP packs as clear YAML or DB rows.

---

## Decision

**We use a truth table stored in Django models.**

- Predicates go through `reporting.Query` / `Filter`.
- We evaluate **one product at a time**.

### Why this design


| #   | Reason                 | Short explanation                                     |
| --- | ---------------------- | ----------------------------------------------------- |
| 1   | Fits the problem       | #1961 examples are simple AND conditions → table rows |
| 2   | Easy to read           | People can review a ruleset without Rego/Drools       |
| 3   | Profiles via rulesets  | Built-in packs + user rulesets, with precedence       |
| 4   | Reuses DejaCode        | No new filter language                                |
| 5   | Inspired by CISA       | Actions + timelines, not only CVSS ranking            |
| 6   | Same result every time | Priority + precedence → one clear winner              |
| 7   | YAML + Web UI          | Both write the same objects                           |


### Mapping from CISA ideas

BOD 26-04 talks about **decision points** and **actions with time limits**.
Examples of decision points: public exposure, technical impact, automatable
exploit, active exploit / KEV.

We use a similar structure:


| Idea from guidance                     | In triage rules                           |
| -------------------------------------- | ----------------------------------------- |
| Yes/no environment or tech questions   | `DecisionPoint` (true/false via Query)    |
| Fix in N days / forensic triage / wait | `TriageDecision.action` + `timeline_days` |
| Playbook per org                       | `Ruleset` (built-in + custom)             |
| Order of steps / escalation            | Rule `priority` + ruleset `precedence`    |


We do **not** say we are BOD 26-04 compliant.
We only reuse the idea: **clear checks → clear actions with time**.

### Mapping from #1961 examples


| Example from #1961                 | How we map it                                       |
| ------------------------------------ | --------------------------------------------------- |
| Dev-only package → lower priority    | Package DP on purpose / `is_deployed` → `downgrade` |
| Exploit present → high priority      | Vuln DP → `upgrade` / `apply_patch`                 |
| CVSS / risk under threshold → ignore | DP + rule → `downgrade` or default                  |
| CWE XXX → raise/demote               | DP on CWE → matching decision                       |
| SSVC = ZZZ → YYYY                    | DP(s) on SSVC fields when present                   |
| Risk above 7 → notify                | `notify` action (product; audiences below)          |
| EPSS above X → promote               | Vuln DP on EPSS                                     |


---

## How to give the policy: YAML vs Web UI

### YAML

- main way for **built-in / hardcoded** packs
- examples: CRA, samples, fixtures we ship
- load with `load_policy_yaml`
- easy to keep in git

### Web UI

- main way for **user rulesets**
- daily edits of decision points, rules, and decisions
- same models as YAML

Both go to the same DB objects.

- Built-in packs ship as YAML.
- Users can copy or extend them and keep their own rulesets in the UI.

---

## When triage runs

Triage runs on **events**, and also once a **day**.

### Incremental triggers

Run again for the affected product(s) when:


| Trigger               | What happens                                        | Why it matters                                |
| --------------------- | --------------------------------------------------- | --------------------------------------------- |
| **New vulnerability** | New vuln, or vuln data change that hits the product | Risk checks can change                        |
| **Package change**    | Package added / updated / deleted on the product    | Inventory checks and matching packages change |
| **Product change**    | Metadata, links, ruleset assignment, etc.           | Product checks and scope change               |


### Daily cycle

A daily job runs triage again for products that need it.

This also catches external updates even if nobody edited the product that day:

---

## Supported actions (labels) and where they apply

A triage decision has an **action label**.
Each label always applies to **packages** or to the **product**.

### Package actions


| Action              | Meaning                                                |
| ------------------- | ------------------------------------------------------ |
| **Upgrade**         | Move affected package(s) to a newer version            |
| **Downgrade**       | Lower the urgency for affected package(s)              |
| **Apply Patch**     | Apply a security / vendor patch on affected package(s) |
| **Replace Package** | Replace affected package(s) with another component     |


### Product actions


| Action                         | Meaning                                                                 |
| ------------------------------ | ----------------------------------------------------------------------- |
| **Forensic Analysis**          | Check if there was compromise / impact (like BOD 26-04 forensic triage) |
| **Reachability Analysis**      | Check if the vulnerable code is reachable in this product               |
| **Change Config**              | Fix by config change (feature flag, harden, disable a path)             |
| **Apply Network Restrictions** | Limit network access (segmentation, egress/ingress rules)               |
| **Notify**                     | Notify people *(todo: wire channels)*                                   |
| **Create a DejaCode request**  | Open a DejaCode request for a human to follow up                        |


**Notify audiences (todo)**

- Regulatory Agency
- Users
- Customers

**How apply-to works**

- **Package actions** → only the **packages that matched** the rule
(not every package in the product by default)
- **Product actions** → the **product** we evaluated

---

## Chosen design (engine and models)

### Main objects


| Object           | Role                                                                                          |
| ---------------- | --------------------------------------------------------------------------------------------- |
| `DecisionPoint`  | Named true/false check. `target`: package / vulnerability / product. FK to `reporting.Query`. |
| `TriageDecision` | Result: action label + `timeline_days`. Apply-to comes from the action.                       |
| `Ruleset`        | Group of rules. Has `precedence` and optional `default_decision`. Built-in or user-made.      |
| `Rule`           | One row. Lower `priority` runs first.                                                         |
| `RuleCondition`  | One column: decision point + expected `TRUE` / `FALSE`. No `ANY`.                             |


### How evaluation works (as in code today)

**Entry**

```text
EvaluationEngine.evaluate(product, rulesets, user=None)
  → EvaluationResult(decision, vector)
```

**Package / vulnerability points**

- use `**any`**
- true if **any** package in `product.all_packages` matches
- or **any** vuln from:
  - `product.get_vulnerability_qs()`
  - **or** `product.affected_by_vulnerabilities`

**Product points**

- true if this product matches the query
- uses `Product.unsecured_objects`
- (normal Product manager is empty without a user)

**Matching**

1. all conditions on a rule must match
2. first matching rule by `priority` wins inside a ruleset
3. among enabled rulesets, highest `precedence` wins
  (or that ruleset’s `default_decision`)

**Other details**

- **User:** optional. Passed to `Query.get_qs(user=…)` for package/vuln queries.
- **Rulesets:** caller must pass them today.
Model text talks about assigning them to a product,
but **there is no Product ↔ Ruleset link yet**.

### Policy loading (as in code today)

```text
load_policy_yaml(source, dataspace)
```

Creates / updates, in one DB transaction:

1. decisions
2. decision points (Query / Filter in that dataspace)
3. rulesets

**Fact about dataspace**


| Object                                          | Dataspace-scoped?             |
| ----------------------------------------------- | ----------------------------- |
| `DecisionPoint`, `TriageDecision`, `Ruleset`, … | **No** — global unique `name` |
| `Query` / `Filter` from loader                  | **Yes**                       |


Multi-tenant isolation for triage objects is not done yet.

---

## Consequences

### Good

- no extra policy runtime
- feels like reporting filters that users already know
- action labels say **where** the action applies (package vs product)
- clear when to run: inventory/vuln change + daily job

### Not so good / later

- no full OPA/Drools power in v1 (on purpose)
- tables get big if there are many decision points

---

## Usage reference

### Small YAML example

```yaml
decisions:
  upgrade-now:
    action: upgrade
    timeline_days: 7

decision_points:
  critical_vulnerability:
    target: vulnerability
    query:
      filters:
        - field: risk_score
          lookup: gte
          value: "8.0"

rulesets:
  security-policy:
    precedence: 100
    default_decision: upgrade-now
    rules:
      - name: Critical exposure
        priority: 10
        decision: upgrade-now
        conditions:
          critical_vulnerability: true
```

---

## References

- [aboutcode-org/vulnerablecode#1961 — rule-based triage tools](https://github.com/aboutcode-org/vulnerablecode/issues/1961)
- [CISA BOD 26-04: Implementation Guidance for Prioritizing Security Updates Based on Risk](https://www.cisa.gov/news-events/directives/bod-26-04-implementation-guidance-prioritizing-security-updates-based-risk)
- Document shape inspired by [PURL ADR 001 — software without registry (`sid`)](https://github.com/package-url/purl-spec/blob/main/docs/decisions/001-PURL_type-software_without_registry.md)

