###################################################
 Adding ability to store/query downloaded packages
###################################################

**Organization:** `AboutCode <https://aboutcode.org>`_

**Project:** `ScanCode.io
<https://github.com/aboutcode-org/scancode.io>`_

|  **Varsha U N**
|  GitHub: `VarshaUN <https://github.com/VarshaUN>`_
|  LinkedIn: `Varsha U N <https://www.linkedin.com/in/varsha-un/>`_

**Mentors:**

-  `Philippe Ombredanne <https://github.com/pombredanne>`_
-  `Ayan Sinha Mahapatra <https://github.com/AyanSinhaMahapatra>`_

**********
 Overview
**********

Currently ScanCode.io scans the packages but doesn’t store it. This
makes it difficult for users to maintain a reference of packages used in
their projects, meet source redistribution obligations, or revisit
scanned packages for future.

This project enhanced ScanCode.io by adding the ability to store and
query downloaded packages locally and re-use packages that were already
scanned.

----

****************
 Implementation
****************

The project involved the following key components and steps:

.. figure:: /_static/gsoc2025/scancodeio_varsha/project_flow.png
   :alt: Project Flow Diagram
   :align: center
   :width: 70%

   Currently ScanCode.io downloads packages but does not store them. The new archiving system stores downloaded packages on the local filesystem and allows querying them.

Storage System Development:

-  Created a `DownloadStore` abstract base class in `archiving.py` to
   define the interface for managing package content and metadata
   storage.

-  Built the `LocalFilesystemProvider` class to store downloads on the
   local filesystem, using a SHA256-based nested directory structure.

-  Implemented methods for storing (`put`), retrieving (`get`), listing
   (`list`), and searching (`find`) downloads, with metadata saved in
   `origin-<hash>.json` files.

Integration with ScanCode.io:

-  Updated `pipelines/init.py` to incorporate the archiving system into
   ScanCode.io’s pipeline workflow, ensuring downloaded packages are
   stored during execution.

-  Revised `input.py` to process package download inputs, passing
   content, `download_url`, `download_date`, and `filename` to the
   archiving system.

User Interface Enhancements:

-  Modified the project resource view to display stored package
   information, including download URLs and dates.

Validation and Testing:

-  Wrote unit tests in `test_archiving.py` to verify
   `LocalFilesystemProvider` functionality (`put`, `get`, `list`,
   `find`), testing normal cases, edge cases (e.g., empty files), and
   errors (e.g., duplicate origins).

**********************
 Linked Pull Request:
**********************

Add download archiving system with local filesystem provider -
(https://github.com/aboutcode-org/scancode.io/pull/1815)

****************
 Related Issue:
****************

Store and retrieve on demand scanned packages/archives -
(https://github.com/aboutcode-org/scancode.io/issues/1063)

********
 Links:
********

|  Project Idea: `Idea Link
   <https://github.com/aboutcode-org/aboutcode/wiki/GSOC-2025-project-ideas#scancodeio-add-ability-to-storequery-downloaded-packages>`_
|  GSoC Project Page: `GSoC 2025
   <https://summerofcode.withgoogle.com/programs/2025/projects/x7sA6uN6>`_
|  Proposal: `Proposal Link
   <https://docs.google.com/document/d/1LfTGfatLfg9RB-OyLhlS4_h0-Tc9Q8QU1ObsCVDV_sM/edit?usp=sharing>`_

***************
 Closing Notes
***************

During the GSoC coding period, my mentors and I had weekly meetings to
discuss progress, challenges, and next steps. Thank you so much to my
mentors for being there every step of the way during GSoC 2025. Your
encouragement and insights made a huge difference in my learning
journey.
