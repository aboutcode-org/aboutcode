Documentation
=============

This page provides an index of current ScanCode user documentation.

Download
--------

Download the latest release of ScanCode from our `release page <https://github.com/nexB/scancode-toolkit/releases>`_ .

Installation
------------

See https://github.com/nexB/scancode-toolkit/blob/master/README.rst for more.

User Guide
----------

The goal of ScanCode is to help you detect accurately provenance information in a codebase.
The output of the scan is either a JSON file, an HTML app or a plain HTML file. You can visualize the HTML format in a tree view format.
This view contains the following elements:

- Code tree view - On the left side, you are able to navigate the code tree to understand what ScanCode has detected in each file.
- Path - The directory path of the analyzed file.
- Start/End Line - The line number where the Copyright or License has been detected.
- What - The type of detection, either Copyright or a License.
- Info - The name of the detected output.

You can sort any column by clicking on its title. Search is also available in the top right corner for faster access to a specified resource or a type of detected license or copyright.