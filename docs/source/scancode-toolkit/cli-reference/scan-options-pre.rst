.. _cli_pre_scan:

Pre-Scan Options
================

.. include::  /scancode-toolkit/rst_snippets/pre_scan_options.rst

``--ignore`` Option
-------------------

In a scan, all files inside the directory specified as an input argument is scanned. But if there
are some files which you don't want to scan, the ``--ignore`` option can be used to do the same.

A sample usage::

    ./scancode --ignore *.java samples samples.json

Here, Scancode ignores files ending with `.java`, and continues with other files as usual.

Glob pattern matching is useful for excluding a group of files, by using patterns in their names.
For more information on Glob pattern matching refer these resources:

    - `Linux Manual <http://man7.org/linux/man-pages/man7/glob.7.html>`_
    - `Wildcard Match Documentation <https://facelessuser.github.io/wcmatch/glob/>`_.
