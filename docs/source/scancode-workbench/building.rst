Building Requirements
=====================

Linux
-----

- Python 2.7
- Node.js 6.x or later
- npm 3.10.x or later but <= 5.2.0 (run ``npm install npm@5.2.0 -g``)

MacOS
-----

- Python 2.7
- Node.js >=6.x or later but <=8.9.4
- npm 3.10.x or later but <= 5.2.0 (run ``npm install npm@5.2.0 -g``)
- Command Line Tools for Xcode (run ``xcode-select --install to install``)

Windows
-------

- Node.js 6.x or later
- npm 3.10.x or later but <= 5.2.0 (``run npm install npm@5.2.0 -g``)
- Python v2.7.x

  * Make sure your Python path is set. To verify, open a command prompt and type ``python --version``. Then, the version of python will be displayed.
  
- Visual C++ Build Environment:

  * Either:

	- Option 1: Install Visual C++ Build Tools 2015 (or modify an existing installation) and select Common Tools for Visual C++ during setup. This also works with the free Community and Express for Desktop editions.
	- Option 2: Install Visual Studio 2015 (Community Edition or better)

  * Note: Windows 7 requires .NET Framework 4.5.1
  * Launch cmd, ``npm config set msvs_version 2015``