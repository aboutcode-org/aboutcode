.. _python-inspector-project:

python-inspector
================

`python-inspector <https://github.com/aboutcode-org/python-inspector>`_:
is a collection of utilities to:

- resolve PyPI packages dependencies

- parse various requirements.txt files and setup.py files as input
  for resolving dependencies.

- parse various manifests and packages files such as
  Pipfile, pyproject.toml, poetry.lock and setup.cfg and legacy and
  current metadata file formats for eggs, wheels and sdist. These
  have not been wired with the command line yet.

- query PyPI JSON and simple APIs for package information

It grew out of ScanCode-Toolkit to find and analyze PyPI archives and
installed Python packages and their files.

The goal of python-inspector is to be a comprehensive library
that can handle every style of Python package layouts, manifests and lockfiles.

 - Get the code at: https://github.com/aboutcode-org/python-inspector


Example Usage 
--------------

You can use python-inspector to resolve dependencies for a package.

.. code-block:: bash  
   
   pip install python-inspector
   python-inspector analyze requests


This command will: 
  - Download the requests package from PyPI
  - Inspect the package 
  - Display the dependencies
  - Metadata about the package

This will resolve the dependencies for the requests package and print the results to the console.

.. code-block:: json

   {
    "dependencies": [
        {
            "name": "requests",
            "version": "2.28.1"
        }
    ]
}