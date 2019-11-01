Google Summer of Code 2019 - Final report
=========================================

**Project: Approximately similar file detection in DeltaCode**
--------------------------------------------------------------

**Arnav Mandal <arnav.mandal1234@gmail.com>**

Project Overview
----------------

DeltaCode is a tool to compare and report scan differences. It takes JSON files as an input which
is the output of ScanCode-toolkit as well. When comparing files, it only uses the exact comparison.
By exact comparison, I mean it compares the hash value of the files. The output of DeltaCode is a
JSON/CSV file which includes the details of the scan such as delta score, delta count, etc. The
goal of this project is to improve the usefulness of the delta by also finding files that are
mostly the same (e.g. quasi or near duplicates) vs. files that are completely different. After this
project, DeltaCode would be able to detect similar files in a directory approximately.

Requirements of the project
---------------------------

- Provided two files using ScanCode-toolkit, the new near-duplicate detection should return the
  distance between the two files.
- The code should be seamlessly integrated with ScanCode-toolkit. It should be highly configurable
  by the maintainers.
- The strictness of near-duplicates should be noted and adjusted by a threshold variable.

The Project
-----------

- Addition of new fingerprint plugin in the ScanCode Toolkit.
- Implementation and integration of the fingerprint generation algorithm in the ScanCode Toolkit
  codebase.
- Implementation of distance finding algorithm between the files and process them further in the
  DeltaCode codebase.
- Integration of fingerprint field in the JSON file to compare the deltas and provide them with
  appropriate scores.
- Make changes to old unit tests and addition of new unit tests in ScanCode Toolkit as well as
  DeltaCode.

I have completed all the tasks that were in the scope of this GSoC project.

Pull Requests
-------------

- https://github.com/nexB/scancode-toolkit/pull/1576 [Closed] (something went wrong while rebasing)
- https://github.com/nexB/scancode-toolkit/pull/1651 [Merged]
- https://github.com/nexB/deltacode/pull/128 [Merged]

Links
-----

..
    [Org Link] https://summerofcode.withgoogle.com/organizations/6118953540124672/
    [Project Link] https://summerofcode.withgoogle.com/projects/#6422961651712000

- `Project Details <https://summerofcode.withgoogle.com/organizations/6118953540124672/>`_
- `Proposal <https://docs.google.com/document/d/1XGUH4Ogovc8ZTt_bjZc7ML75E1NrhTlAtelckESpSGA/edit?usp=sharing>`_
- `ScanCode Toolkit <https://github.com/nexB/scancode-toolkit>`_
- `DeltaCode <https://github.com/nexB/deltacode>`_

------------

I’ve had a wonderful time during these three months and have learned plenty of things. I would
really like to thank `@pombredanne <https://github.com/pombredanne>`_,
`@majurg <https://github.com/majurg>`_, and `@JonoYang <https://github.com/JonoYang>`_ for their
constant support throughout the journey. From good job claps to nit-picky constructive
code-reviews, I enjoyed every bit of this GSoC project.
