How to take advantage of license policy support
===============================================

.. attention::
    Learn about `license policy plugin <https://github.com/nexB/scancode-toolkit/wiki/License-Policy-Plugin>`__ before reading the following article

    This plugin allows the user to apply policy details to a scancode scan, depending on which licenses are detected in a particular file. If a license specified in the Policy file is detected by scancode, this plugin will apply that policy information to the Resource as a new attribute:

Load a License Policy file and apply it to the scan at the Resource level.

.. code-block:: bash

    ./scancode --license --license-policy policy-file.yml samples/zlib --html scancode_result.html
