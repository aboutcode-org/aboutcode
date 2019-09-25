`Core` Options
==============

.. include::  /scancode-toolkit/rst_snippets/basic_options.rst

.. _cli_core:

.. include::  /scancode-toolkit/rst_snippets/core_options.rst

.. include::  /scancode-toolkit/rst_snippets/doc_help.rst

Comparing Progress Message Options
----------------------------------

Default Progress Message::

    Scanning files for: infos, licenses, copyrights, packages, emails, urls with 1 process(es)...
    Building license detection index...Done.
    Scanning files...
    [####################] 43
    Scanning done.
    Scan statistics: 43 files scanned in 33s.
    Scan options:    infos, licenses, copyrights, packages, emails, urls with 1 process(es).
    Scanning speed:  1.4 files per sec.
    Scanning time:   30s.
    Indexing time:   2s.
    Saving results.

Progress Message with ``--verbose``:

::

    Scanning files for: infos, licenses, copyrights, packages, emails, urls with 1 process(es)...
    Building license detection index...Done.
    Scanning files...
    Scanned: screenshot.png
    Scanned: README
    ...
    Scanned: zlib/dotzlib/ChecksumImpl.cs
    Scanned: zlib/dotzlib/readme.txt
    Scanned: zlib/gcc_gvmat64/gvmat64.S
    Scanned: zlib/ada/zlib.ads
    Scanned: zlib/infback9/infback9.c
    Scanned: zlib/infback9/infback9.h
    Scanned: arch/zlib.tar.gz
    Scanning done.
    Scan statistics: 43 files scanned in 29s.
    Scan options:    infos, licenses, copyrights, packages, emails, urls with 1 process(es).
    Scanning speed:  1.58 files per sec.
    Scanning time:   27s.
    Indexing time:   2s.
    Saving results.

With the ``--quiet`` option enabled, nothing is printed on the Command Line. 

``--timeout`` Option
--------------------

This option sets scan timeout for **each file** (and not the entire scan). If some file scan
exceeds the specified timeout, that file isn't scanned anymore and the next file scanning
starts. This helps avoiding very large/long files, and saves time.

Also the number(timeout in seconds) to be followed by this option can be a
floating point number, i.e. 1.5467. 
