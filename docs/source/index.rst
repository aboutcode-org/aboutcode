#########
AboutCode
#########

Welcome to the AboutCode documentation homepage. `AboutCode.org <https://www.aboutcode.org/>`_ is a community of open source developers who are trying to make open source easier to use by providing open source tools to discover, identify and track open source components (aka Software Composition Analysis – SCA). AboutCode is the collective name for these open source tools.

This home page provides a directory of our major projects and their documentation on ReadTheDocs plus information about how to contribute to AboutCode documentation

All community contributions are welcome.


----

*****************
Table of Contents
*****************

.. toctree::
   :maxdepth: 1

   aboutcode-project-overview
   aboutcode-data/abcd
   contributing
   doc_guidelines
   license

----

**************************
AboutCode Project Overview
**************************

The primary current AboutCode projects are:

- `ScanCode Toolkit <https://github.com/nexB/scancode-toolkit>`_: is a code scanning "engine" and command-line tool to detect the provenance and license of code and its dependencies. ScanCode TK is a command-line tool with many scanning options and output formats (JSON, HTML, CSV or SPDX). ScanCode detects licenses, copyrights, package manifests and more in both source code and binary files. There is already a large set of pre- and post-plugins and you can also create your own plugins.

  - Read more at: https://scancode-toolkit.readthedocs.io
  - Get the code at: https://github.com/nexB/scancode-toolkit

|

- `ScanCode.io <https://github.com/nexB/scancode.io>`_: is a Cloud application server that automates Software Composition Analysis with pipelines. ScanCode.io has standard pipelines for Docker and VM images, root filesystems and packages. ScanCode.io organizes these complex code analyses as scripted pipelines and stores the results in its database for automated code analysis.

  - Read more at: https://scancodeio.readthedocs.io
  - Get the code at: https://github.com/nexB/scancode.io

|

- `ScanCode Workbench <https://github.com/nexB/scancode-workbench>`_: is a desktop application (based on Electron) to review the results of a scan and document your conclusions about the origin and license of software components and packages.

  - Read more at: https://scancode-workbench.readthedocs.io
  - Get the code at: https://github.com/nexB/scancode-workbench

|

- `VulnerableCode <https://github.com/nexB/vulnerablecode>`_: is an early stage project to provide a free and open source database of vulnerabilities and the packages they impact with tools to aggregate and correlate those vulnerabilities. The initial development of VulnerableCode was supported by the NLNet Foundation.

  - Read more at: https://vulnerablecode.readthedocs.io
  - Get the code at: https://github.com/nexB/vulnerablecode

|

- `AboutCode Toolkit <https://github.com/nexB/aboutcode-toolkit>`_: AboutCode Toolkit provides a set of command-line tools to generate Attribution documents and software BOM reports from any source. It also provides a standard ABCD format for yaml files to document software provenance and license metadata in a codebase where this is not already covered by a package manager.

  - Read more at: https://aboutcode-toolkit.readthedocs.io
  - Get the code at: https://github.com/nexB/aboutcode-toolkit
