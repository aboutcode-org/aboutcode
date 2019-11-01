Document Maintenance
====================

Document Software Setup
-----------------------

AboutCode documentation is built using Sphinx.
See http://www.sphinx-doc.org/en/master/index.html

AboutCode documentation is distributed using "Read the Docs".
See https://readthedocs.org/

Individual document files are in reStructuredText format.
See http://www.sphinx-doc.org/en/master/usage/restructuredtext/basics.html

You create, build, and preview AboutCode documentation on your local machine.

You commit your updates to the AboutCode repository on GitHub, which triggers an automatic rebuild of https://aboutcode.readthedocs.io/en/latest/index.html


Clone AboutCode
---------------

To get started, create or identify a working directory on your local machine.

Open that directory and execute the following command in a terminal session::

    git clone https://github.com/nexB/aboutcode.git

That will create an /aboutcode directory in your working directory.
Now you can install the dependencies in a virtualenv::

    cd aboutcode
    virtualenv -p /usr/bin/python3.6 docs-venv
    source bin/activate

Now you can install Sphinx and the format theme used by readthedocs::

    pip install Sphinx sphinx_rtd_theme doc8

Now you can build the HTML documents locally::

    cd docs
    make html

Assuming that your Sphinx installation was successful, Sphinx should build a local instance of the
documentation .html files::

    open build/html/index.html

In case this command did not work, for example on Ubuntu 18.04 you may get a message like “Couldn’t
get a file descriptor referring to the console”, try: ::

    see build/html/index.html

You now have a local build of the AboutCode documents.

Improve AboutCode Documents
---------------------------

Before you begin creating and modifying AboutCode documents, be sure that you understand the basics
of reStructuredText as explained at
http://www.sphinx-doc.org/en/master/usage/restructuredtext/basics.html

Ensure that you have the latest AboutCode files::

    git pull
    git status

Use your favorite text editor to create and modify .rst files to make your documentation
improvements.

Review your work::

    cd docs
    make html
    open build/html/index.html

AboutCode uses Travis-CI to test build status and check links, so run this script at your local
system before creating a Pull Request.

::

    cd docs
    ./scripts/sphinx_build_link_check.sh

Share AboutCode Document Improvements
-------------------------------------

Follow standard git procedures to upload your new and modified files. The following commands are
examples::

    git status
    git add source/index.rst
    git add source/how-to-scan.rst
    git status
    git commit -m "New how-to document that explains how to scan"
    git status
    git push
    git status

The AboutCode webhook with ReadTheDocs should rebuild the documentation. You can review your
results online.

Documentation Style Guides
--------------------------

The ``scancode-toolkit`` documentation is compliant to our doc style standards, enforced using
``doc8``. For more details refer :ref:`contrib_doc_dev`.
