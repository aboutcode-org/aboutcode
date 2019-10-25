.. _deltacode_scoring:

Deltacode Scoring
=================

Delta Objects
-------------

A File-Level Comparison of Two Codebases
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

A Delta object represents the file-level comparison (i.e., the "delta") of two codebases, typically
two versions of the same codebase, using ScanCode-generated ``JSON`` output files as input for the
comparison process.

Based on how the user constructs the command-line input, DeltaCode's naming convention treats one
codebase as the "new" codebase and the other as the "old" codebase:::

    deltacode -n [path to the 'new' codebase] -o [path to the 'old' codebase] [...]

.. _basic_scoring:

Basic Scoring
^^^^^^^^^^^^^

A DeltaCode codebase comparison produces a collection of file-level Delta objects. Depending on
the nature of the file-level change between the two codebases, each Delta object is characterized
as belonging to one of the categories listed below. Each category has an associated score intended
to convey its potential importance -- from a license/copyright compliance perspective -- to a
user's analysis of the changes between the ``new`` and ``old`` codebases.

In descending order of importance, the categories are:

#. ``added``: A file has been added to the ``new`` codebase.
#. ``modified``: The file is contained in both the ``new`` and ``old`` codebase and has been
   modified (as reflected, among other things, by a change in the file's ``sha1`` attribute).
#. ``moved``: The file is contained in both the ``new`` and ``old`` codebase and has been moved but
   not modified.
#. ``removed``: A file has been removed from the ``old`` codebase.
#. ``unmodified``: The file is contained in both the ``new`` and ``old`` codebase and has not been
   modified or moved.

.. note::

    Files are determined to be Moved by looping thru the `added` and `removed` Delta objects and
    checking their sha1 values.

The score of a Delta object characterized as ``added`` or ``modified`` may be increased based on
the detection of license- and/or copyright-related changes. See
:ref:`license_additions_and_changes` and :ref:`copyright_holder_additions_and_changes` below.

Delta Object Fields and Values
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Each Delta object includes the following fields and values:

- ``factors``: One or more strings representing the factors that characterize the file-level
  comparison and resulting score, e.g., in JSON format:::

      "factors": [
        "added",
        "license info added",
        "copyright info added"
      ],

- ``score``: A number representing the magnitude/importance of the file-level change -- the
  higher the score, the greater the change.
- ``new``: The ScanCode-based file attributes (``path``, ``licenses``, ``copyrights`` etc.)
  for the file in the codebase designated by the user as ``new``.
- ``old``: The ScanCode-based file attributes for the file in the codebase designated by the user
  as ``old``.

Note that an ``added`` Delta object will have a ``new`` file but no ``old`` file, while a
``removed`` Delta object will have an ``old`` file but not a ``new`` file. In each case, the
``new`` and ``old`` keys will be present but the value for the missing file will be ``null``.

.. _license_additions_and_changes:

License Additions and Changes
-----------------------------

Certain file-level changes involving the license-related information in a Delta object will
increase the object's score.

- An ``added`` Delta object's score will be increased:

    * If the ``new`` file contains one or more licenses (``factors`` will include
      ``license info added``).
    * If the the ``new`` file contains any of the following Commercial/Copyleft license
      categories (``factors`` will include, e.g., ``copyleft`` added):

        - 'Commercial'
        - 'Copyleft'
        - 'Copyleft Limited'
        - 'Free Restricted'
        - 'Patent License'
        - 'Proprietary Free'

- A ``modified`` Delta object's score will be increased:

    * If the ``old`` file has at least one license and the ``new`` file has no licenses
      (``factors`` will include ``license info removed``).
    * If the ``old`` file has no licenses and the ``new`` file has at least one license
      (``factors`` will include ``license info added``).
    * If both the ``old`` file and ``new`` file have at least one license and the license
      keys are not identical (e.g., the ``old`` file includes an ``mit`` license and an
      ``apache-2.0`` license and the ``new`` file includes only an ``mit`` license)
      (``factors`` will include ``license`` change).
    * If any of the Commercial/Copyleft license categories listed above are found in the
      ``new`` file but not in the ``old`` file (``factors`` will include, e.g.,
      ``proprietary free added``).


.. _copyright_holder_additions_and_changes:

Copyright Holder Additions and Changes
--------------------------------------

- An ``added`` Delta object's score will be increased if the ``new`` file contains one or more
  copyright ``holders`` (``factors`` will include ``copyright info added``).

- A ``modified`` Delta object's score will be increased:

    * If the ``old`` file has at least one copyright ``holder`` and the ``new`` file has no
      copyright holders (``factors`` will include ``copyright info removed``).
    * If the ``old`` file has no copyright ``holders`` and the ``new`` file has at least one
      (``actors`` will include ``copyright info added``).
    * If both the ``old`` file and ``new`` file have at least one copyright ``holder`` and
      the ``holders`` are not identical (``factors`` will include ``copyright`` change).

Moved, Removed and Unmodified
-----------------------------

As noted above in Basic Scoring :ref:`basic_scoring`, from a license/copyright compliance
perspective, the three least significant Delta categories are ``moved``, ``removed`` and
``unmodified``.

In the current version of DeltaCode, each of these three categories is assigned a score of 0, with
no options to increase that score depending on the content of the Delta object.

However, it is possible that both ``moved`` and ``removed`` will be assigned some non-zero score in
a future version. In particular, ``removed`` could be significant from a compliance viewpoint
where, for example, the removal of a file results in the removal of a Commercial/Copyleft license
obligation.
