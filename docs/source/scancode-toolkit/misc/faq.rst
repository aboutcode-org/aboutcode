.. _faq:

FAQ
===

Why ScanCode?
-------------

We could not find an existing tool (open source or commercial) meeting our needs:

- usable from the command line or as library
- running on Linux, Mac and Windows
- written in a higher level language such as Python
- easy to extend and evolve


.. _scancode_toolkit_faq_how_to_get_started_with_developement:

How to get started with development?
------------------------------------

ScanCode is primarily developed in Python with Python 2.7.

Source code is at:

- https://github.com/nexB/scancode-toolkit.git
- https://github.com/nexB/scancode-thirdparty-src.git

Open a terminal, clone the scancode-toolkit repository, cd to the clone directory and run::

	source configure

On Windows open a command prompt, cd to the clone directory and run instead::

	configure

The configure script creates an isolated Python virtual environment ready for development usage. Rerun ``configure`` or ``source bin/activate`` when opening a new terminal. Rerun ``configure`` after a pull or a branch merge.

To run the all tests run this command. Be patient: there are several thousand tests!::

	py.test

To run the tests faster on four processors in parallel run::

	py.test -n 4

See also :ref:`scancode_toolkit_developement_running_tests` for more details

More info:

- Source code and license datasets are in the /src/ directory.
- Test code and test data are in the /tests/ directory.
- Datasets and test data are in /data/ sub-directories.
- Third-party components are vendored in the /thirdparty/ directory. ScanCode is self contained and should not require network access for installation or configuration of third-part libraries.
- Additional pre-compiled vendored binaries are stored in bin/ sub-directories of the /src/ directory with their sources in this repo: https://github.com/nexB/scancode-thirdparty-src/
- Porting ScanCode to other OS (FreeBSD, etc.) is possible. Enter an issue for help.
- Bugs and pull requests are welcomed.
- See the wiki and CONTRIBUTING.rst for more info.


Can licenses be synchronized with the DejaCode license library?
---------------------------------------------------------------

The license keys are the same that are used in DejaCode. They are kept in sync by hand in the short term. There is also a ticket to automate that sync with DejaCode and possibly other sources. See https://github.com/nexB/scancode-toolkit/issues/41

How is ScanCode different from licensecheck?
--------------------------------------------

At a high level, ScanCode detects more licenses and copyrights than licensecheck does, reporting more details about the matches. It is likely slower.

In more details: ScanCode is Python app using a data-driven approach (as opposed to carefully crafted regex):

- for license scan, the detection is based on a (large) number of license full texts (~900) and license notices/rules (~1800) and is data driven as opposed to regex-driven. It detects exactly where in a file a license text is found. Just throw in more license texts to improve the detection.
- for copyright scan, the approach is natural language parsing (using NLTK) with POS tagging and a grammar; it has a few thousand tests.
- licenses and copyrights are detected in texts and binaries

Licensecheck (available here for reference: /https://metacpan.org/release/App-Licensecheck ) is a Perl script using hand-crafted regex patterns to find typical copyright statements and about 50 common licenses. There are about 50 license detection tests.

A quick test (in July 2015, before a major refactoring but for this notice still valid) shows that are several things not detected by licensecheck that are detected by ScanCode.

How can I integrate ScanCode in my application?
-----------------------------------------------

More specifically, does this tool provides an API which can be used by us for the integration with my system to trigger the license check and to use the result?

In terms of API, there are two stable entry points:

#. The JSON output when you use it as a command line tool from any language or when you call the scancode.cli.scancode function from a Python script.
#. Otherwise the scancode.cli.api module provides simple function if you are only interested in calling a certain service on a given file (such as license detection or copyright detection)

Can I install ScanCode in a Unicode path?
-----------------------------------------

Not for now. See https://github.com/nexB/scancode-toolkit/issues/867 There is a bug in virtualenv on Python2 https://github.com/pypa/virtualenv/issues/457 At this stage and until we completed the migration to Python 3 there is no way out but to use a path that contains only ASCII characters.

The line numbers for a copyright found in a binary are weird. What do they mean?
--------------------------------------------------------------------------------

When scanning binaries, the line numbers are just a relative indication of where a detection was found: there is no such thing as lines in a binary. The numbers reported are based on the strings extracted from the binaries, typically broken as new lines with each NULL character. They can be safely ignored.