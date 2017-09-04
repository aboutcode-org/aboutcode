# aboutcode
 AboutCode is an umbrella project to uncover data ... about software and code:

 - Where does it come from?
 - What is its license?
 - Is it secure, maintained, well coded?

These are important questions when there are millions of free and open source software components available on the web.

Our homepage lives at http://aboutcode.org

Interested in the Google Summer of Code 2017: AboutCode has been accepted as a mentoring organization in 2017: https://summerofcode.withgoogle.com/organizations/

See https://github.com/nexB/aboutcode/wiki/GSOC-2017 for details.

Each AboutCode project has its own repository:

- ScanCode: This is the scanner to detect the origin and license of code and dependencies. ScanCode is a command line tool. https://github.com/nexB/scancode-toolkit . The lead maintainer is @pombredanne

- AboutCode Manager: This is a desktop application (based on Electron) to review the results of scans and help document conclusions. https://github.com/nexB/aboutcode-manager . The lead maintainer is @jdaguil

- AboutCode Toolkit: This is a set of command line tool to document the provenance of your code and generate attribution notices.  AboutCode Toolkit uses small yaml files to document code provenance inside a codebase. https://github.com/nexB/aboutcode-tookit . The lead maintainer @chinyeungli

- License Expression: this is a library to parse, analyze, compare and normalize SPDX and SPDX-like license expressions using a boolean logic expression engine. See https://spdx.org/spdx-specification-21-web-version#h.jxpfx0ykyb60 to understand what an expression is. See https://github.com/nexB/license-expression for the code. The underlying boolea engine live at https://github.com/bastikr/boolean.py . Both are co-maintained by @pombredanne

- TraceCode-build: this is a tool to analyze the trace files from a build, so that you can learn which files are built into binaries and  included in your deployment or distribution of software. It uses strace https://github.com/strace/strace/ to trace system calls on Linux and construct a build graph from syscalls to show which files are used to build a binary. We are contributors to strace. Maintained by @pombredanne

- Conan: stands for "CONtainer ANalysis" and is a tool to analyze the structure and provenance of software components in Docker images using static analysis. https://github.com/pombredanne/conan Maintained by @pombredanne

- ABCD: or AboutCode Data is a simple set of conventions to define data structures that all the AboutCode tools can understand and use to exchange data. The upcoming specification will live in this repository.
