
=====================================================
Adding Ability to Store and Query Downloaded Packages
=====================================================

**Organization:** `AboutCode <https://aboutcode.org>`__

**Project:** `ScanCode.io <https://github.com/aboutcode-org/scancode.io>`__

| **Contributor:** Varsha U N
| **GitHub:** `VarshaUN <https://github.com/VarshaUN>`__
| **LinkedIn:** `Varsha U N <https://www.linkedin.com/in/varsha-un/>`__

**Mentors:**
- `Philippe Ombredanne <https://github.com/pombredanne>`__
- `Ayan Sinha Mahapatra <https://github.com/AyanSinhaMahapatra>`__

Overview
--------

ScanCode.io currently stores scanned packages on disk without a centralized index,
leading to duplicate storage, project-specific data, and potential data loss when
inputs are deleted. This project enhances ScanCode.io by introducing structured
package storage and querying, enabling indexing, reuse across projects, and
reliable preservation.

Implementation
--------------

The project involved the following key components and steps:


.. figure:: /_static/gsoc2025/scancodeio_varsha/project_flow.png
   :alt: Project Flow Diagram
   :align: center
   :width: 70%

This project addresses the limitations of ScanCode.io's unstructured package
storage by adding a system to index, reuse, and preserve packages reliably.


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


Linked Pull Requests
--------------------

.. list-table::
   :widths: 10 40 20
   :header-rows: 1

   * - Sr. No
     - Name
     - Link
   * - 1
     - Add download archiving system
     - `scancode.io#1815 <https://github.com/aboutcode-org/scancode.io/pull/1815>`__
   * - 2
     - Support local package storage
     - `scancode.io#1685 <https://github.com/aboutcode-org/scancode.io/pull/1685>`__

Related Issues
--------------

.. list-table::
   :widths: 10 40 20
   :header-rows: 1

   * - Sr. No
     - Name
     - Link
   * - 1
     - Store and retrieve scanned packages
     - `#1063 <https://github.com/aboutcode-org/scancode.io/issues/1063>`__
   * - 2
     - Support local package storage
     - `#1683 <https://github.com/aboutcode-org/scancode.io/issues/1683>`__

Pre-GSoC Work
-------------

Here are some PRs submitted before GSoC:

- `Add bluefin-container image support <https://github.com/aboutcode-org/scancode.io/pull/1620>`__
- `Tag whitedout files <https://github.com/aboutcode-org/scancode.io/pull/1529>`__
- `Support python-private-classifier <https://github.com/aboutcode-org/scancode-toolkit/pull/4075>`__
- `Parse labels in Dockerfile <https://github.com/aboutcode-org/scancode-toolkit/pull/3987>`__
- `Add OCI labels to Dockerfile <https://github.com/aboutcode-org/scancode-toolkit/pull/3987>`__
- `Extract LibreOffice documents <https://github.com/aboutcode-org/extractcode/pull/67>`__

Links
-----

- **Project Idea:** `GSoC 2025 Idea <https://github.com/aboutcode-org/aboutcode/wiki/GSOC-2025-project-ideas#scancodeio-add-ability-to-storequery-downloaded-packages>`__
- **GSoC Project Page:** `GSoC 2025 <https://summerofcode.withgoogle.com/programs/2025/projects/x7sA6uN6>`__
- **Proposal:** `Project Proposal <https://docs.google.com/document/d/1LfTGfatLfg9RB-OyLhlS4_h0-Tc9Q8QU1ObsCVDV_sM/edit?usp=sharing>`__

Future Work
-----------

Future enhancements include implementing the web UI for the `LocalFilesystemProvider`
to enable package uploads, searches, listings, and retrievals in ScanCode.io, with
Django views, templates, and URL routes, backed by comprehensive testing. Additionally,
integrating an external cloud storage option (e.g., AWS S3) alongside the local
filesystem will extend the `DownloadStore` interface, providing scalable and remote
storage capabilities.

Closing Note
------------

During GSoC 2025, my mentors and I held weekly meetings to discuss progress,
challenges, and next steps. I am deeply grateful to my mentors for their guidance
and support, which greatly enriched my learning experience.



