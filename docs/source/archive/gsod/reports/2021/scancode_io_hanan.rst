scancode.io Documentation GSoD Case Study
=========================================


`AboutCode.org <https://www.aboutcode.org/>`_ is a community of open source developers who are
trying to make open source easier to use by providing open source tools to
discover, identify and track open source components (aka. Software Composition Analysis - SCA).
AboutCode is the collective name for these open source tools.

Author:  `Dennis Clark https://github.com/DennisClark`


Problem Statement
-----------------

Create and update ScanCode.io HowTo Guides and Tutorials

Proposal Abstract
-----------------

`Project Proposal Link <https://www.google.com/url?q=https://docs.google.com/document/d/1jW2ogyALIBNsVpHhQ0EbBKzpfPF8BJzmT4vCfU3sQso/edit&>`_

Our focus for GSoD 2021 is Scancode.io and these specific tasks:

    - Create a HowTo guide for integrating third-party libraries into a ScanCode.io Pipeline.
    - Add a tutorial for adding a new Pipeline with a third-party library.
    - Extend the HowTo Guides to cover Software Composition Analysis workflows
    - Upgrade the ScanCode.io Web UI documentation
    - Create an introductory `video <https://opensource.com/article/21/3/video-open-source-tools>`_ to show how the web UI is used.
    - Update and improve the existing Pipe libraries reference API documentation
      (which is generated from code documentation "docstrings").
    - Sync the new documentation set with the code to support continuous integration.

Project Description
-------------------

Creating the proposal
^^^^^^^^^^^^^^^^^^^^^

ScanCode.io is an open platform to script and automate Software Composition Analysis (SCA)
for many different use cases including development codebases, package dependencies, and Docker,
Virtual Machine images, or other containers. With the ScanPipe feature of ScanCode.io,
you can create any number of Pipelines to integrate SCA into your development process.
A Pipeline may include libraries beyond those available from AboutCode.org.
This flexibility means that we need much more extensive HowTo, Tutorials, and Reference
documentation to help our users build their own Pipelines. ScanCode.io also offers a Web UI
that needs a new  Tutorial and HowTo documentation.

Although we already offer a few Pipeline templates, our users need to be self-sufficient
to adapt these templates or add new Pipelines in order to fit SCA into their own environment.
We also want to encourage users to contribute back improvements to our templates or new
Pipeline templates. Both of these objectives require more and better documentation.

Budget
^^^^^^

Our budget for the project was $15,000 which was allocated completely to the technical
writer working on the project.

Participants
^^^^^^^^^^^^

The primary participant was technical writer `Hanan Younes <https://github.com/hyounes4560>`_
who responded to our announcement describing the project scope, and was the clear choice
among the many responders based on multiple criteria including clarity of vision and the
ability to execute the project goals.

The primary mentor is a regular contributor to AboutCode.org projects and the
primary maintainer of ScanCode.io:

- `Thomas Druez <https://github.com/tdruez>`_

Additional mentoring was provided by:

- `Philippe Ombredanne <https://github.com/pombredanne>`_
- `Michael Herzog <https://github.com/mjherzog>`_
- `Dennis Clark <https://github.com/DennisClark>`_
- `Ayan Sinha Mahapatra <https://github.com/AyanSinhaMahapatra>`_

As an exceptionally thoughtful and articulate analyst, Hanan Younes offered much useful
feedback and many questions that encouraged the project mentors to improve their
planning and organization. We learned how valuable a clear roadmap and directions can be
to a technical writer.

Timeline
^^^^^^^^

We planned that the technical writer would work on our project ⅓ to ½ time over a period
of 5 months (May to October, 2021).
Results

The documentation for ScanCode.io was dramatically improved. See `scancode.io RTD <https://scancodeio.readthedocs.io>`_

The documentation is now well organized into Getting Started, Tutorial, and Reference sections,
each of which provides a wealth of information.

Tracking
^^^^^^^^

We used GitHub Projects to manage and track the project.  All expectations were met or exceeded.

Analysis
^^^^^^^^

- Hanan executed all tasks beautifully.
- We found that we needed to dig deeper into ScanCode.io to respond to Hanan's many
  questions and comments.
- The project was very successful and provided everyone with the opportunity to
  grow and learn. We are very pleased with the documentation that is now available
  to the open source community.

Summary
^^^^^^^

- Clear organization of project documentation is essential.
- We may wish to articulate more “stretch goals” in future projects.
- Be sure to define exactly what you want to accomplish.
- Be sure to plan project communication standards, such as a Gitter channel and regularly
  scheduled status meetings.

Appendix
--------

We received more than twenty proposals, and are grateful to the interest shown in AboutCode.org
by the open source community.

Process Feedback to Google
--------------------------

The overall process for the GSoD went well, but we faced a few issues, mostly self-inflicted
that we are listing here for reference:

- Since we were not sure if our org would be accepted, we started late working on actual
  recruitment. Recruitment ended up taking much more time than planned. This means we had
  to scramble when our org was accepted to get our selected candidate on-boarded and
  starting the project.
- In contrast with the GSoC project, there is no infrastructure for candidates to submit
  a project proposal. It was not an issue for us, but we felt after the fact that a GSoC-like
  infrastructure to funnel submissions would have been a nice addition.
- There was no clear contract or agreement in place with our selected candidate and this
  led to some misunderstanding between us with regard to payments. This ended up being a
  source of anxiety for our doc writer and a situation we decided to address directly.
  AboutCode is sponsored by nexB which is a commercial company and nexB accepted to
  make a donation to the AboutCode OpenCollective as a bridge to provide advanced
  payments to our doc writer. For future participation, we will manage this process
  proactively to avoid such ambiguity.
- While we have been proactively managing the process with our doc writer with weekly meetings
  and continuous discussions in chat channels, we mentors collectively have not been great at
  providing timely feedback to GSoD administrators about our progress which is something
  that we would need to improve for the future.
