.. _contributing:

Contributing to ScanCode.io
===========================

Thank you so much for being so interested in contributing to ScanCode.io. We
are always on the lookout for enthusiastic contributors like you who can make
our project better, and we're willing to lend a helping hand if you have any
questions or need guidance along the way. That being said, here are a few
resources to help you get started.

.. note::
    By contributing to the ScanCode.io project, you agree to the Developer
    `Certificate of Origin <http://developercertificate.org/>`_.

Do Your Homework
----------------

Before adding a contribution or create a new issue, take a look at the project’s
`README <https://github.com/aboutcode-org/scancode.io#readme>`_, read through our
`documentation <https://scancodeio.readthedocs.io/en/latest/>`_,
and browse existing `issues <https://github.com/aboutcode-org/scancode.io/issues>`_,
to develop some understanding of the project and confirm whether a given
issue/feature has previously been discussed.

Ways to Contribute
------------------

Contributing to the codebase is not the only way to add value to ScanCode.io or
join our community. Below are some examples to get involved:

First Timers
^^^^^^^^^^^^

You are here to help, but you're a new contributor! No worries, we always
welcome newcomer contributors. We maintain some
`good first issues <https://github.com/aboutcode-org/scancode.io/labels/good%20first%20issue>`_
and encourage new contributors to work on those issues for a smooth start.

.. warning::
    **"Can I work on this issue?"**

    You do not need our permission to work on an open issue.
    A good start is to present your understanding of the problem/bug and how you
    would fix it. Providing some code using a pull request will come handy,
    but being able to explain a solution is always a good start.

    Make sure to read through this page and follow the recommendations.

.. warning::
    **"Is this issue is open?"**

    Unless closed, yes it is open.

Report Issues
^^^^^^^^^^^^^

- Report a new `bug <https://github.com/aboutcode-org/scancode.io/issues>`_; just remember to be
  as specific as possible.
- Create a `new issue <https://github.com/aboutcode-org/scancode.io/issues>`_ to request a
  feature, submit a feedback, or ask a question.
- Look into existing `bugs <https://github.com/aboutcode-org/scancode.io/labels/bug>`_,
  try to reproduce the issue on your side, and discuss solutions in the comments.

.. note::
    Make sure to check existing `issues <https://github.com/aboutcode-org/scancode.io/issues>`_,
    and :ref:`faq` to confirm whether a given issue or a question has previously been
    discussed.

Code Contributions
^^^^^^^^^^^^^^^^^^

Code is contributed to the codebase using **pull requests**.
A pull request should always be attached to an existing issue.
When there is no existing issues, start by `creating one <https://github.com/aboutcode-org/scancode.io/issues>`_
to discuss potential solutions and implementation details before writing any code.

We use several conventions to ensure code quality regarding format, testing, and
attribution.

**Make sure to follow those conventions before submitting your code:**

1. **Code validation**

  We use `PEP8 <https://peps.python.org/pep-0008/>`_ conventions.
  A command is available to automatically format your code::

    make valid

2. **Unit tests**

  We write tests, a lot of tests, thousands of tests.
  When fixing bugs or adding new features, you should add tests too.
  You can run the test suite with::

      make test

3. **Commit messages and Developer Certificate of Origin**

  Follow the instructions at `Writing good Commit Messages <https://aboutcode.readthedocs.io/en/latest/contributing/writing_good_commit_messages.html>`_
  and `check some examples <https://github.com/aboutcode-org/scancode.io/commits/main>`_.

  **You must include a "Signed-off-by" to your commit messages**::

    Signed-off-by: Philippe Ombredanne <pombredanne@nexb.com>

4. **Your code is now ready to be pushed as a PR**

.. note::
    Pull requests that are not passing the automated integration tests are unlikely
    to be reviewed. Focus on making all the "Checks" to pass before asking for a
    code review.

Documentation Improvements
^^^^^^^^^^^^^^^^^^^^^^^^^^

Documentation is a critical aspect of any project that is usually neglected or
overlooked. We value any suggestions to improve
`ScanCode.io documentation <https://scancodeio.readthedocs.io/en/latest/>`_.

.. tip::
    Our documentation is treated like code. Make sure to check our
    `writing guidelines <https://scancode-toolkit.readthedocs.io/en/latest/contribute/contrib_doc.html>`_
    to help guide new users.

Other Ways
^^^^^^^^^^

You want to contribute to other aspects of the ScanCode.io project, and you
can't find what you're looking for! You can always discuss new topics, ask
questions, and interact with us and other community members on
`Gitter <https://gitter.im/aboutcode-org/discuss>`_.

.. _contributing_resources:

Helpful Resources
-----------------

- Review our `comprehensive guide <https://scancode-toolkit.readthedocs.io/en/latest/contribute/index.html>`_
  for more details on how to add quality contributions to our codebase and documentation
- Check this free resource on `how to contribute to an open source project on github <https://egghead.io/courses/how-to-contribute-to-an-open-source-project-on-github>`_
- Follow `this wiki page <https://aboutcode.readthedocs.io/en/latest/contributing/writing_good_commit_messages.html>`_
  on how to write good commit messages
- `Pro Git book <https://git-scm.com/book/en/v2>`_
- `How to write a good bug report <https://www.softwaretestinghelp.com/how-to-write-good-bug-report/>`_
