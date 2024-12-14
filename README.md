# AboutCode

**AboutCode** is a family of FOSS (Free and Open Source Software) projects designed to uncover data about software:

- Where does the code come from? Which software package?  
- What is its license? Copyright?  
- Is the code vulnerable, maintained, or well-written?  
- What are its dependencies? Are there vulnerabilities or licensing issues?  

These questions are critical, as millions of free and open source software components are available for reuse on the web. By answering these, we aim to make software consumption safer and more efficient.  

We support not only open source software but also open data, which is generated and curated by our applications.  

> **Note:**  
> This repository contains information about AboutCode's open source activities and is not the actual code repository. See the **Projects** section below for links to all code repositories, along with an overview of each project. Refer to our [wiki](#important-links) if you’d like to contribute.

---

## Documentation Build Status
![Doc Build](https://github.com/aboutcode-org/aboutcode/actions/workflows/docs-ci.yml/badge.svg)

---

## Important Links
- **Homepage:** [aboutcode.org](http://aboutcode.org)  
- **Documentation (in progress):** [aboutcode.readthedocs.io](https://aboutcode.readthedocs.io/en/latest/)  
- **Online Chat:** Join the discussion on Gitter at [app.gitter.im](https://app.gitter.im/#/room/#aboutcode-org#discuss). Alternatively, use the Element app, set the homeserver to `gitter.im`, and join the `#aboutcode-org#discuss` chatroom.  
- **Wiki:** Visit our [wiki](https://github.com/aboutcode-org/aboutcode/wiki) for information on participation in GSoC (Google Summer of Code) and GSoD (Google Season of Docs).  
- **Weekly Meeting Details:** [Meeting Schedule](#)  

---

## Projects
Each AboutCode project has its own repository:

1. **[ScanCode Toolkit](https://github.com/aboutcode-org/scancode-toolkit):**  
   A set of code scanning tools to detect the origin, license, and dependencies of code. It uses a plug-in architecture for streamlined scanning processes.  
   - **Lead Maintainer:** [@pombredanne](#)

2. **[Scancode.io](https://github.com/aboutcode-org/scancode.io):**  
   A web-based API for running and reviewing scans on containers, Docker images, package archives, and manifests.  
   - **Lead Maintainer:** [@tdruez](#)

3. **[VulnerableCode](https://github.com/aboutcode-org/vulnerablecode):**  
   A web-based API and database for tracking software vulnerabilities, affected/fixed packages, and references.  
   - **Maintainers:** [@tg1999](#), [@pombredanne](#)

4. **[univers](https://github.com/aboutcode-org/univers):**  
   A package for parsing and comparing all package versions and ranges.

5. **[purlDB](https://github.com/aboutcode-org/purlDB):**  
   Tools to create and expose a database of Package URLs (purls) and associated package data.  
   - **Maintainer:** [@jyang](#)

6. **[FetchCode](https://github.com/aboutcode-org/fetchcode):**  
   A library for fetching code reliably via HTTP, FTP, and version control systems like Git.

7. **[Scancode Workbench](https://github.com/aboutcode-org/scancode-workbench):**  
   A desktop application based on TypeScript and React to visualize and review scan results from ScanCode scans.

8. **[AboutCode Toolkit](https://github.com/aboutcode-org/aboutcode-toolkit):**  
   Command-line tools for documenting code provenance and generating attribution notices.  
   - **Lead Maintainer:** [@chinyeungli](#)

9. **[container-inspector](https://github.com/aboutcode-org/container-inspector):**  
   A tool for analyzing the structure and provenance of software components in Docker images.  
   - **Maintainer:** [@pombredanne](#)

10. **[python-inspector](https://github.com/aboutcode-org/python-inspector) and [nuget-inspector](https://github.com/aboutcode-org/nuget-inspector):**  
    Tools to inspect manifests and resolve dependencies (vulnerable and non-vulnerable) for Python and NuGet packages, respectively.

11. **[license-expression](https://github.com/aboutcode-org/license-expression):**  
    A library to parse, analyze, compare, and normalize SPDX and SPDX-like license expressions using a Boolean logic engine.  
    - See the [SPDX Specification](https://spdx.org/spdx-specification-21-web-version#h.jxpfx0ykyb60) for details on expressions.  
    - Boolean engine: [boolean.py](https://github.com/bastikr/boolean.py)  

12. **[ABCD (AboutCode Data)](https://github.com/aboutcode-org/abcd):**  
    A set of conventions defining data structures that AboutCode tools use to exchange data.  

13. **[TraceCode Toolkit](https://github.com/aboutcode-org/tracecode-toolkit):**  
    Tools to trace files from deployment packages back to their origin in development repositories using system calls.  
    - **Maintainer:** [@pombredanne](#)

---

## Other Contributions
We also collaborate with several FOSS organizations and projects:  

- **[Package URL](https://github.com/package-url):** A standard for referencing software packages with simple, readable URLs.  
- **[SPDX](https://spdx.dev):** A specification for documenting package origin and licensing.  
- **[CycloneDX](https://cyclonedx.org):** A Bill of Materials (BOM) standard for advanced supply chain capabilities.  
- **[ClearlyDefined](https://clearlydefined.io):** A project to improve licensing and documentation clarity for FOSS projects.

---

## How to Contribute
1. Check our [documentation](https://aboutcode.readthedocs.io/en/latest/) to understand our tools and workflows.  
2. Browse open issues on our repositories and join discussions in the [chatroom](https://app.gitter.im/#/room/#aboutcode-org#discuss).  
3. Submit pull requests following our [contribution guidelines](#).  

---

Let us know how we can make AboutCode better!
