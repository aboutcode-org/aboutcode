Comprehensive Installation
==========================

DeltaCode requires Python 2.7.x and is tested on Linux, Mac, and Windows. Make sure Python 2.7 is
installed first.

System Requirements
-------------------

- Hardware : DeltaCode will run best with a modern X86 processor and at least 1GB of RAM and 250MB
  of disk.

- Supported operating systems : DeltaCode should run on these OSes:

    #. Linux: on most recent 64-bit Linux distributions (32-bit distros are only partially
       supported),
    #. Mac: on recent Mac OSX (10.6.8 and up),
    #. Windows: on Windows 7 and up (32- or 64-bit) using a 32-bit Python.

Prerequisites
-------------

DeltaCode needs a Python 2.7 interpreter.

- **On Linux**:

    Use your package manager to install ``python2.7``. If Python 2.7 is not available from your
    package manager, you must compile it from sources.

    For instance, visit https://github.com/dejacode/about-code-tool/wiki/BuildingPython27OnCentos6
    for instructions to compile Python from sources on Centos.

- **On Windows**:

    Use the Python 2.7 32-bit (e.g. the Windows x86 MSI installer) for X86 regardless of whether
    you run Windows on 32-bit or 64-bit. **DO NOT USE Python X86_64 installer** even if you run
    64 bit Windows.

    Download Python from this url:
    https://www.python.org/ftp/python/2.7.14/python-2.7.14.msi

    Install Python on the c: drive and use all default installer options.
    See the Windows installation section for more installation details.

- **On Mac**:

    Download and install Python from this url:

    https://www.python.org/ftp/python/2.7.14/python-2.7.14-macosx10.6.pkg

Installation on Linux and Mac
-----------------------------

Download and extract the latest ScanCode release from:
https://github.com/nexB/deltacode/releases/latest

Open a terminal in the extracted directory and run::

    ./deltacode --help

This will configure DeltaCode and display the command line help.

Installation on Windows
-----------------------

Download the latest ScanCode release zip file from:
https://github.com/nexB/deltacode/releases/latest

- In Windows Explorer, select the downloaded DeltaCode zip and right-click.

- In the pop-up menu select 'Extract All...'

- In the pop-up window 'Extract zip folders' use the default options to extract.

- Once the extraction is complete, a new Windows Explorer window will pop-up.

- In this Explorer window, select the new folder that was created and right-click.

- In the pop-up menu select 'Properties'

- In the pop-up window 'Properties', select the Location value. Copy this in clipboard.

- Press the start menu button.

- In the search box type

::

  cmd

- Select 'cmd.exe' listed in the search results.

- A new 'cmd.exe' window pops-up.

- In this window (aka. a command prompt), type this (this is 'cd' followed by a space)

::

 cd

- then right-click in this window and select Paste. This will paste the path where you extracted
  DeltaCode.

- Press Enter.

- This will change the current location of your command prompt to the root directory where
  DeltaCode is installed.

- Then type

::

  deltacode --help

- Press enter. This will configure your DeltaCode installation.

- Several messages are displayed followed by the deltacode command help.

- The installation is complete.

Un-installation
---------------

- Delete the directory in which you extracted DeltaCode.
- Delete any temporary files created in your system temp directory under a deltacode directory.
