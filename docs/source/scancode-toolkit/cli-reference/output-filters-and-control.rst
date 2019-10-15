.. _cli_output_control:

Controlling Scancode Output and Filters
=======================================

.. include::  /scancode-toolkit/rst_snippets/output_control_options.rst

``--strip-root`` Vs. ``--full-root``
------------------------------------

For a default scan of the "samples" folder, this a comparision between the default, ``strip-root``
and ``full-root`` options.

These two changes only the "path" attribute of the file information. For this comparision we
compare the "path" attributes of the file ``LICENSE`` inside ``JGroups`` directory. The path
is:

The default ::

    "path": "samples/JGroups/LICENSE",

For the ``--full-root`` option, the path relative to the Root of your local filesystem.

::

    "path": "/home/ayansm/Desktop/GSoD/scancode-toolkit-versions/scancode-toolkit-2.2.1/samples/JGroups/LICENSE"


For the ``--strip-root`` option, the root directory (here ``samples``) is removed from path :

::

    "path": "JGroups/LICENSE"

.. include::  /scancode-toolkit/rst_snippets/note_snippets/control_strip_full_root.rst

``--ignore-author <pattern>`` Option
------------------------------------

In a normal scan, all files inside the directory specified as an input argument is scanned and
subsequently included in the scan report. But if you want to run the scan on only some selective
files, with some specific **common author** then ``--ignore-author`` option can be used to do
the same.

A sample usage::

    ./scancode --ignore-author <pattern> samples samples.json

More information on :ref:`glob_pattern_matching`.

.. include::  /scancode-toolkit/rst_snippets/note_snippets/control_ignore_author_copyright.rst

``--ignore-copyright-holder <pattern>`` Option
----------------------------------------------

In a normal scan, all files inside the directory specified as an input argument is scanned and
subsequently included in the scan report. But if you want to run the scan on only some selective
files, with some specific **common copyright holder** then ``--ignore-copyright-holder`` option can
be used to do the same.

A sample usage::

    ./scancode --ignore-copyright-holder <pattern> samples samples.json

More information on :ref:`glob_pattern_matching`.

``--only-findings`` Plugin
--------------------------

This option removes from the scan results, the files where nothing significant has been detected,
like files which doesn't contain any licences, copyrights, emails or urls(if requested in the
scan options), and isn't a package.

.. note::

    This also changes in the result displayed, the number of files scanned.

For example, scanning the ``sample`` files (distributed by default with scancode-toolkit) without
this option, displays in it's report information of 43 files. But after enabling this option, the
result shows information for only 31 files.
