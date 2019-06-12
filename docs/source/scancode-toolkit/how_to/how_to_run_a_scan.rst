.. _how_to_run_a_scan:

How to Run a Scan
=================

Quickstart
----------

ScanCode results are provided as:


#. JSON file (default)
#. html (static html)

The basic usage is:

::

   ./scancode [OPTIONS] <input> <output_file>


**Note: On Windows use scancode instead of ./scancode**

The ``<input>`` file or directory is what will be scanned for origin clues. The results will be saved to the ``<output_file>``.
The output file format is set by using the ``-f`` or ``--format`` option. The default output format is JSON.

The following example scans will show you how to run a scan with each of the result formats. For the scans, we will use the ``samples`` directory provided with the ScanCode Toolkit.

JSON file output
----------------

Scan the ``samples`` directory and save the scan to a JSON file:

::

   ./scancode --format json samples samples.json


.. image:: scancode-toolkit-json-output.png

Static html output
------------------

Scan the ``samples`` directory for licenses and copyrights and save the scan results to an HTML file.  When the scan is done, open ``samples.html`` in your web browser.

::

   ./scancode --format html samples samples.html

.. image:: scancode-toolkit-static-html1.png
.. image:: scancode-toolkit-static-html2.png
