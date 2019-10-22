.. _contrib_doc_dev:

Contributing to the Documentation
=================================

Continuous Integration
----------------------

The documentations are checked on every new commit through Travis-CI, so that common errors are
avoided and documentation standards are enforced. Travis-CI presently checks for these 3 aspects
of the documentation :

1. Successful Builds (By using ``sphinx-build``)
2. No Broken Links   (By Using ``link-check``)
3. Linting Errors    (By Using ``Doc8``)

Style Checks Using ``Doc8``
---------------------------

How To Run Style Tests
^^^^^^^^^^^^^^^^^^^^^^

In the project root, run the following command::

    $ doc8 --max-line-length 100 docs/source/scancode-toolkit --ignore D000

.. note::

   Only the scancode-toolkit documentation style standards are enforced presently.

A sample output is::

    Scanning...
    Validating...
    docs/source/scancode-toolkit/misc/licence_policy_plugin.rst:37: D002 Trailing whitespace
    docs/source/scancode-toolkit/misc/faq.rst:45: D003 Tabulation used for indentation
    docs/source/scancode-toolkit/misc/faq.rst:9: D001 Line too long
    docs/source/scancode-toolkit/misc/support.rst:6: D005 No newline at end of file
    ========
    Total files scanned = 34
    Total files ignored = 0
    Total accumulated errors = 326
    Detailed error counts:
        - CheckCarriageReturn = 0
        - CheckIndentationNoTab = 75
        - CheckMaxLineLength = 190
        - CheckNewlineEndOfFile = 13
        - CheckTrailingWhitespace = 47
        - CheckValidity = 1

Now fix the errors and run again till there isn't any style error in the documentation.

What is Checked?
^^^^^^^^^^^^^^^^

PyCQA is an Organization for code quality tools (and plugins) for the Python programming language.
Doc8 is a sub-project of the same Organization. Refer this `README <https://github.com/PyCQA/doc8/blob/master/README.rst>`_ for more details.

What is checked:

    - invalid rst format - D000
    - lines should not be longer than 100 characters - D001

        - RST exception: line with no whitespace except in the beginning
        - RST exception: lines with http or https URLs
        - RST exception: literal blocks
        - RST exception: rst target directives

    - no trailing whitespace - D002
    - no tabulation for indentation - D003
    - no carriage returns (use UNIX newlines) - D004
    - no newline at end of file - D005

Extra Style Checks
------------------

1. Headings

    (`Refer <http://www.sphinx-doc.org/en/master/usage/restructuredtext/basics.html#sections>`_)
    Normally, there are no heading levels assigned to certain characters as the structure is
    determined from the succession of headings. However, this convention is used in Python’s Style
    Guide for documenting which you may follow:

    # with overline, for parts

    * with overline, for chapters

    =, for sections

    -, for subsections

    ^, for sub-subsections

    ", for paragraphs

2. Heading Underlines

    Do not use underlines that are longer/shorter than the title headline itself. As in:

::

    Correct :

    Extra Style Checks
    ------------------

    Incorrect :

    Extra Style Checks
    ------------------------

.. note::

    Underlines shorter than the Title text generates Errors on sphinx-build.


3. Internal Links

    Using ``:ref:`` is advised over standard reStructuredText links to sections (like
    ```Section title`_``) because it works across files, when section headings are changed, will
    raise warnings if incorrect, and works for all builders that support cross-references.
    However, external links are created by using the standard ```Section title`_`` method.

4. Eliminate Redundancy

    If a section/file has to be repeated somewhere else, do not write the exact same section/file
    twice. Use ``.. include: ../README.rst`` instead. Here, ``../`` refers to the documentation
    root, so file location can be used accordingly. This enables us to link documents from other
    upstream folders.

5. Using ``:ref:`` only when necessary

    Use ``:ref:`` to create internal links only when needed, i.e. it is referenced somewhere.
    Do not create references for all the sections and then only reference some of them, because
    this created unnecessary references. This also generates ERROR in ``restructuredtext-lint``.

6. Spelling

    You should check for spelling errors before you push changes. `Aspell <http://aspell.net/>`_
    is a GNU project Command Line tool you can use for this purpose. Download and install Aspell,
    then execute ``aspell check <file-name>`` for all the files changed. Be careful about not
    changing commands or other stuff as Aspell gives prompts for a lot of them. Also delete the
    temporary ``.bak`` files generated. Refer the `manual <http://aspell.net/man-html/>`_ for more
    information on how to use.

7. Notes and Warning Snippets

    Every ``Note`` and ``Warning`` sections are to be kept in ``rst_snippets/note_snippets/`` and
    ``rst_snippets/warning_snippets/`` and then included to eliminate redundancy, as these are
    frequently used in multiple files.

Converting from Markdown
------------------------

If you want to convert a ``.md`` file to a ``.rst`` file, this `tool <https://github.com/chrissimpkins/md2rst>`_
does it pretty well. You'd still have to clean up and check for errors as this contains a lot of
bugs. But this is definitely better than converting everything by yourself.

This will be helpful in converting GitHub wiki's (Markdown Files) to reStructuredtext files for
Sphinx/ReadTheDocs hosting.
