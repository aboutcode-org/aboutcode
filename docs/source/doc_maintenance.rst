Document Maintenance
====================

Sphinx
------

Install Sphinx on your local machine.
See http://www.sphinx-doc.org/en/master/usage/installation.html


Clone AboutCode
---------------

Create or identify a working directory on your local machine.

Open that directory and execute the following command in a terminal session::

    git clone https://github.com/nexB/aboutcode.git

That will create an /aboutcode directory in your working directory.
Now you can install the dependencies in a virtualenv::

    cd aboutcode
    python3.6 -m venv .
    source bin/activate
    pip install Sphinx sphinx_rtd_theme

Now you can build the HTML documents locally::

    cd docs
    make html

Assuming that your Sphinx installation was successful, Sphinx should build a local instance of the documentaiton .html files::

    open build/html/index.html

You now have a local build of the AboutCode documents.

Improve AboutCode Documents
---------------------------

Before you begin creating and modifying AboutCode documents, be sure that you understand the basics of reStructuredText as explained at http://www.sphinx-doc.org/en/master/usage/restructuredtext/basics.html

Ensure that you have the latest AboutCode files::

    git pull
    git status

Use your favorite text editor to create and modify .rst files to make your documentation improvements.

Review your work::

    cd docs
    make html
    open build/html/index.html

Share AboutCode Document Improvements
-------------------------------------

Follow standard git procedures to upload your new and modified files. The following commands are examples::

    git status
    git add source/index.rst
    git add source/how-to-scan.rst
    git status
    git commit -m "New how-to document that explains how to scan"
    git status
    git push
    git status

The AboutCode webhook with ReadTheDocs should rebuild the documentation. You can review your results online.
