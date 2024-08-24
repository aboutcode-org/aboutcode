==============================================================================
Integrating OpenSSF Scorecard into Scancode.io for Enhanced Vulnerability Analysis
==============================================================================

**Organization:** `AboutCode <https://aboutcode.org>`_

**Projects:** `Scancode.io <https://github.com/aboutcode-org/scancode.io>`_,
`Scorecode <https://github.com/aboutcode-org/scorecode>`_

**Mentee:** `Pranay Das (404-geek) <https://github.com/404-geek>`_

**Mentors:**
- `Philippe Ombredanne <https://github.com/pombredanne>`_
- `Ayan Sinha Mahapatra <https://github.com/AyanSinhaMahapatra>`_
- `Thomas Druez <https://github.com/thomasdruez>`_
- `Jonathan Yang <https://github.com/JonoYang>`_
- `Tushar Goel <https://github.com/tushar-goel>`_

--------------------------------------------------------------------------------

Overview
--------

The primary objective of this project was to integrate the OpenSSF Scorecard into the Scancode.io platform, thereby enhancing its capabilities for vulnerability analysis. The project involved work on two key repositories: `Scorecode`, which was developed as a PyPI package, and `Scancode.io`, where the integration with Scorecard data was implemented within scanning pipelines.

**Scorecode**

`Scorecode` serves as a PyPI package that encapsulates the business logic for fetching OpenSSF Scorecard data using the OpenSSF API. It also includes Django mixin models that can be extended and integrated into other platforms with databases, such as Scancode.io and PurlDB, ensuring seamless utilization of Scorecard data across various projects.

**Scancode.io**

In the `Scancode.io` project, I developed a pipeline that interacts with the `Scorecode` package to fetch and store Scorecard data in the Scancode.io database. The data can then be exported into Bill of Materials (BOM) files in formats like CycloneDX and SPDX, providing comprehensive security insights in standardized formats.

--------------------------------------------------------------------------------

Implementation
--------------

**1. Scorecode Repository:**

   - Developed a PyPI package to interact with the OpenSSF API and fetch Scorecard data for various software packages.
   - Created Django mixin models to enable easy extension and integration of Scorecard data into platforms with databases like Scancode.io.

**2. Scancode.io Integration:**

   - Developed a pipeline within Scancode.io to call `Scorecode` functions, retrieve Scorecard data, and save it in the Scancode.io database.
   - Enhanced the existing BOM export functionality to include Scorecard data, allowing for detailed security posture analysis in CycloneDX and SPDX formats.

**4. Testing:**

   - Conducted comprehensive testing in both repositories to ensure accurate fetching, storage, and export of Scorecard data.
   - Verified seamless integration across different package ecosystems supported by Scancode.io.

--------------------------------------------------------------------------------

Linked Pull Requests
--------------------

.. list-table::
   :widths: 10 60 30
   :header-rows: 1

   * - Sr. no
     - Link
     - Status
   * - 1
     - https://github.com/aboutcode-org/scancode.io/pull/1294
     - Open
   * - 2
     - https://github.com/aboutcode-org/scorecode/pull/5
     - Merged
   * - 2
     - https://github.com/aboutcode-org/scorecode/pull/1
     - Merged
   * - 2
     - https://github.com/aboutcode-org/scorecode/pull/4
     - Merged


Related Issues
--------------

.. list-table::
   :widths: 10 60 30
   :header-rows: 1

   * - Sr. no
     - Name
     - Link
   * - 1
     - Store OSSF scorecard data in scancode.io models
     - `#1283 <https://github.com/aboutcode-org/scancode.io/issues/1283>`_
   * - 2
     - Show OSSF scorecard data in the UI as quality data
     - `#1284 <https://github.com/aboutcode-org/scancode.io/issues/1284>`_
   * - 3
     - Export OSSF scorecard data in SBOMs
     - `#1285 <https://github.com/aboutcode-org/scancode.io/issues/1285>`_
   * - 4
     - Compute summary and clarity for EACH package in a codebase
     - `#3 <https://github.com/aboutcode-org/scorecode/issues/3>`_
   * - 5
     - Provide data values in scan results to correspond with license_clarity_score elements
     - `#2 <https://github.com/aboutcode-org/scorecode/issues/2>`_


Project Reference Links
-----------------------

* `Project Idea <https://github.com/aboutcode-org/aboutcode/wiki/GSOC-2024-Project-Ideas#purldbscancodeio-enrich-an-sbom-based-on-ossf-security-score-card>`_

* `Official GSoC project page <https://summerofcode.withgoogle.com/programs/2024/projects/kB8HkEli>`_

* `GSoC Proposal <https://docs.google.com/document/d/10EiGjTGR_eZExMjcxEmwmMQPt7B9i6lHc_osW4Ogm6c/edit?usp=sharing>`_

Pre GSOC Work
-----------------------

Before GSoC officially started, I had the opportunity to contribute to the `ScanCode.io <https://github.com/aboutcode-org/scancode.io>`_ and `purldb.io <https://github.com/aboutcode-org/purldb>`_  project. During this
period, I
focused on enhancing various functionalities and laying the groundwork for the upcoming integration of the OpenSSF Scorecard. Below is a list of key pull requests I made:

- `Add endpoint to create or update a package set <https://github.com/aboutcode-org/purldb/pull/350>`_
- `Fixes Github Mapper route <https://github.com/aboutcode-org/purldb/pull/370>`_
- `removed redundant PackageViewSet class code and added history field into package API nexB#389 nexB#221 <https://github.com/aboutcode-org/purldb/pull/390>`_
- `alpine url bug fix and AGPL License version issue <https://github.com/aboutcode-org/scancode-toolkit/pull/3744>`_

These contributions were essential in building a solid foundation for the integration of the ScoreCode repository during GSoC.

Post GSoC
---------

After GSoC, the goal is to merge the pull requests into their respective repositories, enabling users to leverage the OpenSSF Scorecard integration for enhanced vulnerability analysis in Scancode.io. Future work includes extending this integration to other platforms like PurlDB.

--------------------------------------------------------------------------------

Acknowledgements
----------------

This project wouldn't have been possible without the incredible support and mentorship of an outstanding team:

- `Philippe Ombredanne <https://github.com/pombredanne>`_
- `Ayan Sinha Mahapatra <https://github.com/AyanSinhaMahapatra>`_
- `Thomas Druez <https://github.com/thomasdruez>`_
- `Jonathan Yang <https://github.com/JonoYang>`_
- `Tushar Goel <https://github.com/tushar-goel>`_

The weekly status calls were more than just updates; they were a source of inspiration, ideas, and camaraderie. And the 1:1 calls with `Ayan Sinha Mahapatra`_ and `Philippe Ombredanne`_ were like mini-masterclasses in software development.

To my mentors: Thank you for not just teaching me the ropes but for showing me how to swing from them! This journey was as much about learning as it was about having fun, and I couldn't have asked for a better crew to sail with.
