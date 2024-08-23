========================================================================
Compute summary for all detected packages.
========================================================================


| **Organization:** `AboutCode <https://aboutcode.org>`_
| **Project:** `Scancode Toolkit <https://github.com/aboutcode-org/scancode-toolkit>`_
| **Mentee:** `Swastik Sharma (swastkk) <https://github.com/swastkk>`_
| **Mentors:** Philippe Ombredanne, AyanSinhaMahapatra, AvishrantSh, Jonathan Yang, Jay Kumar

Overview
--------

Previously, we computed the summary at the codebase level, which included elements like the
`license_clarity_score`, `declared_holder`, `other_license_expressions`, and more.
This project aims to improve scanning accuracy by computing summaries and license clarity scores for
each package and its files, rather than for the entire scan. This involves enhancing package models
and ensuring accurate attribute collection across all package ecosystems.

Implementation
--------------

All the work I did is contained in `this single PR <https://github.com/aboutcode-org/scancode-toolkit/pull/3792>`_.
I added a new command-line option called ``--package-summary`` that users can employ to obtain
a package-level summary within a single codebase. The package level summary involves the
``license_clarity_score`` calculation and population of package attributes like ``copyright``,
``holder``, ``other_license_expression``, ``notice_text``. This option must be called
with ``--classify`` option that helps ScanCode further classify scanned files/directories,
to determine whether they fall in these categories `legal`, `readme`, `top-level`, `manifest`
& ``--package`` or ``-p`` option detects various package manifests, lockfiles and
package-like data and then assembles codebase level packages and dependencies from
these package data detected at files. Also tags files if they are part of the packages.

This change allows users to get the more refined summary for each individual package
that is present in a codebase. Also this feature improves the package assembly for
various package ecosystems like npm, python-whl, rust, rubygems etc.


Finally, all these changes are tested through multiple unit tests validating both correct
behavior and error handling as needed.

Post GSoC
---------

I would like to merge this PR into Scancode Toolkit, hopefully allowing users to leverage
this feature to expand their package/codebase scanning capabilities.

Links
-----

`Project idea <https://github.com/aboutcode-org/aboutcode/wiki/GSOC-2024-Project-Ideas#compute-summary-for-all-detected-packages>`_

`Official GSoC project page <https://summerofcode.withgoogle.com/programs/2024/projects/JzMlDtnM>`_

`GSoC Proposal <https://docs.google.com/document/d/1TcGqQVzXhTkz6Pmu9UaXAr4R4q1rlT4tof7H7dsVG0o/edit?usp=sharing>`_

Acknowledgements
----------------

I would like to thank my mentors

- `@pombredanne <https://github.com/pombredanne>`_
- `@AyanSinhaMahapatra <https://github.com/AyanSinhaMahapatra>`_
- `@AvishrantSh <https://github.com/AvishrantSsh>`_
- `@35C4n0r <https://github.com/35C4n0r>`_
- `@jono-yang <https://github.com/JonoYang>`_

Weekly calls were greatly helpful and those special 1:1 call with
`@AyanSinhaMahapatra` and `@pombredanne` were so amazing. Thank you for your time and your patience!
