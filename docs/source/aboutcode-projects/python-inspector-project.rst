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
