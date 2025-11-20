# AboutCode

### What is AboutCode?

AboutCode is a family of free and open-source tools that help organizations
understand *what* software they are using, *where* it comes from, *how* it is
licensed, and *whether it is safe to use*. Our tools analyze source code,
packages, containers, and build artifacts to answer questions such as:

- Where does this code come from? Which package and version?
- What is its license? What are the copyright details?
- Are there vulnerabilities in this component?
- What dependencies does it use? Are they maintained or risky?

Millions of open-source packages are available on the internet.  
AboutCode provides tools that make it easy and reliable to consume open source
safely by generating high-quality, reusable open data.

> **Note**  
> This repository provides overview information about AboutCode.  
> Project-specific code and documentation are available in each project’s own
> repository (see **Projects** below).

---

### Documentation Build

![Doc Build](https://github.com/aboutcode-org/aboutcode/actions/workflows/docs-ci.yml/badge.svg)

To build the documentation manually:

```
make docs
```

---

### Important Links

- Website: https://aboutcode.org  
- Documentation: https://aboutcode.readthedocs.io/en/latest/  
- Community Chat:  
  - Gitter/Matrix: https://matrix.to/#/#aboutcode-org_discuss:gitter.im  
- GSoC Information:  
  https://github.com/aboutcode-org/aboutcode/wiki  
- Weekly Meetings:  
  https://github.com/aboutcode-org/aboutcode/wiki/MeetingMinutes

---

# Projects

AboutCode consists of multiple open-source projects.  
Each project has its own repository and documentation.

## 🔹 **Primary Projects**

### **ScanCode Toolkit**  
https://github.com/aboutcode-org/scancode-toolkit  
Detects licenses, copyrights, package metadata, dependencies, and file
origins. Uses a flexible plug-in architecture.  
Maintainer: @pombredanne

### **Scancode.io**  
https://github.com/aboutcode-org/scancode.io  
Web application and API for managing ScanCode workflows, pipelines, and
container/package analysis.  
Maintainer: @tdruez

### **VulnerableCode**  
https://github.com/aboutcode-org/vulnerablecode  
Aggregates and normalizes vulnerability data for software packages. Provides an
API and web UI. Includes Vulntotal.  
Maintainers: @tg1999, @pombredanne

### **purlDB**  
https://github.com/aboutcode-org/purldb  
Database and collection pipelines for Package URLs (purl). Contains package
metadata and relationships.  
Maintainer: @jyang

### **univers**  
https://github.com/aboutcode-org/univers  
Library to parse, compare, and match package versions and version ranges.

### **ScanCode Workbench**  
https://github.com/aboutcode-org/scancode-workbench  
Desktop UI for reviewing and visualizing ScanCode Toolkit scan results.

### **AboutCode Toolkit**  
https://github.com/aboutcode-org/aboutcode-toolkit  
Tools to document code provenance and generate attribution notices.  
Maintainer: @chinyeungli

---

## 🔹 **Supporting Tools**

### **FetchCode**  
https://github.com/aboutcode-org/fetchcode  
Reliable code fetcher for HTTP, FTP, Git, and other version control systems.

### **container-inspector**  
https://github.com/aboutcode-org/container-inspector  
Analyzes Docker and OCI images for component provenance.  
Maintainer: @pombredanne

### **python-inspector**  
https://github.com/aboutcode-org/python-inspector  
Dependency resolver for Python packages.

### **nuget-inspector**  
https://github.com/aboutcode-org/nuget-inspector  
Dependency resolver for NuGet packages.

### **license-expression**  
https://github.com/aboutcode-org/license-expression  
Parses, normalizes, and evaluates SPDX and SPDX-like license expressions.

### **ABCD — AboutCode Data**  
Shared data model used across many AboutCode tools.  
Documentation:  
https://aboutcode.readthedocs.io/en/latest/aboutcode-data/abcd.html

---

## 🔹 **Standards & Ecosystem Projects**

- **Package URL (purl)**  
  https://github.com/package-url  
  Open standard for identifying software packages.

- **SPDX**  
  https://spdx.org  
  Industry standard for license and package metadata.

- **CycloneDX**  
  https://cyclonedx.org  
  SBOM standard from OWASP for supply-chain security.

- **ClearlyDefined**  
  https://clearlydefined.io  
  Community project to improve FOSS licensing documentation.

