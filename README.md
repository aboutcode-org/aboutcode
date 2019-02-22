# aboutcode

AboutCode is a suite of tools to uncover data ... about software and code:

 - Where does it come from?
 - What is its license?
 - Is it secure, maintained, well coded?

These are important questions when there are millions of free and open source software components available on the web.

Our homepage lives at http://aboutcode.org

Each AboutCode project has its own repository:

- **[ScanCode Toolkit](https://github.com/nexB/scancode-toolkit)**: This is a set of code scanning tools to detect the origin and license of code and dependencies. ScanCode now uses a plug-in architecture to run a series of scan-related tools in one process flow. This is the most popular projects and is used by 100's of software teams. https://github.com/nexB/scancode-toolkit . The lead maintainer is @pombredanne

- **[Scancode Workbench](https://github.com/nexB/scancode-workbench)** 
(formerly AboutCode Manager) This is a desktop application (based on Electron) to review the results of a scan and document your conclusions about the origin and license of software components and packages. https://github.com/nexB/aboutcode-manager . The lead maintainer is @majurg

- **[AboutCode Toolkit](https://github.com/nexB/aboutcode-toolkit)**: This is a set of command line tools to document the provenance of your code and generate attribution notices.  AboutCode Toolkit uses small yaml files to document code provenance inside a codebase. https://github.com/nexB/aboutcode-toolkit . The lead maintainer is @chinyeungli

- **[TraceCode Toolkit](https://github.com/nexB/tracecode-toolkit)**: This is a set of tools to trace files from your deployment or distribution packages back to their origin in a development codebase or repository.  The primary tool uses strace https://github.com/strace/strace/ to trace system calls on Linux and construct a build graph from syscalls to show which files are used to build a binary. We are contributors to strace. Maintained by @pombredanne

- **[Conan](https://github.com/nexB/conan)**: stands for "CONtainer ANalysis" and is a tool to analyze the structure and provenance of software components in Docker images using static analysis. https://github.com/nexB/conan Maintained by @pombredanne

- **[license-expression](https://github.com/nexB/license-expression/)**: this is a library to parse, analyze, compare and normalize SPDX and SPDX-like license expressions using a boolean logic expression engine. See https://spdx.org/spdx-specification-21-web-version#h.jxpfx0ykyb60 to understand what an expression is. See https://github.com/nexB/license-expression for the code. The underlying boolea engine live at https://github.com/bastikr/boolean.py . Both are co-maintained by @pombredanne

- **ABCD aka AboutCode Data** is a simple set of conventions to define data structures that all the AboutCode tools can understand and use to exchange data. The specification lives in this repository. .ABOUT files and ScanCode tooklit data are example of this approach. Other projects such as https://libraries.io and and [OSS Review Toolkit](https://github.com/heremaps/oss-review-toolkit) are also using these conventions. 

- **[DeltaCode](https://github.com/nexB/deltacode)** is a command line
tool to compare scans and determine if and where there are material
differences that affect licensing. The lead maintainer is @majurg

- **[VulnerableCode](https://github.com/nexB/vulnerablecode)**: an emerging
server-side application to collect and track known package vulnerabilities.


We also co-started and work closely with a few key other orgs and projects:

- [Package URL](https://github.com/package-url)  which is an emerging
standard to reference software packages of all types with simple, readable and
concise URLs.

- [SPDX](http://SPDX.org) aka. Software Package Data Exchange, a spec to
document the origin and licensing of packages.

- [ClearlyDefined](https://ClearlyDefined.io) to review and help FOSS projects
improve their licensing and documentation clarity. This project is incubating
with https://opensource.org
