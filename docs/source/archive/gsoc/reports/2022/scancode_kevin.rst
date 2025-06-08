========================================================================
Extending license detection to use licenses external to ScanCode Toolkit
========================================================================


| **Organization:** `AboutCode <https://aboutcode.org>`_
| **Project:** `Scancode Toolkit
  <https://github.com/nexB/scancode-toolkit>`_
| **Mentee:** `Kevin Ji (KevinJi22) <https://github.com/KevinJi22>`_
| **Mentors:** Philippe Ombredanne, AyanSinhaMahapatra, Jono Yang

Overview
--------

When doing license detection, ScanCode uses the licenses and rules in the
ScanCode LicenseDB. The goal of this project is to extend the capabilities
of ScanCode license detection to include licenses that are external to
LicenseDB, such as proprietary licenses to be kept within an organization.
I also extended it to include licenses installed from external sources.

Implementation
--------------

All the work I did is contained in `this single PR
<https://github.com/nexB/scancode-toolkit/pull/2979>`_. I added a new
command line option called ``--additional-license-directory`` that someone
can use to include additional licenses/rules contained in other directories
in the license index. Scancode Toolkit uses this license index when doing
license detection. This option must be called with ``--reindex-licenses``
to explicitly regenerate the license cache, and then when doing license
scans, users can just use the regular ``--license`` option and these
additional licenses and/or rules will be used in license detection.

This change also allows users to install directories of licenses or rules
to their local machine, and then Scancode Toolkit will detect and include
them in the license cache when someone is reindexing the licenses. If
someone wants to create a directory of licenses or rules that they want to
install and use in Scancode Toolkit, they must subclass a new Plugin class
I added. This allows Scancode Toolkit to identify the location of these
installed licenses/rules through a unique entry point and add them to the
license index.

Finally, all these changes are tested through multiple unit tests
validating both correct behavior and error handling as needed.

Post GSoC
---------

I would like to merge this PR into Scancode Toolkit, hopefully allowing
users to leverage this feature to expand their license detection
capabilities.

Links
-----

`Project idea
<https://github.com/nexB/aboutcode/wiki/GSOC-2022#scancode-toolkit-enable-detection-of-private-licenses>`_

`Official GSoC project page
<https://summerofcode.withgoogle.com/programs/2022/projects/e2m1eokW>`_

`GSoC Proposal <https://docs.google.com/document/d/1FGkFTN79Hq
-Z0FLVZdeqn1B9TgTamo9T3Mux1HU4h8M/edit?usp=sharing>`_

`Documentation page about the feature
<https://github.com/KevinJi22/scancode-toolkit/blob/external-licenses-480/docs/source/how-to-guides/install_new_license_plugin.rst>`_

Acknowledgements
----------------

Thanks to Jono and Phillippe for being my mentors. I enjoyed all the
meetings, code reviews, and design discussions. Thank you for your time and
your patience!
