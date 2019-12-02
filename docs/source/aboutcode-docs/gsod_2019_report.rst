Google Season of Docs 2019 Report
=================================

Project Name
------------

The Project Name was **"Reference for Command Line Options in scancode-toolkit and Reorganize the
structure of AboutCode documentation at aboutcode.readthedocs.io"**

About Me
--------

| Name - Ayan Sinha Mahapatra
| Email : ayansmahapatra@gmail.com
| Country : India
| Links :

- `Github <https://github.com/AyanSinhaMahapatra>`_
- `Twitter <https://twitter.com/ayansm23>`_
- `Website <https://ayansinha.dev/>`_
- `Resume <https://ayansinha.dev/assets/ayan-resume-gsod.pdf>`_

Important Links for this GSoD Project
-------------------------------------

- `GSoD Report <https://ayansinha.dev/assets/gsod-report.pdf>`_
- `GSoD Proposal <https://ayansinha.dev/assets/gsod-proposal.pdf>`_
- `ScanCode Toolkit Docs <https://github.com/nexB/scancode-toolkit>`_
- `Aboutcode Docs <https://github.com/nexB/deltacode>`_

----

Project Overview
----------------

#. **Restructured Documentation hosted at ReadTheDocs:** Outdated Documentation from GitHub Wikis
   was updated, improved and converted to .RST, to be hosted at aboutcode.readthedocs.io.

#. **Documentation Tests and Roadmaps:** Documentation tests were added to check Documentation
   Builds, Internal/External Links, and Style Standards. These tests were added in both aboutcode
   and scancode-toolkit and already existing/new documentation was made compliant of these tests.

#. **Command Line Options Referance:** The entire Command Line Options were listed, explained, and
   their application elaborated from scratch. This is the main goal and the most important addition
   to the scancode-toolkit documentation.

#. **Migration of Scancode-Toolkit docs into its own Repository:** After adding the scancode toolkit
   docs to aboutcode and reviews, this section was migrated to its own repository, to be
   distributed with scancode-toolkit and with local builds enabled.

#. **[WIP] Improve/Add to Existing Tutorials/How-Tos:** Added two major Tutorials and other
   Tutorials/How-Tos were also updated to be consistent with the latest scancode versions and more
   Tutorials/How-Tos can be added later to better help the users.

#. **[WIP] Add Plugin Support:** A cookiecutter based plugin creation system has to be added, and
   relevant docs for this process and for the plugin architecture has to be added.

#. **[WIP] Solve Other Documentation Issues:** Solving multiple issues listed under the tag
   "Documentation".

----

Pull Requests
-------------

PRs before GSoD Started @ nexB/aboutcode
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

- `[#17] <https://github.com/nexB/aboutcode/pull/17>`_ Adds Travis-CI for sphinx-build and linkcheck
- `[#15] <https://github.com/nexB/aboutcode/pull/15>`_ Adds Documentation from Wiki
- `[#13] <https://github.com/nexB/aboutcode/pull/13>`_ Adds GitHub wiki of Scancode-Toolkit and Scancode-Workbench

GSoD PRs @ nexB/scancode-toolkit
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

- `[#1784] <https://github.com/nexB/scancode-toolkit/pull/1784>`_ Add Travis CI Test For Docs
- `[#1827] <https://github.com/nexB/scancode-toolkit/pull/1827>`_ Add New Issue and Pull Request Templates
- `[#1812] <https://github.com/nexB/scancode-toolkit/pull/1812>`_ Add Documentation from Aboutcode
- [WIP] Add Cookiecutter Plugin and Plugin Docs
- [WIP] `[#1847] <https://github.com/nexB/scancode-toolkit/pull/1847>`_ Fix remaining documentation Issues

GSoD PRs @ nexB/aboutcode
^^^^^^^^^^^^^^^^^^^^^^^^^

- `[#26] <https://github.com/nexB/aboutcode/pull/26>`_ Adds Documentation Versioning, Command Line Options, Changelog
- `[#27] <https://github.com/nexB/aboutcode/pull/27>`_ CLI Options Reference for v3.1.1
- `[#29] <https://github.com/nexB/aboutcode/pull/29>`_ Update Docs with changes in Wiki
- `[#30] <https://github.com/nexB/aboutcode/pull/30>`_ Add doc8 style checks to Travis-CI
- `[#31] <https://github.com/nexB/aboutcode/pull/31>`_ Fix template error
- `[#33] <https://github.com/nexB/aboutcode/pull/33>`_ Add final Changes/Improvements before Migrating
- `[#34] <https://github.com/nexB/aboutcode/pull/34>`_ Delete scancode-toolkit documentation
- `[#35] <https://github.com/nexB/aboutcode/pull/35>`_ Add GSoD 2019 Report

----

Acknowledgments
---------------

I would like to thank `Dennis Clark <https://github.com/DennisClark>`_, `Philippe Ombredanne <https://github.com/pombredanne>`_ and `Steven Esser <https://github.com/majurg>`_
for their help throughout my GSoD project, from helping me prepare my proposal and project to
constructive criticism, nit-picky reviews, conference calls to discuss project roadmaps and to
explain to me when I was stuck in any problem. Their support and positivity helped me through
this project and made me enjoy every bit of it.
