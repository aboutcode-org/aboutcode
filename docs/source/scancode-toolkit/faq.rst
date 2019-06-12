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

How does ScanCode work?
-----------------------

For license detection, ScanCode uses a (large) number of license texts and license detection 'rules' that are compiled in a search index. When scanning, the text of the target file is extracted and used to query the license search index and find license matches.

For copyright detection, ScanCode uses a grammar that defines the most common and less common forms of copyright statements. When scanning, the target file text is extracted and 'parsed' with this grammar to extract copyright statements.

Scan results are provided in various formats:

- a JSON file simple or pretty-printed,
- SPDX tag value or XML RDF formats,
- CSV,
- a simple unformatted HTML file that can opened in browser or as a spreadsheet.

For each scanned file, the result contains:

- its location in the codebase,
- the detected licenses and copyright statements,
- the start and end line numbers identifying where the license or copyright was found in the scanned file, and
- reference information for the detected license.

For archive extraction, ScanCode uses a combination of Python modules, 7zip and libarchive/bsdtar to detect archive types and extract these recursively.

Several other utility modules are used such as libmagic for file and mime type detection.

How to add a new license for detection?
---------------------------------------

To add new license, you first need to select a new and unique license key (mit and gpl-2.0 are some of the existing license keys). All licenses are stored as plain text files in the src/licensedcode/data/licenses directory using their key as part of the file names.

You need to create a pair of files:

- a file with the text of the license saved in a plain text file named key.LICENSE

- a small text data file (in YAML format) named key.yml that contains license information such as::

	key: my-license
	name: My License

The key name can contain only these symbols:

- lowercase letters from a to z,
- numbers from 0 to 9,and
- dash - and . period signs. No spaces.

Save these two files in the ``src/licensedcode/data/licenses/`` directory.

Done!

See the ``src/licensedcode/data/licenses/`` directory for examples.

How to add a new license detection rule?
----------------------------------------

A license detection rule is a pair of files:

- a plain text rule file that is typically a variant of a license text, notice or license mention.
- a small text data file (in YAML format) documenting which license(s) should be detected for the rule text.

To add new rule, you need to pick a unique base file name. As a convention we like to include the license key(s) that should be detected in that name to make it more descriptive. For example: mit_and_gpl-2.0 is a good base name. Add a suffix to make it unique if there is already a rule with this base name. Do not use spaces or special characters in that name.

Then create the rule file in the src/licensedcode/data/rules/ directory using this name replacing selected_base_name with the base name you selected::

	selected_base_name.RULE

Save your rule text in this file.

Then create the YAML data file in the src/licensedcode/data/rules/ directory using this name::

	selected_base_name.yml

For a simple mit and gpl-2.0 detection license keys detection, the content of this file can be this YAML snippet::

	licenses:
    	- mit
    	- gpl-2.0

Save these two files in the ``src/licensedcode/data/licenses/`` directory and your are done!

See the ``src/licensedcode/data/rules/`` directory for examples.

More (advanced) rules options:

- you can use a notes: text field to document this rule.

- if no license should be detected for your .RULE text, do not add a list of license keys, just add a note.

- .RULE text can contain special text regions that can be ignored when scanning for licenses. You can mark a template region in your rule text using {{double curly braces}} and up to five words can vary and still match this rule. You must add this field in your .yml data file to mark this rule as a template::

	template: yes

- By using a number after the opening braces, more than five words can be skipped. With {{10 double curly braces }} ten words would be skipped.

- To mark a rule as detecting a choice of licenses, add this field in your .yml file::

	license_choice: yes

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