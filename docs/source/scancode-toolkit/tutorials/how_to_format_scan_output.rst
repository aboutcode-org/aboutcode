How to specify Scancode Output Format
=====================================

JSON
----

If you want JSON output of scancode results, you can pass the ``--json`` argument to scancode.
The following commands will output scan results in a formatted json file:

* ``./scancode --json /path/to/output.json /path/to/target/dir``

* ``./scancode --json-pp /path/to/output.json /path/to/target/dir``

* ``./scancode --json-lines /path/to/output.json /path/to/target/dir``

To compare the JSON output in different formats refer :ref:`comparing_json`.

Print to ``stdout`` (Terminal)
------------------------------

If you want to format the output in JSON and print it at stdout, you can replace the JSON filename
with a "-", like ``--json-pp -`` instead of ``--json-pp output.json``.

The following command will output the scan results in JSON format to ``stdout`` (In the Terminal)::

    ./scancode -clpieu --jsonlines - samples/

HTML
----

If you want HTML output of scancode results, you can pass the ``--html`` argument to scancode.
The following commands will output scan results in a formatted html page or simple web application:

* ``./scancode --html /path/to/output.html /path/to/target/dir``

* ``./scancode --html-app /path/to/output.html /path/to/target/dir``

For more details on the html output format refer :ref:`output_html`.

.. WARNING::

    The ``--html-app`` option has been deprecated, use Scancode Workbench instead.

.. include::  /scancode-toolkit/rst_snippets/custom_output_format.rst

More information on :ref:`cli_output_format`.
