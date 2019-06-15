Recommended scancode-toolkit options to discover licenses
=========================================================

.. code-block:: bash

    ./scancode [OPTIONS] <input> <OUTPUT FORMAT OPTION(s)>


How to generate licenses
------------------------

.. code-block:: bash

    ./scancode --license samples/zlib --html scancode_result.html

Include diagnostic information in license scan results.
-------------------------------------------------------

.. code-block:: bash

    ./scancode --license --license-diag samples/zlib --html scancode_result.html

How to set license score threshold
----------------------------------

Do not return license matches with a score lower than this score. A number between 0 and 100.  [default: 0]

.. code-block:: bash

    ./scancode --license --license-score INTEGER --license-diag samples/zlib --html scancode_result.html

How to include the detected licenses matched text.
--------------------------------------------------

.. code-block:: bash

    ./scancode --license --license-text samples/zlib --html scancode_result.html

How to set template URL for license references
----------------------------------------------

Set the template URL used for the license reference URLs. Curly braces ({}) are replaced by the license key.  [default: https://enterprise.dejacode.com/urn/urn:dje:license:{}]

.. code-block:: bash

    ./scancode --license --license-url-template https://enterprise.dejacode.com/urn/urn:dje:license:zlib samples/zlib --html scancode_result.html


