# AboutCode Documentation

### What is AboutCode

AboutCode is a suite of tools to uncover data ... about software and code:

 - Where does it come from?
 - What is its license?
 - Is it secure, maintained, well coded?

These are important questions when there are millions of free and open source software components available on the web.

### Documentation Build Status

[![Build Status](https://travis-ci.org/nexB/aboutcode.svg?branch=master)](https://travis-ci.org/nexB/aboutcode)

### Important Links 

Our homepage is at http://aboutcode.org

Our documentation (in progress) is at https://aboutcode.readthedocs.io/en/latest/ 

AboutCode Documentation Group Email Addresses:

- Join: https://groups.io/g/AboutCode/join
- Post: AboutCode@groups.io
- Subscribe: AboutCode+subscribe@groups.io
- Unsubscribe: AboutCode+unsubscribe@groups.io
- Group Owner: AboutCode+owner@groups.io

If you want to get in touch with the team with issues other than documentation, head to the gitter channel [here](https://gitter.im/aboutcode-org/discuss).

### Projects

Each AboutCode project has its own repository:

- **[ScanCode Toolkit](https://github.com/nexB/scancode-toolkit)**: a set of code scanning tools to detect the origin and license of code and dependencies. ScanCode now uses a plug-in architecture to run a series of scan-related tools in one process flow. This is the most popular projects and is used by 100's of software teams . The lead maintainer is @pombredanne

- **[Scancode.io](https://github.com/nexB/scancode.io)**: a web-based and
API to run and review scans in rich scripted ScanPipe pipelines.

- **[Scancode Workbench](https://github.com/nexB/scancode-workbench)**: a desktop application (based on Electron) to review the results of a scan and document your conclusions about the origin and license of software components and packages. 

- **[AboutCode Toolkit](https://github.com/nexB/aboutcode-toolkit)**: a set of command line tools to document the provenance of your code and generate attribution notices.  AboutCode Toolkit uses small yaml files to document code provenance inside a codebase. The lead maintainer is @chinyeungli

- **[TraceCode Toolkit](https://github.com/nexB/tracecode-toolkit)**: a set of tools to trace files from your deployment or distribution packages back to their origin in a development codebase or repository.  The primary tool uses strace https://github.com/strace/strace/ to trace system calls on Linux and construct a build graph from syscalls to show which files are used to build a binary. We are contributors to strace. Maintained by @pombredanne

- **[container-inspector](https://github.com/nexB/container-inspector)**: a tool to analyze the structure and provenance of software components in Docker images using static analysis. Maintained by @pombredanne

- **[license-expression](https://github.com/nexB/license-expression/)**: a library to parse, analyze, compare and normalize SPDX and SPDX-like license expressions using a boolean logic expression engine. See https://spdx.org/spdx-specification-21-web-version#h.jxpfx0ykyb60 to understand what an expression is. See https://github.com/nexB/license-expression for the code. The underlying boolea engine live at https://github.com/bastikr/boolean.py . Both are co-maintained by @pombredanne

- **ABCD aka AboutCode Data**: a simple set of conventions to define data structures that all the AboutCode tools can understand and use to exchange data. The details are at [AboutCode Data](https://aboutcode.readthedocs.io/en/latest/aboutcode-data/abcd.html). ABOUT files and ScanCode Toolkit data are example of this approach. Other projects such as https://libraries.io and and [OSS Review Toolkit](https://github.com/heremaps/oss-review-toolkit) are also using these conventions. 

- **[DeltaCode](https://github.com/nexB/deltacode)**: a command line tool to compare scans and determine if and where there are material
differences that affect licensing. 

- **[VulnerableCode](https://github.com/nexB/vulnerablecode)**: an emerging server-side application to collect and track known package vulnerabilities.


We also co-started and work closely with other FOSS orgs and projects:

- [Package URL](https://github.com/package-url): an emerging standard to reference software packages of all types with simple, readable and
concise URLs.

- [SPDX](http://SPDX.org): aka. Software Package Data Exchange, a spec to document the origin and licensing of packages.

- [ClearlyDefined](https://ClearlyDefined.io): a project to review and help FOSS projects improve their licensing and documentation clarity. This project is incubating
with https://opensource.org
