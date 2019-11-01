.. _json_to_csv:

JSON to CSV Conversion
======================

The default output format for a DeltaCode codebase comparison is JSON.  If the ``-j`` or
``--json-file`` option is included in the ``deltacode`` command, the output will be written to a
``.json`` file at the user-designated location.  For example::

   deltacode -n [path to the 'new' codebase] -o [path to the 'old' codebase] -j [path to the JSON output file]

We have also created an easy-to-use script for users who want to convert their JSON output to CSV
format.  Located at ``etc/scripts/json2csv.py``\ , the conversion can be run with this command
template::

    python etc/scripts/json2csv.py [path to the JSON input file] [path to the CSV output file]
