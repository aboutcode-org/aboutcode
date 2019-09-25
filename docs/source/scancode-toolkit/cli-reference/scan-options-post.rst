.. _cli_post_scan:

Post-Scan Options
=================

Post-Scan options activate their respective post-scan plugins which execute the task.

.. include:: /scancode-toolkit/rst_snippets/post_scan_options.rst

``--mark-source`` Plugin
------------------------

The ``mark-source`` option marks the "is_source" attribute of a directory to be "True", if more
than 90% of the files under that directory is source files, i.e. their "is_source" attribute is
"True".

When the following command is executed to scan the ``samples`` directory with this option enabled,

::

    ./scancode -clpieu -f json-pp samples samples.json --mark-source

Then, the following directories are marked as "Source", i.e. their "is_source" attribute is changed
from "false" to "True".

- ``samples/JGroups/src``
- ``samples/zlib/iostream2``
- ``samples/zlib/gcc_gvmat64``
- ``samples/zlib/ada``
- ``samples/zlib/infback9``

``--only-findings`` Plugin
--------------------------

This option removes from the scan results, the files where nothing significant has been detected,
like files which doesn't contain any licences, copyrights, emails or urls(if requested in the
scan options), and isn't a package.

.. note::

    This also changes in the result displayed, the number of files scanned.

For example, scanning the sample files without this option, displays in it's report information
of 43 files. But after enabling this option, the result shows information for only 31 files.
