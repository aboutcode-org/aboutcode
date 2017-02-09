# aboutcode
 AboutCode is an umbrella project to uncover data ... about software code:
 
 - where does it come from?
 - what is its license?
 - is it secure, maintained, well coded?
 All these are questions that are important to find answers to when there are million of free and open source software components available on the web.
  
The main homepage lives at http://aboutcode.org

Each project has its own repository:

- ScanCode: this the scanner to detect the origin and license of code and its dependencies as a command line tool. https://github.com/nexB/scancode-toolkit . The lead maintainer is @pombredanne

- AboutCode Manager: this is a GUI-based, desktop application (based on Electron) to review the results of scans and help document conclusions. https://github.com/nexB/aboutcode-manager . The lead maintainer is @jdaguil

- AtributeCode: this is a command line to document the provenance of code without changing it using a small yaml file. https://github.com/nexB/attributecode/ The lead maintainer @chinyeungli

- License Expression: this is a library to parse, analyze, compare and normalize SPDX and SPDX-like license expressions using a boolean logic expression engine. See https://spdx.org/spdx-specification-21-web-version#h.jxpfx0ykyb60 to understand what an expression is. See https://github.com/nexB/license-expression for the code. The underlying boolea engine live at https://github.com/bastikr/boolean.py . Both are co-maintained by @pombredanne 

- TraceCode-build: this is a tool to analyze the traced execution of a build, so you can learn which files are built into binaries and ultimately deployed in your distributed software. It uses strace https://github.com/strace/strace/ to which we contribute to trace system calls on Linux and reconstruct a build graph from syscalls to find which file is used to build a binary. Maintained by @pombredanne 

-ABCD: or AboutCode Data is a simple set of convention to define data structures that all the AboutCode tools can understand and use to exachnge data together. The upcoming specification will live in this repository.
