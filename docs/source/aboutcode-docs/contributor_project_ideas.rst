.. _contributor_project_ideas:

Contributor Project Ideas
=========================

.. _welcome_to_aboutcode:

Welcome to AboutCode!
---------------------

AboutCode is a project to uncover data ... about software code:


* where does the code come from? which software package?
* what's is its license? copyright?
* is the code secure, maintained, well coded?

All these are questions that are important to find answers to: there are million
of free and open source software components available on the web.

Knowing where a software package comes from, if it is vulnerable and what's its
licensing should be a problem of the past such that everyone can safely consume
more free and open source software.

*Join us to make it so!*

Our tools are used to help detect and report the origin and license of source
code, packages and binaries as well as discover software and package
dependencies, and track security vulnerabilities, bugs and other important
software package attributes. This is a suite of command line tools, web-based
and API servers and desktop applications.

Table of Contents
-----------------


* :ref:`welcome_to_aboutcode`
* :ref:`aboutcode_projects_are`
* :ref:`contact`
* :ref:`technology`
* :ref:`about_your_project_application`
* :ref:`our_project_ideas`

  * :ref:`aboutcode_data_server`
  * :ref:`vulnerablecode_package_security_vulnerability_data_feed_and_scanner`
  * :ref:`integrate_the_license_expression_library_in_scancode_python_and_aboutcode_manager_jscript`
  * :ref:`high_volume_matching_automatons_and_data_structures`
  * :ref:`scancode_scan_deduction`
  * :ref:`license_and_copyright_detection_benchmark`
  * :ref:`improved_copyright_parsing_and_speed_in_scancode`
  * :ref:`transparent_archive_extraction_in_scancode`
  * :ref:`port_scancode_to_python_3_contrib`
  * :ref:`automated_docker_containers_and_vm_images_static_package_analysis`
  * :ref:`static_analysis_of_binaries_for_build_tracing_in_tracecode`
  * :ref:`create_linux_distro_packages_for_scancode`
  * :ref:`package_url_implementations_in_many_programming_languages`
  * :ref:`dependentcode_a_mostly_universal_package_dependencies_resolver`

.. _aboutcode_projects_are:

AboutCode projects are...
-------------------------

- **ScanCode Toolkit** a popular command line tool to scan code for licenses, copyrights and
  packages, used by many organizations and FOSS projects, small and large.

- **AboutCode Manager** a JavaScript, Electron-based desktop application to review scan results
  and document your conclusions

- **AboutCode Toolkit** a set of command line tools to document and inventory known
  packages and licenses and generate attribution docs

- TraceCode Toolkit: a set of command line tools to find which source code is used to create a
  compiled binary

- DeltaCode Toolkit: a new command line tool to compare codebases based on scan and determine if
  and where there are material differences that affect licensing

- VulnerableCode Server: a new server-side application to track package vulnerabilities

- AboutCode Server: a new server-side application to run and organize scans and ABC data
  (formerly ScanCode server)

- ConAn: a command line tool to analyze the code in Docker and container images

- license-expression: a library to parse and render boolean license expression (such as SPDX)

- Other new tools for source and binary code matching/search and package inventories.


We also work closely with other orgs and projects:


- purl aka. Package URLs https://github.com/package-url which is an emerging standard to reference
  software packages of all types.

- SPDX.org aka. Software Package Data Exchange, a spec to document the origin and licensing of
  packages

.. _contact:

Contact
-------

Join the chat online or by IRC at https://gitter.im/aboutcode-org/discuss
introduce yourself and start the discussion!

For personal issues, you can contact the primary org admin directly:
@pombredanne and pombredanne@gmail.com

Please ask questions the smart way: http://www.catb.org/~esr/faqs/smart-questions.html

.. _technology:

Technology
----------

Discovering the origin of code is a vast topic. We primarily use Python for this
and some C/C++ (and eventually Rust) for performance sensitive code and
Electron/JavaScript for GUI. We are open to using any other language within
reason.

Our domain includes text analysis and processing (for instance for copyrights
and licenses), parsing (for package manifest formats), binary analysis (to
detect the origin and license of binaries, which source code they come from,
etc) as well as web based tools and APIs (to expose the tools and libraries as
web services) and low-level data structures for efficient matching (such as Aho-
Corasick and other automata)

.. _about_your_project_application:

About your project application
------------------------------

We expect your application to be in the range of 1000 words. Anything less than
that will probably not contain enough information for us to determine whether
you are the right person for the job. Your proposal should contain at least the
following information, plus anything you think is relevant:


- Your name
- Title of your proposal
- Abstract of your proposal

- Detailed description of your idea including explanation on why is it
  innovative and what it will contribute


- hint: explain your data structures and the main processing flows in details.

- Description of previous work, existing solutions (links to prototypes,
  bibliography are more than welcome)

- Mention the details of your academic studies, any previous work, internships

- Relevant skills that will help you to achieve the goal (programming languages,
  frameworks)?

- Any previous open-source projects (or even previous GSoC) you have contributed
  to and links.

- Do you plan to have any other commitments during GSoC that may affect your
  work? Any vacations/holidays? Will you be available full time to work on your
  project? (Hint: do not bother applying if this is not a serious full time
  commitment)

Join the chat online or by IRC at https://gitter.im/aboutcode-org/discuss
introduce yourself and start the discussion!

You need to understand something about open source licensing or package managers
or code and binaries static analysis or low level data structures. The best way
to demonstrate your capability would be to submit a small patch ahead of the
project selection for an existing issue or a new issue.

We will **always** consider and prefer a project submissions where you have
submitted a patch over any otherr submission without a patch.

.. _our_project_ideas:

Our Project ideas
-----------------

Here is a list of candidate project ideas for your consideration. Your own ideas
are welcomed too! Please chat about them to increase your chances of success!

Note that there is NO specific order in this list!

.. _aboutcode_data_server:

**AboutCode data server**
^^^^^^^^^^^^^^^^^^^^^^^^^

This project is to futher and evolve the ScanCode server (was started last year
as a 2017 GSoC project) and rename it as the AboutCode server.

The features of this updated server would be:


- Store any ABC data including ScanCode scans See :ref:`aboutcode_data`

- Organize the data in projects (including possibly user-private projects)

- Execute selectively AboutCode tools such as ScanCode-toolkit, AboutCode-toolkit, etc.

- Integrate the storage and retrieval of scans and ABC data with the AboutCode
  Manager app through the JSON API.

- Add a Github integration to scan/run an ABC tool on commit with webhooks.


  * Bonus feature is to scan based on a received tweet of similar IRC or IM integration.

- **Tech**


    * Python 2, Django, PostgreSQL, DRF, JavaScript, Electron

- **URLS**

    * https://github.com/nexB/scancode-server
    * https://github.com/nexB/aboutcode-manager
    * https://github.com/nexB/aboutcode-toolkit
    * https://github.com/nexB/scancode-toolkit

- **Mentors**

    * @majurg https://github.com/majurg
    * @tdruez https://github.com/tdruez

.. _vulnerablecode_package_security_vulnerability_data_feed_and_scanner:

**VulnerableCode Package security vulnerability data feed (and scanner)**
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

This project is to futher and evolve the VulnerableCode server and and software
package vulnerabilities data aggregator.

VulnerableCode was started last year as a 2017 GSoC project. Its goal is to
collect and aggregate vulnerabilities data and provide semi-automatic
correlation. In the end it should provide the basis to report vulnerabilities
alerts found in packages identified by ScanCode.

This is not trivial as there are several gaps in the CVE data and how they
relate to packages as they are detected by ScanCode or else.

The features and TODO for this updated server would be:


* Aggregate more and new packages vulnerabilities feeds,

* Automating correlation: add smart relationship detection to infer new
  relatiosnhips between available packages and vulnerabilities from mining the
  graph of existing relations.

* Create a ScanCode plugin to report vulnerabilities with detected packages
  using this data.

* Integrate API lookup on the server withe the AboutCode Manager UI

* Create a UI and model for community curation of vulnerability to package
  mappings, correlations and enhancements.

- **Tech**

    * Python 2, Django, PostgreSQL, DRF, JavaScript, Electron

- **URLS**

    * https://github.com/nexB/vulnerablecode
    * https://github.com/nexB/aboutcode-manager
    * https://github.com/nexB/scancode-toolkit
    * Other interesting pointers:

      - https://github.com/cve-search/cve-search
      - https://github.com/jeremylong/DependencyCheck/
      - https://github.com/victims/victims-cve-db
      - https://github.com/rubysec/ruby-advisory-db
      - https://github.com/future-architect/vuls
      - https://github.com/coreos/clair
      - https://github.com/anchore/anchore/
      - https://github.com/pyupio/safety-db
      - https://github.com/RetireJS/retire.js
      - and many more including Linux distro feeds

- **Mentors**

    * @majurg https://github.com/majurg
    * @JonoYang https://github.com/JonoYang
    * @pombredanne https://github.com/pombredanne

.. _integrate_the_license_expression_library_in_scancode_python_and_aboutcode_manager_jscript:

**Integrate the license expression library in ScanCode (Python) and AboutCode Manager (JScript)**
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

In GSoC 2017, this Python library was ported to JavaScript using Transcrypt.

The goal of this project is to add support for license expressions in multiple
projects and evolve the license expression library as needed:


- in Python:

  * the SPDX Python library
  * the ScanCode toolkit. This also include the proper detection of license
    expressions in SPDX-License-Identifier tags.
  * the AboutCode toolkit

- in JavaScript:

  * the AboutCode Manager

- in both languages in the core license expression proper, add support for a
  built-in mode for strict SPDX expressions


- **Tech**

    * Python, JavaScript

- **URLS**

    * https://github.com/nexB/license-expression
    * https://github.com/bastikr/boolean.py
    * https://github.com/nexB/aboutcode-manager
    * https://github.com/nexB/aboutcode-toolkit
    * https://github.com/nexB/scancode-toolkit
    * https://github.com/spdx/tools-python

- **Mentors**

    * @JonoYang https://github.com/JonoYang
    * @majurg https://github.com/majurg

.. _high_volume_matching_automatons_and_data_structures:

**High volume matching automatons and data structures**
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

MatchCode will provide ways to efficiently match actual code against a large
stored indexes of open source code.

To enable this, we need to research and create efficient and compact data
structures that are specialized for the type of data we lookup. Given the volume
to consider (typically multi billion values indexed) there are special
considerations to have compact and memory efficient dedicated structures (rather
than using a general purpose DB or Key/value pair store) that includes looking
at automata, and memory mapping. This types of data structures should be
implemented in Rust as a preference (though C/C++ is OK) and include Python
bindings.

There are several areas to research and implement:


- A data structure to match efficiently a batch of fix-width checksums (e.g.
  SHA1) against a large index of such checksums, where each checksum points to
  one or more files or packages. A possible direction is to use finite state
  transducers or specialized B-tree indexes. Since when a codebase is being
  matched there can be millions of lokkups to do, the batch matching is
  preferred.

- A data structure to match efficiently a batch of fix-width byte strings (e.g.
  LSH) against a large index of such LSH within a fixed hamming distance, where
  each points to one or more files or packages. A possible direction is to use
  finite state transducers (possibly weighted), specialized B-tree indexes or
  multiple hash-like on-disk tables.

- A memory-mapped Aho-Corasick automaton to build large batch tree matchers.
  Available Aho-Corasick automaton may not have a Python binding or may not allow
  memory-mapping (like pyahocorasick we use in ScanCode). The volume of files we
  want to handle requires to reuse, extend or create aspecialized tree/paths
  matching automatons that can handle eventually billions of nodes and are larger
  than the available RAM. A possible direction is to use
  finite state transducers (possibly weighted).

- Feature hashing research: we deal with manyt "features" and hashing to limit
  the number and size of the each features seems to be a valuable thing. The goal
  is to research feature hashing with short hashes (15, 16 and 32 bits) and
  evaluate if this leads to acceptable fasle-positive and loss of accuracy in the
  context of the data structures mentioned above.

Then using these data structures, the project should create a system for
matching code as a Python-based server exposing a simple API.
This is a green field project.


- **Tech**

  * Rust, Python

- **URLS**

  * https://github.com/nexB/scancode-toolkit-contrib for samecode fingerprints drafts.
  * https://github.com/nexB/scancode-toolkit for commoncode hashes

- **Mentors**

  * @pombredanne https://github.com/pombredanne

.. _scancode_scan_deduction:

**ScanCode scan deduction**
^^^^^^^^^^^^^^^^^^^^^^^^^^^

The goal of this project is to take existing scan and match results and infer
summaries and deduction at a higher level, such as the licensing or origin of a
whole directory tree. This should be implemented as a set of ScanCode plugins


- **Tech**

  * Python

- **URLS**

  * https://github.com/nexB/scancode-toolkit/issues/426
  * https://github.com/nexB/scancode-toolkit/issues/377

- **Mentors**

  * @pombredanne https://github.com/pombredanne
  * @JonoYang https://github.com/JonoYang

.. _license_and_copyright_detection_benchmark:

**License and copyright detection benchmark**
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Compare ScanCode runtimes with Fossology, licensee, LicenseFinder, license-
check, ninka, slic, LiD and others. This project is to create a comprehensive
test suite and a benchmark for several FOSS open source license and copyright
detection engines, establish mappings between the different conventions they use
for license identification and evaluate and publish the results of detection
accuracy and precision.

Note that this not only about the speed of scanning: the performance and time
taken is accessory and a nice to have as a result.  What matters is benchmarking
the accuracy of the license detection:


#. is the right license detected and how correct is this detection?
#. when a license is detected is the correct exact text matched and returned?

So what is needed is a (large) test set of files.

Then establishing a ground truth for reference e.g. detecting then reviewing
manually possibly with ScanCode to set up the baseline that will be used to
compare all the scanners.

Then run the other tools and ScaCode to see how well they perform and of course
establish a mapping of license identifiers: each tool may use different license
ids so we need to map these to the ids used in the test baseline (e.g. the
scancode license keys): all this has to be built, possibly reusing some or all
of the scancode tests and lacing in all the tests from the other tools and
adding more as needed.


- **Tech**

  * Python

- **Mentors**

  * @mjherzog https://github.com/mjherzog
  * @pombredanne https://github.com/pombredanne

.. _improved_copyright_parsing_and_speed_in_scancode:

**Improved copyright parsing and speed in ScanCode**
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Copyright detection is the slowest scanner in ScanCode. It is based on NLTK part
of speech tagging and a copyright grammar.

The goal of this project is to refactor Copyright detection for speed and
simplicity possibly implementaing a new parser (PEG?, etc) or reimplementing
core elements in Rust with a Python binding.

This would include also keeping track of line numbers and offsets where copyrights are found.

This would likely require either replacing or enhancing NLTK which is used as a
natural language parser.


- **Tech**

  * Python, Rust

- **URLS**

  * https://github.com/nexB/scancode-toolkit/tree/develop/src/cluecode

- **Mentor**

  * @JonoYang https://github.com/JonoYang

.. _transparent_archive_extraction_in_scancode:

**Transparent archive extraction in ScanCode**
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

ScanCode archive extraction is currently done with a separate command line
invocation. The goal of this project is to integrate archive extraction
transparently into the ScanCode scan loop. This would be using the new plugins
architecture.


- **Tech**

  * Python

- **URLS**

  * https://github.com/nexB/scancode-toolkit/issues/14

- **Mentor**

  * @pombredanne https://github.com/pombredanne

.. _port_scancode_to_python_3_contrib:

**Port ScanCode to Python 3**
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

ScanCode runs only on Python 2.7 today. The goal of this project is to port
ScanCode to support both Python 2 and Python 3.


- **Tech**

  * Python

- **URLS**

  * https://github.com/nexB/scancode-toolkit/issues/295

- **Mentor**

  * @pombredanne https://github.com/pombredanne

.. _automated_docker_containers_and_vm_images_static_package_analysis:

**Automated Docker, containers and VM images static package analysis**
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

The goal of this project is to further the Conan container static analysis tool
to effectively support proper inventory of installed packages without running
the containers.

This includes determining which packages are installed in Docker layers for
RPMs, Debian or Alpine Linux. And this woudl eventually require the integration
of ScanCode.


- **Tech**

  * Python, Go?

- **URLS**

  * https://github.com/pombredanne/conan
  * https://github.com/nexB/scancode-toolkit

- **Mentor**

  * @pombredanne https://github.com/pombredanne

.. _static_analysis_of_binaries_for_build_tracing_in_tracecode:

**Static analysis of binaries for build tracing in TraceCode**
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

TraceCode does system call tracing only today.


- The primary goal of this project is to do the same using symbol, debug symbol
  or string matching to accomplish something similar using static analysis.

- This project also would cover updating TraceCode to use the Click comamnd line toolkit
  (like for ScanCode).

- Finally thsi project should improve the tracing of the lifecycle of file
  descriptors in TraceCode build. We need to improve how TraceCode does system
  call tracing by improving the way we track open/close file descriptors in the
  trace to reconstruct the lifecycle of a traced file.


- **Tech**

    * Python, Linux

- **URLS**

    * https://github.com/nexB/tracecode-toolkit for the existing non-static tool
    * https://github.com/nexB/scancode-toolkit-contrib for the work in progress on binaries/symbols
      parsers/extractors

- **Mentor**

    * @pombredanne https://github.com/pombredanne

.. _create_linux_distro_packages_for_scancode:

**Create Linux distro packages for ScanCode**
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

The goal of this project is to ensure that we have proper packages for Linux
distros for ScanCode.

The first step is to debundle pre-built binaries that exist in ScanCode such
that they come either from system-packages or pre-built Python wheels. This
covers libarchive, libmagic and a few other native libraries.

The next step is to ensure that all the dependencies from ScanCode are also available as distro
packages.

The last step is to create proper distro packages for RPM, Debian, Nix and GUIX,
Alpine, Arch and Gentoo and also an AppImage.org package as well as a proper
Docker image and eventually submit these package to the distros.

As a bonus, the same could then be done for AboutCode toolkit and TraceCode.

This requires a good understanding of packaging and Python.


- **Tech**

  * Python, Linux

- **URLS**

  * https://github.com/nexB/scancode-toolkit/issues/487
  * https://github.com/nexB/scancode-toolkit/issues/469

- **Mentor**

  * @pombredanne https://github.com/pombredanne

.. _package_url_implementations_in_many_programming_languages:

**Package URL implementations in many programming languages**
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

We have a purl implmentation in Python, Go and possibly Java today.

The goal of this project is to create multiple parsers and builders in several
programming languages:


- JavaScript, Rust, R, Perl, Ruby, C/C++, Racket, etc.


- **Tech**

    * Many!

- **URLS**

    * https://github.com/package-url
    * https://fosdem.org/2018/schedule/event/purl/

- **Mentors**

    * @pombredanne https://github.com/pombredanne

.. _dependentcode_a_mostly_universal_package_dependencies_resolver:

**DependentCode: a mostly universal Package dependencies resolver**
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

The goal of this project is to create a tool for mostly universal package
dependencies resolution using a SAT solver that should leverage the detected
packages from ScanCode and the Package URLs and could provide a good enough way
to resolve package dependencies for many system and application package formats.
This is a green field project.


- **Tech**

  * Python, C/C++, Rust, SAT

- **URLS**

  * https://github.com/package-url
  * https://fosdem.org/2018/schedule/event/purl/

- **Mentors**

  * @pombredanne https://github.com/pombredanne
