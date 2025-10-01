# AboutCode

![Doc Build](https://github.com/aboutcode-org/aboutcode/actions/workflows/docs-ci.yml/badge.svg)

## What is AboutCode?

**AboutCode** is a collection of FOSS (Free and Open Source Software) projects focused on Software Composition Analysis (SCA). It helps you answer critical questions about software:

- Where does this code come from?
- What license or copyright does it carry?
- Are there known vulnerabilities?
- Who maintains it?
- What are its dependencies?

In today's world of millions of open source components, it's essential to understand code origin, licensing, and security risks before reuse. AboutCode tools are designed to make this easy and reliable.

> **Note:**  
> This is the meta-repository with information on AboutCode's open source activities, not the code itself.  
> See the [Projects section](#projects) below or visit our [Wiki](https://github.com/aboutcode-org/aboutcode/wiki) for detailed links to the codebases.

---

## 🔧 Documentation Build

To manually build the documentation:

```bash
make docs

## 🔗 Important Links

- 🌐 **Website**: [aboutcode.org](https://aboutcode.org)
- 📚 **Docs**: [aboutcode.readthedocs.io](https://aboutcode.readthedocs.io/en/latest/)
- 💬 **Chat**:
  - [Gitter: aboutcode-org#discuss](https://app.gitter.im/#/room/#aboutcode-org_discuss:gitter.im)
  - [Element (Matrix)](https://matrix.to/#/#aboutcode-org_discuss:gitter.im) — use `gitter.im` as the homeserver
- 📅 **Weekly Meetings**: [Meeting Minutes](https://github.com/aboutcode-org/aboutcode/wiki/MeetingMinutes)
- 📖 **GSoC Info**: [GSoC Wiki](https://github.com/aboutcode-org/aboutcode/wiki)

---

## 🚀 Projects

Each AboutCode project has its own repository and purpose. Here are the key ones:

### 🧩 Core Projects

- **[ScanCode Toolkit](https://github.com/aboutcode-org/scancode-toolkit)**  
  Detect origin, license, and dependencies in source code. Most popular tool.

- **[Scancode.io](https://github.com/aboutcode-org/scancode.io)**  
  Web-based and API-driven UI for running ScanCode in pipelines on containers and packages.

- **[VulnerableCode](https://github.com/aboutcode-org/vulnerablecode)**  
  API and DB to track vulnerabilities in software packages. Includes Vulntotal tool.

- **[purlDB](https://github.com/aboutcode-org/purldb)**  
  Database of package URLs (purls) and associated data from scans.

- **[FetchCode](https://github.com/aboutcode-org/fetchcode)**  
  Library for fetching code via HTTP, FTP, Git, etc.

- **[AboutCode Toolkit](https://github.com/aboutcode-org/aboutcode-toolkit)**  
  CLI tools to document code provenance and generate attribution notices using YAML.

- **[container-inspector](https://github.com/aboutcode-org/container-inspector)**  
  Analyze Docker images for component structure and origin.

- **[Scancode Workbench](https://github.com/aboutcode-org/scancode-workbench)**  
  GUI app to visualize and review ScanCode results (React-based).

---

### 🛠️ Support Tools

- **[univers](https://github.com/aboutcode-org/univers)**  
  Parse and compare package versions and version ranges.

- **[python-inspector](https://github.com/aboutcode-org/python-inspector)**  
  Inspect Python packages and dependencies.

- **[nuget-inspector](https://github.com/aboutcode-org/nuget-inspector)**  
  Same as above, for NuGet (C#/.NET) packages.

- **[license-expression](https://github.com/aboutcode-org/license-expression)**  
  Normalize and compare SPDX-like license expressions with boolean logic.

- **[TraceCode Toolkit](https://github.com/aboutcode-org/tracecode-toolkit)**  
  Use `strace` to map binary files back to source via syscall tracing.

---

### 🌐 Standards and Community Work

We actively collaborate with and contribute to:

- [Package URL (purl)](https://github.com/package-url) — Standard to identify software packages
- [SPDX](https://spdx.org) — Open standard for software licensing metadata
- [CycloneDX](https://cyclonedx.org) — OWASP BOM spec for supply chain risk
- [ClearlyDefined](https://clearlydefined.io) — Improve open source licensing metadata

---

### 🧬 Data Model

- **ABCD (AboutCode Data)**  
  Shared data format for interoperability across AboutCode tools.  
  See [AboutCode Data Docs](https://aboutcode.readthedocs.io/en/latest/aboutcode-data/abcd.html).


