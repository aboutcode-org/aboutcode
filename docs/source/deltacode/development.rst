Development
===========

See CONTRIBUTING.rst for details:
https://github.com/nexB/deltacode/blob/develop/CONTRIBUTING.rst

Code layout and conventions
---------------------------

Source code is in ``src/``. Tests are in ``tests/``.

Each test script is named ``test_XXXX`` and while we love to use ``py.test`` as a test runner,
most tests have no dependencies on ``py.test``\ , only on the ``unittest`` module (with the
exception of some command line tests that depend on pytest monkeypatching capabilities.

When source or tests need data files, we store these in a ``data`` subdirectory.

We use PEP8 conventions with a relaxed line length that can be up to 90'ish characters long when
needed to keep the code clear and readable.

We store pre-built **bundled** native binaries in ``bin/`` sub-directories of each ``src/``
packages. These binaries are organized by OS and architecture. This ensure that DeltaCode works
out of the box either using a checkout or a download, without needing a compiler and toolchain to
be installed.

We store **bundled** thirdparty components and libraries in the ``thirdparty`` directory. Python
libraries are stored as wheels, eventually pre-built if the corresponding wheel is not available
in the Pypi repository.

Some of these components may be advanced builds with bug fixes or advanced patches.

We write tests, a lot of tests, thousands of tests. Several tests are data-driven and use data
files as test input and sometimes data files as test expectation (in this case using either JSON or
YAML files). The tests should pass on Linux 64 bits, Windows 32 and 64 bits and on MacOSX 10.6.8
and up. We maintain two CI loops with Travis (Linux) at https://travis-ci.org/nexB/deltacode and
Appveyor (Windows) at https://ci.appveyor.com/project/nexB/deltacode

When finding bugs or adding new features, we add tests. See existing test code for examples.

Running tests
^^^^^^^^^^^^^

DeltaCode comes with over 130 unit tests to ensure detection accuracy and stability across Linux,
Windows and macOS OSes: we kinda love tests, do we?

We use pytest to run the tests: call the ``py.test`` script to run the whole test suite. This is
installed by ``pytest`` which is bundled with a DeltaCode checkout and installed when you run
``./configure``\ ).

If you are running from a fresh git clone and you run ``./configure`` and then
``source bin/activate`` the ``py.test`` command will be available in your path.

Alternatively if you have already configured but are not in an activated "virtualenv" the
``py.test`` command is available under ``<root of your checkout>/bin/py.test``

(Note: paths here are for POSIX, but mostly the same applies to Windows)

If you have a multiprocessor machine you might want to run the tests in parallel (and faster)
For instance: ``py.test -n4`` runs the tests on 4 CPUs.
We typically run the tests in verbose mode with ``py.test -vvs -n4``

See also https://docs.pytest.org for details or use the ``py.test -h`` command to show the many
other options available.

One useful option is to run a select subset of the test functions matching a pattern with the
``-k`` option for instance: ``py.test -vvs -k tcpdump`` would only run test functions that contain
the string "tcpdump" in their name or their class name or module name .

Another useful option after a test run with some failures is to re-run only the failed tests with
the ``--lf`` option for instance: ``py.test -vvs --lf`` would only run only test functions that
failed in the previous run.

pip requirements and the configure script
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

DeltaCode use the ``configure`` and ``configure.bat`` (and ``etc/configure.py`` behind the scenes)
scripts to install a `virtualenv <https://virtualenv.pypa.io/en/stable/>`_\ , install required
packaged dependencies `as pip <https://github.com/pypa/pip>`_ requirements and more configure tasks
such that DeltaCode can be installed in a self-contained way with **no network connectivity**
required.

DeltaCode requirements and third-party Python libraries
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

In a somewhat unconventional way, all the required libraries are bundled aka. copied in the repo
itself in the thirdparty/ directory. If DeltaCode were only a library it would not make sense. But
its is first an application and having a well defined frozen set of dependent packages is important
for an app.

The benefit of this approach (combined with the ``configure`` script) means that a mere checkout of
the repository contains **everything** needed to run DeltaCode except for a Python interpreter.

Using DeltaCode as a Python library
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

(Coming Soon) DeltaCode can be used alright as a Python library and is available as as a Python
wheel in Pypi and installed with ``pip install deltacode``.
