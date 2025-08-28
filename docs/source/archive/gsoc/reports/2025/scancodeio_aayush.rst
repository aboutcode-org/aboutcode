========================================================================
Create file-system tree view for project scans
========================================================================

**Organization:** `AboutCode <https://aboutcode.org>`_

**Projects:** `Scancode.io <https://github.com/aboutcode-org/scancode.io>`_

**Mentee:** `Aayush Kumar (aayushkdev) <https://github.com/aayushkdev>`_

**Mentors:**

- `Thomas Druez <https://github.com/tdruez>`_
- `Tushar Goel <https://github.com/TG1999>`_
- `Omkar Phansopkar <https://github.com/OmkarPh>`_
- `Swastik Sharma <https://github.com/swastkk>`_

Overview
--------
ScanCode.io previously allowed browsing project scans only one directory at a time,
which made exploring large codebases or container images slow and inefficient.

This project introduced an interactive codebase tree view that lets users
navigate directories and files hierarchically, similar to a file explorer.

--------------------------------------------------------------------------------

Implementation
--------------
- **Changes in the CodebaseResource model:**
    - Introduced a new parent_path field to the CodebaseResource model to
    efficiently fetch the children of a directory.
    - Ensured that top-level paths are stored during resource creation,
    which is necessary for rendering root-level nodes in the file tree.

- **Backend View:**
    - Implemented a new `CodebaseResourceTreeView` View to fetch and display
    immediate children of a directory.
    - Added a new `CodebaseResourceTableView` View to display the details of a file
    in tabular format with support for filtering.
    - Used HTMX to update data in place without needing to reload the file for each change.

- **Frontend Codebase Tree:**
    - Introduced a collapsible file tree panel in the left pane of the project resource view.
    - Implemented chevron toggling to expand or collapse a directory’s immediate children:
        - If children were already fetched, they are simply shown or hidden.
        - Directories with no children display without a chevron.
    - Enabled lazy loading to fetch directory contents only when expanded,
    reducing initial load time.


- **Testing:**

    - Conducted large-scale testing to ensure API and UI can handle thousands of files efficiently.
    - Added unit tests for both backend and frontend to verify that the APIs return correct data,
    the tree view expands and collapses properly, and file/directory details are displayed as
    expected.


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
     - Add support for tracking parent of CodebaseResource
     - `aboutcode.org/scancode.io#1691
       <https://github.com/aboutcode-org/scancode.io/pull/1691>`_
     - Merged
   * - 2
     - Add a resource tree explorer to explore scanned images
     - `aboutcode.org/scancode.io#1704
       <https://github.com/aboutcode-org/scancode.io/pull/1704>`_
     - Open
   * - 3
     - Add filter and search support to the codebase tree
     - `aboutcode.org/scancode.io#1828
       <https://github.com/aboutcode-org/scancode.io/pull/1828>`_
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
     - Provide an explorer-style tree in resource view
     - `#697
       <https://github.com/aboutcode-org/scancode.io/issues/697>`_
   * - 2
     - Add support for tracking parent of CodebaseResource entries and ensure top level paths are stored
     - `#1687
       <https://github.com/aboutcode-org/scancode.io/issues/1687>`_
   * - 3
     - Add a resource tree explorer to explore scanned images
     - `#1682
       <https://github.com/aboutcode-org/scancode.io/issues/1682>`_

Pre GSoC Work
-------------

Here are some of the PR's I submitted before GSoC:

- `Enforced --path as a required parameter for scancode-license-data module
  <https://github.com/aboutcode-org/scancode-workbench/pull/638>`_
- `Fixed missing migration for Project.purl field
  <https://github.com/aboutcode-org/scancode.io/pull/1605>`_
- `Reorder XLSX output fields in RESOURCES sheet
  <https://github.com/aboutcode-org/scancode.io/pull/1590>`_
- `Added the ability to export the current filtered QuerySet of a FilterView to JSON format
  <https://github.com/aboutcode-org/scancode.io/pull/1572>`_
- `Added support for “caramel” license
  <https://github.com/aboutcode-org/scancode-toolkit/pull/4159>`_
- `Added the is_notice flag to the --classify option
  <https://github.com/aboutcode-org/scancode-toolkit/pull/4142>`_

Post GSoC
---------

I plan to continue contributing by implementing further performance optimizations in my project and
enhancing the overall user experience by refining and polishing the UI.

Links
-----

* `Project Idea
  <https://github.com/aboutcode-org/aboutcode/wiki/GSOC-2025-project-ideas#scancodeio-create-file-system-tree-view-for-project-scans>`_

* `Official GSoC project page
  <https://summerofcode.withgoogle.com/programs/2025/projects/OQ4Mahel>`_

* `GSoC Proposal
  <https://docs.google.com/document/d/1kcJaizi6eK8FZQZs39sPY6XRCSuDU3bmlllFEs9O31U/edit?usp=sharing>`_

* `Project Board <https://github.com/orgs/aboutcode-org/projects/30>`_

Acknowledgements
----------------

I would like to thank my mentors:

- `Thomas Druez <https://github.com/tdruez>`_
- `Tushar Goel <https://github.com/TG1999>`_
- `Omkar Phansopkar <https://github.com/OmkarPh>`_
- `Swastik Sharma <https://github.com/swastkk>`_

The weekly status calls were extremely valuable, as they provided me with guidance
on how to approach problems, break tasks into manageable steps, and stay on track
with my progress. These discussions helped me clarify doubts quickly and gave me a
clear direction on how to get things done efficiently.
