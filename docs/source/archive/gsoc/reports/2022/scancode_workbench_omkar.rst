Refactor Scancode Workbench to React-Typescript
===============================================

| **By**, `Omkar Phansopkar <https://github.com/OmkarPh>`_
| **Project**: `Scancode-Workbench
  <https://github.com/nexB/scancode-workbench>`_
| **Organization -** `AboutCode <https://www.aboutcode.org>`_

Overview
---------------
ScanCode Workbench provides an advanced visual UI to help you quickly
evaluate license and other notices identified by `ScanCode
<https://github.com/nexB/scancode-toolkit/>`_. ScanCode detects licenses,
copyrights, packages and other interesting information in your code that
can be visualised efficiently using workbench.

The GSoC project's goal was to refactor ScanCode Workbench to a React +
Typescript implementation and improve various sections of the application
including Table view, file uploads, data sync across components, etc. Plus,
the workbench wasn't updated for a long time, to support the latest scans
from scancode-toolkit, hence the schema and UI had to be changed
accordingly.

Goals achieved
-------------------

* Refactor Workbench from vanilla javascript to React + Typescript
  implementation
* Update Workbench to support the latest scancode-toolkit output format.
  (currently supports outputs from scancode-toolkit v31.1.1)
* Improve User experience in Tableview, Home page, etc
* Add convenience features like Drop files, History records, etc.
* Add new sections for Scan Info, packages-dependencies info, etc
* Automated releases using github actions (except for apple-silicon builds)


Quick look
-------------------
.. image:: https://user-images.githubusercontent.com/48476025/185114433-7340ee70-57cd-4586-b7e7-964fe736451a.gif


Links
---------------

- `Download ScanCode Workbench beta
  <https://github.com/OmkarPh/scancode-workbench/releases/latest>`_
- `Download latest ScanCode Workbench
  <https://github.com/nexB/scancode-workbench/releases/latest>`_
- `GSoC Project Details
  <https://summerofcode.withgoogle.com/programs/2022/projects/UHXR7kXp>`_
- `Proposal
  <https://docs.google.com/document/d/1RFEtP5Aub5kAGkEMB1HYnqNa4b66-CDIFp4xQRzuiBg/edit?usp=sharing>`_
- `ScanCode Workbench <https://github.com/nexB/scancode-workbench>`_
- `ScanCode Toolkit <https://github.com/nexB/scancode-toolkit>`_


Post GSoC - Future Plans
-------------------------------------------
I wish to carry on with the development of Scancode-workbench and implement
the ideas suggested by my mentors. Workbench isn't yet utilising all the
scan data it imports, I wish to propose best ways to express this data.
Moreover, with new release formats of scancode-toolkit, workbench must
adapt and update its schema & UI at pace with scancode-toolkit.

Closing Thoughts
-------------------

It was a great experience contributing to Workbench, Aboutcode team
provided me with the freedom to implement UI improvements and suggested a
lot of improvements throughout the journey. I learned a lot of things from
working on an electron app to creating automated GitHub release scripts.

Heartiest thanks to `@steven-esser <https://github.com/steven-esser>`_
`@AyanSinhaMahapatra <https://github.com/AyanSinhaMahapatra>`_ `@TG1999
<https://github.com/TG1999>`_ `@pombredanne
<https://github.com/pombredanne>`_ and all the About code members for your
constant feedback and support over the course of the project.

| You can connect with me here
| https://github.com/OmkarPh
| https://www.linkedin.com/in/omkarphansopkar


To the reader, Have a look at aboutcode's amazing `projects
<https://github.com/nexB/>`_. Surely you'll find something to contribute
that suits your preference

See ya 👋
