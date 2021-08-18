Google Summer of Code 2021 - Final report
=========================================

Project: Virtual Codebase support in DeltaCode
----------------------------------------------------------

**Pratik Dey <pratikrocks.dey11@gmail.com>**

Project Overview
----------------

The goal of this proposal is to refactor DeltaCode to use Scancode-Toolkit’s Virtual Codebase class.
This refactoring will allow DeltaCode to be a library as opposed to only be used as a CLI tool, moreover,
this refactor will allow DeltaCode to determine deltas much more effectively in the form of BFS tree scan 
of the two tree structures unlike indexing the entire codebase.


Main Objectives of the project
------------------------------

- Migrate to using VirtualCodebase from the latest scancode.
- Create DeltaCode documentation on Read The Docs.
- Provide the support for fingerprint plugin for Virtual Codebase.
- Provide the Support for enabling Virtual Codebase to scan files having full root paths as their location.

The Project
-----------

- Virtual Codebase Integration with Deltacode 
- Removing redundant File and License Objects 
- Provided options in deltacode scans
- Added Docker Script for Dockerizing the Deltacode Application and make it platform-independent.
- Add Read the Docs Support to Deltacode.

I have completed all the tasks that were in the scope of this GSoC project.

Pull Requests
-------------

- https://github.com/nexB/deltacode/pull/167 [Merged]
- https://github.com/nexB/deltacode/pull/176 [Open]
- https://github.com/nexB/deltacode/pull/171 [Open]
- https://github.com/nexB/deltacode/pull/178 [Open]
- https://github.com/nexB/deltacode/pull/168 [Open]

Links
-----

..
    [Project Link] https://summerofcode.withgoogle.com/organizations/5312205181943808/#6516503005888512

- `Project Details <https://summerofcode.withgoogle.com/organizations/5312205181943808/#6516503005888512>`_
- `Proposal <https://docs.google.com/document/d/19btijAja6x8hbD_X-dGor1RiiEGF3-1gEHYkzqzC3xQ/edit#heading=h.z6ne0og04bp5>`_
- `ScanCode Toolkit <https://github.com/nexB/scancode-toolkit>`_
- `DeltaCode <https://github.com/nexB/deltacode>`_

------------

I’ve had a wonderful time during these three months and have learned plenty of things. I would
really like to thank `@pombredanne <https://github.com/pombredanne>`_,
`@majurg <https://github.com/majurg>`_, and `@JonoYang <https://github.com/JonoYang>`_ for their
constant support throughout the journey. From good job claps to nit-picky constructive
code-reviews, I enjoyed every bit of this GSoC project.

I had a wonderful time during the GSOC, I learned a lot of things during this time. I really enjoyed this project.
I would really like to thank my mentors `@pombredanne <https://github.com/pombredanne>`_, `@majurg <https://github.com/majurg>`_, and `@TG1999 <https://github.com/TG1999>`_, 
and all other About code members who constantly supported me throughout this project.
