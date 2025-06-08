========================================================================
Compute summary for all detected packages.
========================================================================


| **Organization:** `AboutCode <https://aboutcode.org>`_
| **Project:** `Scancode Toolkit
  <https://github.com/aboutcode-org/scancode-toolkit>`_
| **Mentee:** `Swastik Sharma (swastkk) <https://github.com/swastkk>`_
| **Mentors:** `Philippe Ombredanne`_, `Ayan Sinha Mahapatra`_, `Avishrant
                Sharma`_, `Jonathan Yang`_, `Jay Kumar`_

Overview
--------

Previously, we computed the summary at the codebase level, which included
elements like the `license_clarity_score`, `declared_holder`,
`other_license_expressions`, and more. This project aims to improve
scanning accuracy by computing summaries and license clarity scores for
each package and its files, rather than for the entire scan. This involves
enhancing package models and ensuring accurate attribute collection across
all package ecosystems.

Implementation
--------------

- **Added a new command-line option called** ``--package-summary``:

  - Provides a package-level summary within a single codebase.
  - Involves the ``license_clarity_score`` calculation.
  - Populates package attributes like ``copyright``, ``holder``,
    ``other_license_expression``, ``notice_text``.

- **The** ``--package-summary`` **option must be used with:**

  - ``--classify``: Helps ScanCode further classify scanned
    files/directories into categories like ``legal``, ``readme``,
    ``top-level``, ``manifest``.
  - ``--package`` or ``-p``: Detects various package manifests, lockfiles,
    and package-like data, assembles codebase-level packages and
    dependencies, and tags files as part of the packages.

- **Benefits of the change:**

  - Allows users to obtain a more refined summary for each individual
    package in a codebase.
  - Improves package assembly for various package ecosystems like npm,
    python-whl, rust, rubygems, etc. Since the package-level summary
    heavily depends on the package assembly, there were several scenarios
    where key files for top-level packages were not properly tagged. To
    address this, a method called ``get_top_level_resources`` was
    implemented. This method retrieves the resources for top-level
    packages, which helps in correctly tagging the key files.

- **Testing:**

  - All changes are tested through multiple full scan tests.
  - Validated both correct behavior and error handling.

Linked Pull Requests
--------------------

.. list-table::
   :widths: 10 60 30
   :header-rows: 1

   * - Sr. no
     - Link
     - Status
   * - 1
     - https://github.com/aboutcode-org/scancode-toolkit/pull/3792
     - Open

Related Issues
--------------

.. list-table::
   :widths: 10 60 30
   :header-rows: 1

   * - Sr. no
     - Name
     - Link
   * - 1
     - Improve Package models to have license_clarity_score
     - `#3817
       <https://github.com/aboutcode-org/scancode-toolkit/issues/3817>`_
   * - 2
     - Post Scan option --package-summary
     - `#3802
       <https://github.com/aboutcode-org/scancode-toolkit/issues/3802>`_
   * - 3
     - Look in package-ecosystem specific key-files for referenced licenses
     - `#3707
       <https://github.com/aboutcode-org/scancode-toolkit/issues/3707>`_
   * - 4
     - Compute summary and clarity for EACH package in a codebase
     - `#3287
       <https://github.com/aboutcode-org/scancode-toolkit/issues/3287>`_
   * - 5
     - Provide data values in scan results to correspond with
       license_clarity_score elements
     - `#1395
       <https://github.com/aboutcode-org/scancode-toolkit/issues/1395>`_
   * - 6
     - Populate package instance attributes from it's files
     - `#3862
       <https://github.com/aboutcode-org/scancode-toolkit/issues/3862>`_
   * - 7
     - Improve Ruby Package Ecosystem/Datafile Handler to tag key_files
       properly
     - `#3881
       <https://github.com/aboutcode-org/scancode-toolkit/issues/3881>`_
   * - 8
     - Rust Members files are not detected properly
     - `#3895
       <https://github.com/aboutcode-org/scancode-toolkit/issues/3895>`_
   * - 9
     - Add Tests for Package Level Summary computation
     - `#3889
       <https://github.com/aboutcode-org/scancode-toolkit/issues/3889>`_


Post GSoC
---------

I would like to merge this PR into Scancode Toolkit, hopefully allowing
users to leverage this feature to expand their package/codebase scanning
capabilities.

Links
-----

* `Project Idea
  <https://github.com/aboutcode-org/aboutcode/wiki/GSOC-2024-Project-Ideas#compute-summary-for-all-detected-packages>`_

* `Official GSoC project page
  <https://summerofcode.withgoogle.com/programs/2024/projects/JzMlDtnM>`_

* `GSoC Proposal
  <https://docs.google.com/document/d/1TcGqQVzXhTkz6Pmu9UaXAr4R4q1rlT4tof7H7dsVG0o/edit?usp=sharing>`_

* `Project Board <https://github.com/orgs/aboutcode-org/projects/4>`_

* `Reference Issue
  <https://github.com/aboutcode-org/scancode-toolkit/issues/3287>`_

Acknowledgements
----------------

I would like to thank my mentors:

- `Philippe Ombredanne`_
- `Ayan Sinha Mahapatra`_
- `Avishrant Sharma`_
- `Jay Kumar`_
- `Jonathan Yang`_

Weekly Status calls were greatly helpful and those special 1:1 calls with
`Ayan Sinha Mahapatra`_ and `Philippe Ombredanne`_ were so amazing. Thank
you for your time and your patience!


.. _Philippe Ombredanne: https://github.com/pombredanne
.. _Ayan Sinha Mahapatra: https://github.com/AyanSinhaMahapatra
.. _Avishrant Sharma: https://github.com/AvishrantSsh
.. _Jay Kumar: https://github.com/35C4n0r
.. _Jonathan Yang: https://github.com/JonoYang
