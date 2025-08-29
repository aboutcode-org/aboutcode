=====================================================
Enhance Compliance Mechanisms and CI Provider Support
=====================================================


**Organization:** `AboutCode <https://aboutcode.org>`_


**Projects:** `Scancode.io <https://github.com/aboutcode-org/scancode.io>`_ and `Scancode-action <https://github.com/aboutcode-org/scancode-action>`_


**Mentee:** `Manit Singh (NucleonGodX) <https://github.com/NucleonGodX>`_


**Mentors:**


- `Thomas Druez <https://github.com/tdruez>`_
- `Dennis Clark <https://github.com/DennisClark>`_
- `Pranay Das <https://github.com/404-geek>`_
- `Avishrant Sharma <https://github.com/avishrantsSh/>`_


Overview
--------
ScanCode.io previously supported compliance mechanisms only based on license policies,
which limited the comprehensive assessment of software projects for organizations
with diverse compliance requirements.


This project enhanced ScanCode.io to support additional compliance mechanisms beyond
license policies, including license clarity scores, vulnerability levels, and scorecard scores.
Additionally, the project expanded scancode-action support to multiple CI providers beyond
GitHub Actions, including Azure Pipelines and Jenkins CI.


--------------------------------------------------------------------------------


Implementation
--------------
- **Independent Compliance Mechanisms:**

  - Developed an independent mechanism for compliance based on scorecard scores and license clarity scores.
  - Integrated these mechanisms into the database's project extra_data field, API endpoints,
    check compliance command, and UI project view.
  - Created a unified threshold mechanism for both license clarity and scorecard compliance,
    reducing code duplication and improving maintainability.


- **Unified Script Structure:**

  - Implemented a unified Python script structure that generates bash code for use across
    different CI providers including GitHub Actions, Azure Pipelines, and Jenkins CI.
  - This approach significantly reduces redundancy in CI provider implementations and
    ensures consistent behavior across platforms.


- **CI Provider Expansion:**

  - Added comprehensive support for Azure Pipelines with proper configuration templates
    and integration workflows.
  - Added PR for using scancode-action with Jenkins.
  - Ensured all CI providers utilize the same core scanning functionality through
    the unified script approach.


- **Policy Validation Improvements:**

  - Fixed policy validation logic to properly handle different compliance mechanisms
    without requiring license_policies for all policy files.
  - Enhanced error handling and validation messages for better user experience.


Linked Pull Requests
--------------------


.. list-table::
   :widths: 10 60 30 10
   :header-rows: 1


   * - Sr. no
     - Name
     - Link
     - Status
   * - 1
     - Introduce Independent License Clarity Thresholds Mechanism
     - `scancode.io#1689
       <https://github.com/aboutcode-org/scancode.io/pull/1689>`_
     - Merged
   * - 2
     - Integration of Clarity compliance mechanism
     - `scancode.io#1705
       <https://github.com/aboutcode-org/scancode.io/pull/1705>`_
     - Merged
   * - 3
     - Refactor a common threshold mechanism for both license clarity and scorecard score
     - `scancode.io#1799
       <https://github.com/aboutcode-org/scancode.io/pull/1799>`_
     - Merged
   * - 4
     - Add compliance support based on OpenSSF Scorecard score
     - `scancode.io#1800
       <https://github.com/aboutcode-org/scancode.io/pull/1800>`_
     - Merged
   * - 5
     - Fix policies validation
     - `scancode.io#1814
       <https://github.com/aboutcode-org/scancode.io/pull/1814>`_
     - Merged
   * - 6
     - Add Azure pipelines support
     - `scancode-action#19
       <https://github.com/aboutcode-org/scancode-action/pull/19>`_
     - Open
   * - 7
     - Add support for jenkins-ci
     - `scancode-action#21
       <https://github.com/aboutcode-org/scancode-action/pull/21>`_
     - Open
   * - 8
     - Add support for python script for ci providers
     - `scancode-action#23
       <https://github.com/aboutcode-org/scancode-action/pull/23>`_
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
     - Add license clarity score-based Compliance support
     - `#1678
       <https://github.com/aboutcode-org/scancode.io/issues/1678>`_
   * - 2
     - Add Vulnerability Severity-Based Compliance Support
     - `#1679
       <https://github.com/aboutcode-org/scancode.io/issues/1679>`_
   * - 3
     - Add support for Azure pipelines
     - `#18
       <https://github.com/aboutcode-org/scancode-action/issues/18>`_
   * - 4
     - Add support for Jenkins
     - `#20
       <https://github.com/aboutcode-org/scancode-action/issues/20>`_
   * - 5
     - Add scorecard based compliance support
     - `#1794
       <https://github.com/aboutcode-org/scancode.io/issues/1794>`_
   * - 6
     - Add a mechanism to eliminate redundant Bash code across CI providers
     - `#22
       <https://github.com/aboutcode-org/scancode-action/issues/22>`_
   * - 7
     - Refactor License Clarity and Scorecard Compliance Thresholds into Unified Module
     - `#1797
       <https://github.com/aboutcode-org/scancode.io/issues/1797>`_
   * - 8
     - Policies validation incorrectly requires license_policies for all policy files
     - `#1813
       <https://github.com/aboutcode-org/scancode.io/issues/1813>`_


Pre GSoC Work
-------------


Here are some of the PRs I submitted before GSoC:


- `Enhanced package detection and improved license detection accuracy
  <https://github.com/aboutcode-org/scancode-toolkit/pull/4031>`_
- `Fixed vulnerability data processing issues
  <https://github.com/aboutcode-org/vulnerablecode/pull/1744>`_
- `Improved license classification and detection mechanisms
  <https://github.com/aboutcode-org/scancode-toolkit/pull/4138>`_
- `Enhanced vulnerability database integration
  <https://github.com/aboutcode-org/vulnerablecode/pull/1758>`_


Post GSoC
---------


I plan to continue contributing by:


- Completing the Pull requests of integrating other CI providers in scancode-action

Links
-----


* `Project Idea
  <https://github.com/aboutcode-org/vulnerablecode/pull/1758>`_


* `Official GSoC project page
  <https://summerofcode.withgoogle.com/programs/2025/projects/DsDoR5eF>`_


* `GSoC Proposal
  <https://docs.google.com/document/d/1cmDTq3aq2J9iFNOo37V6C7ahy_ofbGRRtvtwDvW_Rrc/edit?tab=t.0>`_


* `Project Board <https://github.com/orgs/aboutcode-org/projects/27>`_


Acknowledgements
----------------


I would like to thank my mentors:


- `Thomas Druez <https://github.com/tdruez>`_
- `Dennis Clark <https://github.com/DennisClark>`_
- `Pranay Das <https://github.com/404-geek>`_
- `Avishrant Sharma <https://github.com/avishrantsSh/>`_


Their guidance was instrumental throughout the project development. The regular feedback sessions
helped me navigate complex architectural decisions, especially when designing the unified compliance
mechanism.