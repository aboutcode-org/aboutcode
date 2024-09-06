===============================================
Add more data sources and improve data quality
===============================================


**Organization:** `AboutCode <https://aboutcode.org>`_

**Project:** `Vulnerablecode <https://github.com/aboutcode-org/vulnerablecode>`_

**Mentee:** `Ambuj Kulshreshtha (ambuj-1211) <https://github.com/ambuj-1211>`_

**Mentors:**

- `Philippe Ombredanne <https://github.com/pombredanne>`_
- `Ayan Sinha Mahapatra <https://github.com/AyanSinhaMahapatra>`_
- `Ziad Hany <https://github.com/ziadhany>`_
- `Tushar Goel <https://github.com/TG1999>`_
- `Keshav Priyadarshi <https://github.com/keshav-space>`_


Overview
--------

There is a large number of pending tickets for datasources. This project focuses on adding more vulnerability data sources and consume them. I have considered following issues to solve `Collect advisories for AlmaLinux #1201 <https://github.com/aboutcode-org/vulnerablecode/issues/1201>`_, `Collect vulnerabilities from Amazon Linux #72 <https://github.com/aboutcode-org/vulnerablecode/issues/72>`_ , `Collect Oracle Linux #75 <https://github.com/aboutcode-org/vulnerablecode/issues/75>`_ , `Add data in CSAF format #1315 <https://github.com/aboutcode-org/vulnerablecode/issues/1315>`_, `VCIO does not collect some Severity (cvssv3.1) scores for a CVE #1238 <https://github.com/aboutcode-org/vulnerablecode/issues/1238>`_, `Add CWE support in all importers #1093 <https://github.com/aboutcode-org/vulnerablecode/issues/1093>`_ and `Collect rockylinux advisories #753 <https://github.com/aboutcode-org/vulnerablecode/issues/753>`_. Consuming these datasources will help to create a large database for vulnerabilities.


Implementation
--------------

- **Created Importers to add more advisory data from different data sources:**

  - I have added a few new importer modules to the VulnerableCode project to incorporate advisory data from different data sources. Some of the importers I created include the `Curl Importer`, `RockyLinux Importer`, `AlmaLinux Importer`, and `Amazon Linux Importer`. I also worked on creating an importer to retrieve data in CSAF format from the `cisagov repo <https://github.com/cisagov/CSAF/tree/develop/csaf_files>`_.

- **Added CWE support in multiple importers:**

  - Many importers did not include CWE information, this was mentioned here: `Add CWE support in all importers #1093 <https://github.com/aboutcode-org/vulnerablecode/issues/1093>`_, so I solved this issue to add cwe data in multiple importers. There are still many importers that do not have CWE data available in their root data sources. I will add CWE data for them in the future if their data sources are updated.

- **Found bugs in some Vulnerablities**

  - There is an issue `VCIO does not collect some Severity (cvssv3.1) scores for a CVE #1238 <https://github.com/aboutcode-org/vulnerablecode/issues/1238>`_, that I need to resolve regarding specific CVE data, specifically addressing the inconsistency in the severity information.
- **Testing:**

  - I have built proper doctests for each importer, describing each
    function in the module in terms of its parameters and return values.

  - Proper unit tests have been created for each module I built
    to ensure the proper functioning of these modules.

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
     - Added Curl Advisories
     - `aboutcode.org/vulnerablecode#1439 <https://github.com/aboutcode-org/vulnerablecode/pull/1439>`_
     - Open
   * - 2
     - Added AlmaLinux Advisories
     - `aboutcode.org/vulnerablecode#1491 <https://github.com/aboutcode-org/vulnerablecode/pull/1491>`_
     - Open
   * - 3
     - Added CWE support in multiple importers
     - `aboutcode.org/vulnerablecode#1526 <https://github.com/aboutcode-org/vulnerablecode/pull/1526>`_
     - Open
   * - 4
     - Added RockyLinux advisories
     - `aboutcode.org/vulnerablecode#1535 <https://github.com/aboutcode-org/vulnerablecode/pull/1535>`_
     - Open
   * - 5
     - Added Amazon Linux advisories
     - `aboutcode.org/vulnerablecode#1569 <https://github.com/aboutcode-org/vulnerablecode/pull/1569>`_
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
     - Add CURL advisories data source
     - `#1166 <https://github.com/aboutcode-org/vulnerablecode/issues/1166>`_
   * - 2
     - Collect advisories for AlmaLinux
     - `#1201 <https://github.com/aboutcode-org/vulnerablecode/issues/1201>`_
   * - 3
     - Add CWE support in all importers
     - `#1093 <https://github.com/aboutcode-org/vulnerablecode/issues/1093>`_
   * - 4
     - Collect rockylinux advisories
     - `#753 <https://github.com/aboutcode-org/vulnerablecode/issues/753>`_
   * - 5
     - Collect vulnerabilities from Amazon Linux
     - `#72 <https://github.com/aboutcode-org/vulnerablecode/issues/72>`_
   * - 6
     - Add data in CSAF format
     - `#1315 <https://github.com/aboutcode-org/vulnerablecode/issues/1315>`_
   * - 7
     - Collect Oracle Linux
     - `#75 <https://github.com/aboutcode-org/vulnerablecode/issues/75>`_
   * - 8
     - VCIO does not collect some Severity (cvssv3.1) scores for a CVE
     - `#1238 <https://github.com/aboutcode-org/vulnerablecode/issues/1238>`_


Pre GSoC Work
---------------

I started my contributions to AboutCode by the `Add Curl Advisories issue <https://github.com/aboutcode-org/scancode.io>`_, I added the curl advisories datasources to vulnerablecode database. This issue helped me to:

- Understand the importers.

- Understand the database models of VulnerableCode.

- Understand the structure of `AdvisoryData`.

- I also explored many components, such as `PackageURL`, `AffectedPackage`, `Severities`, etc.

Post GSoC
----------

I am committed to working on the pull request to ensure it is merged
successfully, addressing any reviews and feedback from the mentors. I will prioritize
completing any remaining tasks related to my GSoC work. This includes fixing issues
such as bugs for specific CVEs that lack severity CVSSv3 scores and references
from NVD (as there are a few of these CVEs). Once these tasks are completed,
I plan to explore and contribute to more projects within AboutCode.

Links
------

* `Project Idea <https://github.com/aboutcode-org/aboutcode/wiki/GSOC-2024-Project-Ideas#vulnerablecode-add-more-data-sources-and-mine-the-graph-to-find-correlations-between-vulnerabilities-category-a>`_

* `Official GSoC project page <https://summerofcode.withgoogle.com/programs/2024/projects/O745WFKh>`_

* `GSoC Proposal <https://docs.google.com/document/d/1u7JlLL8ru133O3p4MCe7yYNo1ESsf5dheio5EBSiCFw/edit?usp=sharing>`_

* `Project Board <https://github.com/orgs/nexB/projects/62/views/6>`_

Acknowledgements
----------------

I would like to thank my mentors:

- `Ziad Hany`_
- `Tushar Goel`_
- `Philippe Ombredanne`_
- `Ayan Sinha Mahapatra`_
- `Keshav Priyadarshi`_

This summer was full of new challenges and learning. I got to learn a lot from everyone on the team.
The weekly status calls were incredibly helpful in solving all my doubts. It was fun building for
AboutCode, and I will continue to contribute to the codebase of VulnerableCode and
other projects as well. I plan to explore more projects in AboutCode and contribute to
them because I would love to be a part of this wonderful project.

Thank you, everyone, for your continuous support and belief in me.
Your guidance and encouragement have been invaluable, and I am truly grateful
for all the help and trust you've shown me throughout this journey.


.. _Ziad Hany: https://github.com/ziadhany
.. _Tushar Goel: https://github.com/TG1999
.. _Philippe Ombredanne: https://github.com/pombredanne
.. _Ayan Sinha Mahapatra: https://github.com/AyanSinhaMahapatra
.. _Keshav Priyadarshi: https://github.com/keshav-space
