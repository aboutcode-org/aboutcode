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

### Scorecode

`Scorecode` serves as a PyPI package that encapsulates the business logic for fetching OpenSSF Scorecard data using the OpenSSF API. It also includes Django mixin models that can be extended and integrated into other platforms with databases, such as Scancode.io and PurlDB, ensuring seamless utilization of Scorecard data across various projects.

### Scancode.io

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
     - Closed
   * - 2
     - https://github.com/aboutcode-org/scorecode/pull/1
     - Closed
   * - 2
     - https://github.com/aboutcode-org/scorecode/pull/4
     - Closed