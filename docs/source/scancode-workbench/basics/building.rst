.. _workbench_requirements:

Building Requirements
=====================

Linux
-----

- Python 2.7
- `Node.js version <https://nodejs.org/en/download/package-manager/>`_ 6.x or later
- npm 3.10.x or later but <= 5.2.0 (run ``npm install npm@5.2.0 -g``)

MacOS
-----

- Python 2.7
- `Node.js <https://nodejs.org/en/>`_ >=6.x or later but <=8.9.4
- npm 3.10.x or later but <= 5.2.0 (run ``npm install npm@5.2.0 -g``)
- Command Line Tools for `Xcode <https://developer.apple.com/xcode/downloads/>`_
  (run ``xcode-select --install to install``)

Windows
-------

- `Node.js <https://nodejs.org/en/>`_ 6.x or later
- npm 3.10.x or later but <= 5.2.0 (``run npm install npm@5.2.0 -g``)
- Python v2.7.x

  * Make sure your Python path is set. To verify, open a command prompt and type
    ``python --version``. Then, the version of python will be displayed.

- Visual C++ Build Environment:

  * Either:

  - Option 1: Install `Visual C++ Build Tools 2015 <https://www.microsoft.com/en-in/download/details.aspx?id=48159>`_
    (or modify an existing installation) and select Common Tools for Visual C++ during setup.
    This also works with the free Community and Express for Desktop editions.
  - Option 2: `Visual Studio 2015 <https://visualstudio.microsoft.com/vs/older-downloads/>`_ (Community Edition or better)

  * Note: Windows 7 requires `.NET Framework 4.5.1 <http://www.microsoft.com/en-us/download/details.aspx?id=40773>`_
  * Launch cmd, ``npm config set msvs_version 2015``
