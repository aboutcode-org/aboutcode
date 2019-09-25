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
