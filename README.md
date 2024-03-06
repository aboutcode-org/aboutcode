# AboutCode

### What is AboutCode?

AboutCode is a family of FOSS projects to uncover data ... about software:

- Where does the code come from? Which software package?
- What is its license? Copyright?
- Is the code vulnerable, maintained, andd well-coded?
- What are its dependencies, are there vulnerabilities/licensing issues?

All these are important questions to answer: millions of free and open-source 
software components are available on the web for reuse.

Knowing where a software package comes from, its license, and whether it is 
vulnerable should be a problem of the past so that everyone can safely 
consume more free and open-source software. We support open-source software and 
open data generated and curated by our applications.


> **_NOTE:_** This repository contains  information on aboutcode open source activities and not
  the actual code repository. See the [projects section](https://github.com/nexB/aboutcode#projects)
  below for links to all the code repositories of our projects with a brief overview and our
  [wiki](https://github.com/nexB/aboutcode/wiki) if you are looking to participate.

### Documentation Build Status

![Doc Build](https://github.com/nexB/aboutcode/actions/workflows/docs-ci.yml/badge.svg)

### Important Links 

Our homepage is at http://aboutcode.org

Our documentation (in progress) is at https://aboutcode.readthedocs.io/en/latest/ 

Join the chat online at [app.gitter.im : aboutcode-org#discuss](https://app.gitter.im/#/room/#aboutcode-org_discuss:gitter.im)
or if you're using the element app set the homeserver to `gitter.im` and then join the [aboutcode-org#discuss](https://matrix.to/#/#aboutcode-org_discuss:gitter.im)
chatroom. Introduce yourself and start the discussion!

Look at our [wiki](https://github.com/nexB/aboutcode/wiki) for information about our participation
in the GSoC and GSoD programs.

We have a weekly meeting, see more details [here](https://github.com/nexB/aboutcode/wiki/MeetingMinutes).

### Projects

Each AboutCode project has its own repository:

- **[ScanCode Toolkit](https://github.com/nexB/scancode-toolkit)**: a set of code scanning tools to detect
  the origin and license of code and dependencies. ScanCode now uses a plug-in architecture to run a series
  of scan-related tools in one process flow. This is the most popular project used by hundreds of software
  teams. The lead maintainer is @pombredanne

- **[Scancode.io](https://github.com/nexB/scancode.io)**: is a web-based API to run and review scans in
  rich scripted pipelines on different kinds of containers, docker images, package archives, manifests etc.,
  to get information on licenses, copyrights, sources, and vulnerabilities. The lead maintainer is @tdruez.

- **[VulnerableCode](https://github.com/nexB/vulnerablecode)**: is a web-based API and 
  database to collect and track all the known software package vulnerabilities, with
  affected and fixed packages, references, and a standalone tool Vulntotal to compare
  this vulnerability information across similar tools. This is maintained by @tg1999 and @pombredanne.

- **[Univers](https://github.com/nexB/univers)** is a package to parse and compare
  all the package versions and all the ranges.

- **[PurlDB](https://github.com/nexB/purldb)** consists of tools to create and expose
  a database of purls (Package URLs) and also has package data for all of these
  packages created from scans. This is maintained by @jyang.

- **[FetchCode](https://github.com/nexB/fetchcode)** is a library
  to reliably fetch any code via HTTP, FTP, and version control systems such as git.

- **[Scancode Workbench](https://github.com/nexB/scancode-workbench)**: a desktop application
  based on typescript and react to visualize and review scan results from scancode scans. 

- **[AboutCode Toolkit](https://github.com/nexB/aboutcode-toolkit)**: a set of command line tools to document
  the provenance of your code and generate attribution notices.  AboutCode Toolkit uses small yaml files to
  document code provenance inside a codebase. The lead maintainer is @chinyeungli.

- **[Container-inspector](https://github.com/nexB/container-inspector)**: a tool to analyze the structure
  and provenance of software components in Docker images using static analysis. Maintained by @pombredanne

- **[Python-inspector](https://github.com/nexB/python-inspector)** and **[Nuget inspector](https://github.com/nexB/nuget-inspector/)**
  inspects manifests and code to resolve dependencies (vulnerable and non-vulnerable) for
  python and nuget packages, respectively.

- **[License-expression](https://github.com/nexB/license-expression/)**: a library to parse, analyze, compare,
  and normalize SPDX and SPDX-like license expressions using a boolean logic expression engine.
  See https://spdx.org/spdx-specification-21-web-version#h.jxpfx0ykyb60 to understand what an expression is.
  See https://github.com/nexB/license-expression for the code. The underlying boolean engine is live at
  https://github.com/bastikr/boolean.py. Both are co-maintained by @pombredanne.

- **ABCD aka AboutCode Data**: a simple set of conventions to define data structures that all the
  AboutCode tools can understand and use to exchange data. The details are at
  [AboutCode Data](https://aboutcode.readthedocs.io/en/latest/aboutcode-data/abcd.html).
  ABOUT files and ScanCode Toolkit data are examples of this approach. Other projects, such as
  https://libraries.io and [OSS Review Toolkit](https://github.com/heremaps/oss-review-toolkit), also use these conventions. 

- **[TraceCode Toolkit](https://github.com/nexB/tracecode-toolkit)**: a set of tools to trace files from your
  deployment or distribution packages back to their origin in a development codebase or repository.
  The primary tool uses strace https://github.com/strace/strace/ to trace system calls on Linux and construct
  a build graph from syscalls to show which files are used to build a binary. We are contributors to strace.
  Maintained by @pombredanne

We also co-started and worked closely with other FOSS organizations and projects:

- [Package URL](https://github.com/package-url): a widely used standard to reference software packages of all types with simple,
  readable and concise URLs.

- [SPDX](http://SPDX.org): aka. Software Package Data Exchange, a spec to document the origin and licensing of packages.

- [CycloneDX](https://cyclonedx.org) aka. OWASP CycloneDX is a full-stack
  Bill of Materials (BOM) standard that provides advanced supply chain
  capabilities for cyber risk reduction.

- [ClearlyDefined](https://ClearlyDefined.io): a project to review and help FOSS projects improve their licensing
  and documentation clarity. This project is incubating with https://opensource.org.
