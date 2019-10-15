Synopsis
========

ScanCode detects licenses, copyrights, package manifests and direct dependencies and more both
in source code and binary files, by scanning the files. This section shows and explains the
following:

- Quickstart
- Type of Options
- Output Formats
- Other Important Documentation

This is a synopsis of the whole section that follows, the ScanCode Command Line Referance.

Quickstart
----------

The basic usage is::

   ./scancode [OPTIONS] <OUTPUT FORMAT OPTION(s)> <input>...

To scan the ``samples`` directory, the command will be::

   ./scancode -clieu --json-pp sample.json samples

.. Note::

    On Windows use ``scancode`` instead of ``./scancode``

.. Note::

    The <OUTPUT FORMAT OPTION(s)> includes both the output option and output file name.
    For example in ``./scancode -clieu --json-pp sample.json samples``,
    ``--json-pp sample.json`` is <OUTPUT FORMAT OPTION(s)>.

    So obviously there isn't a "Default" output option in Versions 3.x onwards, you have to
    specify <OUTPUT FORMAT OPTION(s)> explicitly.

.. Note::

    Options ``--copyright``, ``--license`` and ``--package`` are not default in versions 3.x
    onwards, you have to explicitely specify them.

Scans the <input> file or directory for license, origin and packages and saves results to FILE(s)
using one or more output format option. Error and progress are printed to stdout.


Type of Options
---------------

Scancode Toolit Command Line options can be divided into these major section:

- :ref:`cli_basic`
- :ref:`Extractcode Options <cli_extract>`
- :ref:`cli_core`
- :ref:`cli_output_control`
- :ref:`cli_pre_scan`
- :ref:`cli_post_scan`

Output Formats
--------------

The output file format is set by using the varios output options. The default output format
is JSON, the entire file being in one line, without whitespace characters.

The following example scans will show you how to run a scan with each of the result formats. For
the scans, we will use the ``samples`` directory provided with the ScanCode Toolkit.

JSON file output
^^^^^^^^^^^^^^^^

Scan the ``samples`` directory and save the scan to a JSON file:

::

   ./scancode -clp --json samples.json samples

.. image:: data/scancode-toolkit-json-output.png

Static html output
^^^^^^^^^^^^^^^^^^

Scan the ``samples`` directory for licenses and copyrights and save the scan results to an HTML
file. When the scan is done, open ``samples.html`` in your web browser.

::

   ./scancode -clp --html samples.html samples

.. image:: data/scancode-toolkit-static-html1.png
.. image:: data/scancode-toolkit-static-html2.png


Other Important Documentation
-----------------------------

#. :ref:`how_to_run_a_scan`
#. :ref:`tutorials`
#. :ref:`how_to_guides`
#. :ref:`how_it_works`
#. :ref:`contrib_code_dev`
#. :ref:`contrib_doc_dev`
#. :ref:`plugin_arch`
#. :ref:`faq`
#. :ref:`support`
