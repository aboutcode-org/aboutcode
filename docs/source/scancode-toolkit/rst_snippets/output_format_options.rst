Output Options
--------------

--json FILE             Write scan output as compact JSON to FILE.

--json-pp FILE          Write scan output as pretty-printed JSON to
                        FILE.

--json-lines FILE       Write scan output as JSON Lines to FILE.

--csv FILE              Write scan output as CSV to FILE.

--html FILE             Write scan output as HTML to FILE.

--custom-output FILE    Write scan output to FILE formatted with the
                        custom Jinja template file.

--custom-template FILE  Use this Jinja template FILE as a custom
                        template.

.. note::

    ``--custom-template FILE`` and ``--custom-output FILE`` are used in a single command. As in the
    command to generate results in a custom format will be:
    ``./scancode -clpeui --custom-output sample.json --custom-template sample.html samples``
    (format specified in sample.html using jinja template, and output file is sample.json)

--spdx-rdf FILE         Write scan output as SPDX RDF to FILE.

--spdx-tv FILE          Write scan output as SPDX Tag/Value to FILE.

--html-app FILE         Write scan output as a mini HTML
                        application to FILE.

.. WARNING::

     The ``--html-app`` output is DEPRECATED, use Scancode Workbench instead.
