AboutCode Toolkit
=================

Build and tests status
----------------------

+-------+-----------------+--------------+
|Branch | **Linux/macOS** | **Windows**  |
+=======+=================+==============+
|Master | |master-posix|  | |master-win| |
+-------+-----------------+--------------+
|Develop| |devel-posix|   | |devel-win|  |
+-------+-----------------+--------------+


The AboutCode Toolkit and ABOUT files provide a simple way to document the
origin, license, usage and other important or interesting information about
third-party software components that you use in your project.

You start by storing ABOUT files (a small YAML formatted text file with field/value pairs)
side-by-side with each of the third-party software components you use.
Each ABOUT file documents origin and license for one software.
For more information on the ABOUT file format, visit http://www.dejacode.org
There are many examples of ABOUT files (valid or invalid) in the testdata/
directory of the whole repository.

The current version of the AboutCode Toolkit can read these ABOUT files so that you
can collect and validate the inventory of third-party components that you use.

In addition, this tool is able to generate attribution notices and
identify redistributable source code used in your project to help you comply
with open source licenses conditions.

This version of the AboutCode Toolkit follows the ABOUT specification version 3.0 at:
https://github.com/nexB/aboutcode-toolkit/blob/develop/SPECIFICATION.rst


REQUIREMENTS
------------
The AboutCode Toolkit is tested with Python 2.7 and 3.6 on Linux, Mac and Windows.
You will need to install a Python interpreter if you do not have one already
installed.

On Linux and Mac, Python is typically pre-installed. To verify which
version may be pre-installed, open a terminal and type:

    python --version

On Windows or Mac, you can download the latest Python here:
    https://www.python.org/downloads/

Download the .msi installer for Windows or the .dmg archive for Mac.
Open and run the installer using all the default options.


INSTALLATION
------------
Checkout or download and extract the AboutCode Toolkit from:
    https://github.com/nexB/aboutcode-toolkit/

To install all the needed dependencies in a virtualenv, run (on posix):
    source configure
or on windows:
    configure


REFERENCE
---------
See https://github.com/nexB/aboutcode-toolkit/blob/master/REFERENCE.rst for reference
on aboutcode-toolkit usage.


TESTS and DEVELOPMENT
---------------------
To install all the needed development dependencies, run (on posix):
    source configure etc/conf/dev
or on windows:
    configure etc/conf/dev

To verify that everything works fine you can run the test suite with:
    py.test


HELP and SUPPORT
----------------
If you have a question or find a bug, enter a ticket at:

    https://github.com/nexB/aboutcode-toolkit

For issues, you can use:

    https://github.com/nexB/aboutcode-toolkit/issues


SOURCE CODE
-----------
The AboutCode Toolkit is available through GitHub. For the latest version visit:
    https://github.com/nexB/aboutcode-toolkit


HACKING
-------
We accept pull requests provided under the same license as this tool.
You agree to the http://developercertificate.org/


LICENSE
-------
The AboutCode Toolkit is released under the Apache 2.0 license.
See (of course) the about.ABOUT file for details.


.. |master-posix| image:: https://api.travis-ci.org/nexB/aboutcode-toolkit.png?branch=master
    :target: https://travis-ci.org/nexB/aboutcode-toolkit
    :alt: Linux Master branch tests status
.. |devel-posix| image:: https://api.travis-ci.org/nexB/aboutcode-toolkit.png?branch=develop
    :target: https://travis-ci.org/nexB/aboutcode-toolkit
    :alt: Linux Develop branch tests status

.. |master-win| image:: https://ci.appveyor.com/api/projects/status/uwj2gh8i9ga1mqwn/branch/master?png=true
    :target: https://ci.appveyor.com/project/nexB/aboutcode-toolkit
    :alt: Windows Master branch tests status
.. |devel-win| image:: https://ci.appveyor.com/api/projects/status/uwj2gh8i9ga1mqwn/branch/develop?png=true
    :target: https://ci.appveyor.com/project/nexB/aboutcode-toolkit
    :alt: Windows Develop branch tests status
