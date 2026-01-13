# Proposal: Toward a Unified Contributing Experience Across AboutCode Projects

This document outlines a proposal for creating more consistency across contribution workflows in AboutCode repositories. The goal is to make contributing easier for newcomers, reduce friction for maintainers, and simplify CI and development workflows over time.

This is **not** a policy document.  
It is a starting point for discussion based on observed patterns across ScanCode.io, VulnerableCode, DejaCode, Workbench, and other projects.

Feedback and suggestions are welcome.

---

## 1. Motivation

Across AboutCode projects, contributors encounter several differences:

* Different formatting tools (Black, isort, Ruff).
* No consistent PR checklist or structure.
* Some repos use pre-commit, others do not.
* Different levels of test guidance.
* No shared branch naming recommendations.
* No unified guidance around dependency introduction.
* DCO is required everywhere, but enforcement varies.

Unifying these practices does **not** mean changing project identities.  
It simply makes contributions more predictable and reduces small inconsistencies that create noise in reviews and CI.

---

## 2. Proposed Areas for Unification

These are suggestions for discussion — maintainers can expand, remove, or refine them.

### 2.1. Common Contributing Flow

A shared baseline across repos:

1.  Issue-first: discuss changes before implementation.
2.  Fork → branch → develop → tests → PR.
3.  Keep PRs small and focused.

Most projects already follow this; standardizing the wording would help contributors.

---

### 2.2. Code Style & Tooling

Many AboutCode projects use:

* **PEP8** conventions  
* **Black** for formatting  
* **isort** for imports  
* **flake8** or **ruff** for linting  

A unified recommendation could:

* Clarify preferred formatting/linting tools per project.
* Optionally move toward a single toolchain for simplicity.
* Provide a shared baseline `.pre-commit-config.yaml` template that each repo can customize.

This would not replace per-project decisions unless maintainers agree.

---

### 2.3. Pre-commit Hooks (Optional but Helpful)

Many contributors find pre-commit helpful for catching formatting issues early.  
A shared template could simplify onboarding:

```bash
pip install pre-commit
pre-commit install
```

Each repository could choose which hooks to enable.

---

### 2.4. DCO Enforcement

All AboutCode projects rely on DCO sign-off, but implementation varies:

* Manual sign-offs
* CI validation
* Local commit hooks

Clarifying best practices could reduce accidental CI failures.

---

### 2.5. Testing Expectations

A common section across repos could clarify:

* When tests are required
* How to run the test suite
* What CI will check
* Expected test structure (if helpful)

---

### 2.6. Branch Naming (Light Recommendation)

Not a rule, just a helpful suggestion:

* `feature/...`
* `fix/...`
* `chore/...`

This aids readability but is optional.

---

### 2.7. Introducing New Dependencies

A lightweight checklist could help:

* Why is the dependency needed?
* Is the license compatible?
* Is it actively maintained?

Many maintainers already consider these factors implicitly.

---

## 3. Proposed Folder Structure for a Unified Guide

If maintainers agree, each repo could follow:

```
CONTRIBUTING.md                 → short, friendly guide (PR #1)
docs/unified-contributing.md    → optional detailed guidance (this document)
.github/PULL_REQUEST_TEMPLATE.md
.pre-commit-config.yaml         → optional template
```

---

## 4. Open Questions for Maintainers

1. Should AboutCode standardize on a single formatting/linting toolchain?
2. Should pre-commit be recommended across repos?
3. Should we create a shared PR template?
4. Should each repo adopt a version of the dependency checklist?
5. Should we define common “make lint” / “make test” targets?

---

## 5. Next Steps (If Approved)

Future PRs could introduce:

* A shared PR template  
* Optional pre-commit configuration  
* Optional Ruff/Black templates  
* Reusable documentation snippets  

Each change would be small and incremental.

---

## 6. Feedback

This proposal is intentionally broad to allow refinement.  
Suggestions and corrections are welcome.