How to set what will be detected in Scan
========================================

ScanCode allows you to scan a codebase for license, copyright and other interesting information that can be discovered in files. The following options are available for detection when using ScanCode Toolkit:

.. list-table::
   :header-rows: 1

   * - Syntax Option
     - Clue/Information
   * - -c, --copyright
     - Scan for copyrights. [default]
   * - -l, --license
     - Scan for licenses. [default]
   * - -i, --info
     - Scan for file information. [default]
   * - -p, --package
     - Scan for packages. [default]
   * - -e, --email
     - Scan for emails.
   * - -u, --url
     - Scan for urls.


The following examples will use the ``samples`` directory that is provided with the `ScanCode Toolkit code <https://github.com/nexB/scancode-toolkit/tree/master/samples>`_. All examples will be saved in the html-app format, which is a dynamic, interactive html page. The other formats options are a JSON file and a static html file. See :ref:`how_to_run_a_scan` for more information. 

Scan for all clues:
-------------------

To scan for licenses, copyrights, urls, emails, package information, and file information

::

   ./scancode -clip -e -u --format html-app samples samples.html



Scan for license and copyright clues:
-------------------------------------

::

   ./scancode -cl --format html-app samples samples.html


Scan for emails and URLs:
-------------------------

::

   ./scancode -e -u --format html-app samples samples.html


Scan for package information:
-----------------------------

::

   ./scancode -p --format html-app samples samples.html


Scan for file information:
--------------------------

::

   ./scancode -i --format html-app samples samples.html


To see more example scans:
--------------------------

::

   ./scancode --examples
