`Core` Options
==============

.. include::  /scancode-toolkit/rst_snippets/basic_options.rst

.. _cli_core:

.. include::  /scancode-toolkit/rst_snippets/core_options.rst

``--generated`` Options
-----------------------

The ``--generated`` option classifies automatically generated code files with a flag.

An example of using ``--generated`` in a scan::

    ./scancode -clpieu --json-pp sample_generated.json samples --generated

In the results, for each file the following attribute is added with it's corresponding True/False
value ::

    "is_generated": true

For the samples folder, the following files have a true value for their is_generated attribute::

    "samples/zlib/dotzlib/LICENSE_1_0.txt"
    "samples/JGroups/licenses/apache-2.0.txt"

..
    [ToDo] Research and Write Better

``--max-email`` Options
-----------------------

If in the files that are scanned, in individual files, there are a lot of emails (i.e lists) which
are unneccesary and clutter the scan results, ``--max-email`` option can be used to report emails
only up to a limit in individual files.

Some important INTEGER values of the ``--max-email INTEGER`` option:

- 0  - No limit, inlcude all emails.
- 50 - Default.

An example usage::

    ./scancode -clieu --json-pp sample.json samples --max-email 5

This only reports 5 email adresses per file and ignores the rest.

``--max-url`` Options
---------------------

If in the files that are scanned, in individual files, there are a lot of links to other websites
(i.e url lists) which are unneccesary and clutter the scan results, ``--max-url`` option can be
used to report urls only up to a limit in individual files.

Some important INTEGER values of the ``--max-url INTEGER`` option:

- 0  - No limit, inlcude all urls.
- 50 - Default.

An example usage::

    ./scancode -clieu --json-pp sample.json samples --max-url 10

This only reports 10 urls per file and ignores the rest.

``--license-score`` Options
---------------------------

..
    [ToDo] Research and Write License Matching Better

License matching strictness, i.e. how closely matched licenses are detected in a scan, can be
modified by using this ``--license-score`` option.

Some important INTEGER values of the ``--license-score INTEGER`` option:

- **0**     - Default and Lowest Value, All matches are reported.
- **100**    - Highest Value, Only licences with a much better match are reported

Here, a bigger number means a better match, i.e. setting a higher license score translates to a
higher threshold for matching licenses (with equal or less number of license matches).

An example usage::

    ./scancode -clieu --json-pp sample.json samples --license-score 70

Here's the license results on setting the integer value to 100, vs the default value 0. This is
visualized using ScanCode workbench in the License Info Dashboard.

.. list-table:: License scan results of Samples Directory.

    * - .. figure:: data/core_lic_score_0.png

           License Score 0 (Default).

      - .. figure:: data/core_lic_score_100.png

           License Score 100.

``--license-text`` Options
--------------------------

The ``--license-text`` option includes in the scan result, the matched text for the detected
license, under the attribute "matched text".

An example matched text included in the results is as follows::

    "matched_text":
     "  This software is provided 'as-is', without any express or implied
     warranty.  In no event will the authors be held liable for any damages
     arising from the use of this software.
     Permission is granted to anyone to use this software for any purpose,
     including commercial applications, and to alter it and redistribute it
     freely, subject to the following restrictions:
     1. The origin of this software must not be misrepresented; you must not
     claim that you wrote the original software. If you use this software
     in a product, an acknowledgment in the product documentation would be
     appreciated but is not required.
     2. Altered source versions must be plainly marked as such, and must not be
     misrepresented as being the original software.
     3. This notice may not be removed or altered from any source distribution.

     Jean-loup Gailly        Mark Adler
     jloup@gzip.org          madler@alumni.caltech.edu"

The file in which this license was detected: ``samples/arch/zlib.tar.gz-extract/zlib-1.2.8/zlib.h``
License name: "ZLIB License"

``--license-url-template`` Options
----------------------------------

The ``--license-url-template`` option sets the template URL used for the license reference URLs.

The default template URL is : [https://enterprise.dejacode.com/urn/urn:dje:license:{}]
In a template URL, curly braces ({}) are replaced by the license key.

So, by default the license referance URL points to the dejacode page for that license.

A scan example using the ``--license-url-template TEXT`` option ::

    ./scancode -clpieu --json-pp sample_lic_url_template.json samples --license-url-template https://opensource.org/licenses/{}

In a normal scan, referance url for "ZLIB License" is as follows::

    "reference_url": "https://enterprise.dejacode.com/urn/urn:dje:license:zlib",

After using ``--license-url-template https://opensource.org/licenses/{}`` the referance URL changes to::

    "reference_url": "https://opensource.org/licenses/zlib",

The referance URL changes for all detected licenses in the scan, across the scan result file.

``--license-text-diagnostics`` Options
--------------------------------------

In the matched license text, include diagnostic highlights surrounding with square brackets []
words that are not matched.

Running a scan on the samples directory with ``--license-text --license-text-diagnostics`` options,
causes the following differance in scan result of the file
``samples/JGroups/licenses/bouncycastle.txt``.

Without Diagnostics::

    "matched_text":
    "License Copyright (c) 2000 - 2006 The Legion Of The Bouncy Castle
    (http://www.bouncycastle.org) Permission is hereby granted, free of charge, to any person
    obtaining a copy of this software and associated documentation files (the \"Software\"),
    to deal in the Software without restriction

With Diagnostics on::

    "matched_text":
    "License [Copyright] ([c]) [2000] - [2006] [The] [Legion] [Of] [The] [Bouncy] [Castle]
    ([http]://[www].[bouncycastle].[org]) Permission is hereby granted, free of charge, to any person
    obtaining a copy of this software and associated documentation files (the \"Software\"),
    to deal in the Software without restriction,

.. include:: /scancode-toolkit/rst_snippets/note_snippets/basic_license.rst

Comparing Progress Message Options
----------------------------------

**Default Progress Message**::

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

**Progress Message with ``--verbose``**::

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

So, with ``--verbose`` enables, progress messages for individual files are shown.

**With the ``--quiet`` option enabled**, nothing is printed on the Command Line.

``--timeout`` Option
--------------------

This option sets scan timeout for **each file** (and not the entire scan). If some file scan
exceeds the specified timeout, that file isn't scanned anymore and the next file scanning
starts. This helps avoiding very large/long files, and saves time.

Also the number(timeout in seconds) to be followed by this option can be a
floating point number, i.e. 1.5467.

``--reindex-licenses`` Option
-----------------------------

Scancode maintains a license index to search for and detect licenses. When Scancode is configured
for the first time, a license index is built and used in every scan thereafter.

This ``--reindex-licenses`` option rebuilds the license index. Running a scan with this option
displays the following message to the terminal in addition to what it normally shows::

    Checking and rebuilding the license index...

..
    [ToDo] Research and Write Better

``--from-json`` Option
----------------------

If you want to input scan results from a .json file, and run a scan again on those same files, with
some other options/output format, you can do so using the ``--from-json`` option.

An example scan command using ``--from-json``::

    ./scancode --from-json sample.json --json-pp sample_2.json --classify

This inputs the scan results from ``sample.json``, runs the post-scan plugin ``--classify`` and
outputs the results for this scan to ``sample_2.json``.

``--max-in-memory`` Option
----------------------------------

During a scan, as idividual files are scanned, the scan details for those files are kept on memory
till the scan is completed. Then after the scan is completed, they are written in the specified
output format.

Now, if the scan involves a very large number of files, they might not fit in the memory during the
scan. For this reason, disk-caching can be used for some/all of the files.

Some important INTEGER values of the ``--max-in-memory INTEGER`` option:

- **0**     - Unlimited Memory, store all the file/directory scan results on memory
- **-1**    - Use only Disk-Caching, store all the file/directory scan results on disk
- **10000** - Default, store 10,000 file/directory scan results on memory and the rest on disk

An example usage::

    ./scancode -clieu --json-pp sample.json samples --max-in-memory -1
