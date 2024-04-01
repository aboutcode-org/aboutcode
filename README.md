# AboutCode

### What is AboutCode?

AboutCode encompasses a family of FOSS (Free and Open Source Software) projects aimed at revealing crucial data about software. These projects address essential questions such as:

- Where does the code originate from? Which software package does it belong to?
- What is its license and copyright status?
- Is the code vulnerable, actively maintained, and well-written?
- What are its dependencies, and are there any vulnerabilities or licensing issues associated with them?

Answering these questions is paramount, given the abundance of free and open-source software components available for reuse on the web. By providing insights into a software package's origin, license, vulnerability status, and other critical information, AboutCode strives to make consuming free and open-source software safer and more accessible. It not only supports open-source software but also advocates for open data, which is generated and curated by its applications.

> **_NOTE:_** This repository contains information about AboutCode's open-source activities, not the actual code repository. Refer to the [Projects section](https://github.com/nexB/aboutcode#projects) below for links to all the code repositories of our projects, along with brief overviews. For participation guidelines, please visit our [wiki](https://github.com/nexB/aboutcode/wiki).

### Documentation Build Status

![Doc Build](https://github.com/nexB/aboutcode/actions/workflows/docs-ci.yml/badge.svg)

### Important Links 

- Homepage: [AboutCode](http://aboutcode.org)
- Documentation (work in progress): [AboutCode Documentation](https://aboutcode.readthedocs.io/en/latest/)
- Chat Online:
  - [Gitter: aboutcode-org#discuss](https://app.gitter.im/#/room/#aboutcode-org_discuss:gitter.im)
  - [Matrix: aboutcode-org#discuss](https://matrix.to/#/#aboutcode-org_discuss:gitter.im)
- [Wiki](https://github.com/nexB/aboutcode/wiki) for information about our participation in the GSoC (Google Summer of Code) and GSoD (Google Season of Docs) programs.
- [Weekly Meetings Details](https://github.com/nexB/aboutcode/wiki/MeetingMinutes)

### Projects

Each AboutCode project has its own repository:

- **[ScanCode Toolkit](https://github.com/nexB/scancode-toolkit)**: A set of code scanning tools to detect the origin and license of code and dependencies. ScanCode now utilizes a plugin architecture to run various scan-related tools in one process flow. This project is widely used by hundreds of software teams. The lead maintainer is @pombredanne.

- **[Scancode.io](https://github.com/nexB/scancode.io)**: A web-based and API platform for running and reviewing scans in rich scripted pipelines. It can scan different kinds of containers, Docker images, package archives, manifests, etc., to gather information on licenses, copyrights, source, and vulnerabilities. The lead maintainer is @tdruez.

- **[VulnerableCode](https://github.com/nexB/vulnerablecode)**: A web-based API and database for collecting and tracking known software package vulnerabilities. It includes information about affected and fixed packages, references, and a standalone tool called Vulntotal to compare vulnerability information across similar tools. This project is maintained by @tg1999 and @pombredanne.

- **[univers](https://github.com/nexB/univers)**: A package for parsing and comparing all package versions and ranges.

- **[purlDB](https://github.com/nexB/purldb)**: Consists of tools for creating and exposing a database of Purls (Package URLs). It also includes package data created from scans. Maintained by @jyang.

- **[FetchCode](https://github.com/nexB/fetchcode)**: A library for reliably fetching code via HTTP, FTP, and version control systems such as Git.

- **[Scancode Workbench](https://github.com/nexB/scancode-workbench)**: A desktop application based on TypeScript and React for visualizing and reviewing scan results from Scancode scans.

- **[AboutCode Toolkit](https://github.com/nexB/aboutcode-toolkit)**: A set of command-line tools for documenting the provenance of code and generating attribution notices. It uses small YAML files to document code provenance within a codebase. The lead maintainer is @chinyeungli.

- **[container-inspector](https://github.com/nexB/container-inspector)**: A tool for analyzing the structure and provenance of software components in Docker images using static analysis. Maintained by @pombredanne.

- **[python-inspector](https://github.com/nexB/python-inspector)** and **[nuget inspector](https://github.com/nexB/nuget-inspector/)**: These tools inspect manifests and code to resolve dependencies (vulnerable and non-vulnerable) for Python and NuGet packages, respectively.

- **[license-expression](https://github.com/nexB/license-expression/)**: A library for parsing, analyzing, comparing, and normalizing SPDX and SPDX-like license expressions using a boolean logic expression engine. The underlying boolean engine is live at [boolean.py](https://github.com/bastikr/boolean.py). Co-maintained by @pombredanne.

- **ABCD (AboutCode Data)**: A simple set of conventions to define data structures that all AboutCode tools can understand and use to exchange data. Visit the [AboutCode Data](https://aboutcode.readthedocs.io/en/latest/aboutcode-data/abcd.html) page for details. Other projects, such as [libraries.io](https://libraries.io) and [OSS Review Toolkit](https://github.com/heremaps/oss-review-toolkit), also use these conventions.

- **[TraceCode Toolkit](https://github.com/n

exB/tracecode-toolkit)**: A set of tools to trace files from your deployment or distribution packages back to their origin in a development codebase or repository. The primary tool utilizes strace to trace system calls on Linux and construct a build graph from syscalls to show which files are used to build a binary. The project is maintained by @pombredanne.

We also collaborate closely with other FOSS organizations and projects:

- [Package URL](https://github.com/package-url): A widely used standard to reference software packages of all types with simple, readable, and concise URLs.

- [SPDX](http://SPDX.org): Software Package Data Exchange, a spec for documenting the origin and licensing of packages.

- [CycloneDX](https://cyclonedx.org): OWASP CycloneDX is a full-stack Bill of Materials (BOM) standard that provides advanced supply chain capabilities for cyber risk reduction.

- [ClearlyDefined](https://ClearlyDefined.io): A project to review and help FOSS projects improve their licensing and documentation clarity. This project is incubating with [opensource.org](https://opensource.org).
