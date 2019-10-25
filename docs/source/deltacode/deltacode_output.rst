Deltacode Output: Format, Fields and Structure
==============================================

::

  Usage: deltacode [OPTIONS]

    Identify the changes that need to be made to the 'old' scan file (-o or --old)
    in order to generate the 'new' scan file (-n or --new).  Write the results to
    a .json file (-j or --json-file) at a user-designated location.  If no file
    option is selected, print the JSON results to the console.

  Options:
    -h, --help                Show this message and exit.
    --version                 Show the version and exit.
    -n, --new PATH            Identify the path to the "new" scan file [required]
    -o, --old PATH            Identify the path to the "old" scan file [required]
    -j, --json-file FILENAME  Identify the path to the .json output file
    -a, --all-delta-types     Include unmodified files as well as all changed
                              files in the .json output.  If not selected, only
                              changed files are included.

Output Formats
--------------

DeltaCode provides two output formats for the results of a DeltaCode codebase comparison: ``JSON``
and ``CSV``.

The default output format is ``JSON``. If the command-line input does not include an output flag
(``-j`` or ``--json-file``) and the path to the output file, the results of the DeltaCode
comparison will be displayed in the console in ``JSON`` format. Alternatively, the results will be
saved to a ``.json`` file if the user includes the ``-j`` or ``--json-file`` flag and the output
file's path, e.g.::

  deltacode -n [path to the 'new' codebase] -o [path to the 'old' codebase] -j [path to the JSON output file]

Once a user has generated a DeltaCode JSON output file, he or she can convert that ``JSON`` output
to ``CSV`` format by running a command with this structure:::

  python etc/scripts/json2csv.py [path to the JSON input file] [path to the CSV output file]

See also :ref:`json_to_csv`.

Overall Structure
-----------------

JSON
^^^^

**Top-Level JSON**

DeltaCode's ``JSON`` output comprises the following six fields/keys and values at the top level:

#. ``deltacode_notice`` -- A string of the terms under which the DeltaCode output is provided.

#. ``deltacode_options`` -- A JSON object containing three key/value pairs:

    * ``--new`` -- A string identifying the path to the ``JSON`` file containing the ScanCode
      output of the codebase the user wants DeltaCode to treat as the 'new' codebase.
    * ``--old`` -- A string identifying the path to the JSON file containing the ScanCode output of
      the codebase the user wants DeltaCode to treat as the 'old' codebase.
    * ``--all-delta-types`` -- A ``true`` or ``false`` value.
        - This value will be true if the command-line input includes the ``-a`` or
          ``--all-delta-types`` flag, in which case the deltas field described below will include
          details for unmodified files as well as all changed files.
        - If the user does not include the ``-a`` or ``--all-delta-types`` flag, the value will be
          false and unmodified files will be omitted from the DeltaCode output.

#. ``deltacode_version`` -- A string representing the version of DeltaCode on which the codebase
   comparison was run.

#. ``deltacode_errors`` -- A list of one or more strings identifying errors (if any) that occurred
   during the codebase-comparison process.

#. ``deltas_count`` -- An integer representing the number of 'Delta' objects -- the file-level
   comparisons of the two codebases (discussed in the next section) -- contained in the DeltaCode
   output's ``deltas`` key/value pair.

    * If the user's command-line input does not include the ``-a`` or ``--all-delta-types`` flag
      (see the discussion above of the ``--all-delta-types`` field/key), the DeltaCode output will
      omit details for unmodified files and consequently the deltas_count field will not include
      unmodified files.

#. ``deltas`` -- A list of 'Delta' objects, each of which represents a file-level comparison (i.e.,
   the "delta") of the 'new' and 'old' codebases. The Delta object is discussed in further detail
   in the next section.

This is the top-level ``JSON`` structure of the key/value pairs described above::

  {
    "deltacode_notice": "",
    "deltacode_options": {
      "--new": "",
      "--old": "",
      "--all-delta-types": false
    },
    "deltacode_version": "",
    "deltacode_errors": [],
    "deltas_count": 0,
    "deltas": [one or more Delta objects]
  }

**The Delta Object**

Each Delta object consists of four key/value pairs:

- ``factors``: A list of one or more strings representing the factors that characterize the
  file-level comparison and are used to calculate the resulting score, e.g. ::

    "factors": [
          "added",
          "license info added",
          "copyright info added"
        ],

The possible values for the factors field are discussed in some detail in DeltaCode Scoring
:ref:`deltacode_scoring`.

- ``score``: An integer representing the magnitude/importance of the file-level change -- the
  higher the ``score``, the greater the change. For further details about the DeltaCode scoring
  system, see DeltaCode Scoring :ref:`deltacode_scoring`.
- ``new``: A 'File' object containing key/value pairs of certain ScanCode-based file attributes
  (``path``, ``licenses``, ``copyrights`` etc.) for the file in the codebase designated by the
  user as ``new``. If the Delta object represents the removal of a file (the ``factors`` value
  would be ``removed``), the value of ``new`` will be ``null``.
- ``old``: A 'File' object containing key/value pairs of certain ScanCode-based file attributes
  for the file in the codebase designated by the user as ``old``. If the Delta object represents
  the addition of a file (the ``factors`` value would be ``added``), the value of ``old`` will be
  ``null``.

The JSON structure of a Delta object looks like this:::

    {
      "factors": [],
      "score": 0,
      "new": {
        "path": "",
        "type": "",
        "name": "",
        "size": 0,
        "sha1": "",
        "original_path": "",
        "licenses": [],
        "copyrights": []
      },
      "old": {
        "path": "",
        "type": "",
        "name": "",
        "size": 0,
        "sha1": "",
        "original_path": "",
        "licenses": [],
        "copyrights": []
      }
    }


**The File Object**

As you saw in the preceding section, the File object has the following JSON structure:::

      {
        "path": "",
        "type": "",
        "name": "",
        "size": 0,
        "sha1": "",
        "original_path": "",
        "licenses": [],
        "copyrights": []
      }

A File object consists of eight key/value pairs:

- ``path``: -- A string identifying the path to the file in question.
  In processing the 'new' and 'old' codebases to be compared, DeltaCode may modify the codebases'
  respective file paths in order to properly align them for comparison purposes. As a result, a
  File object's ``path`` value may differ to some extent from its ``original_path`` value
  (see below).
- ``type``: -- A string indicating whether the object is a ``file`` or a ``directory``.
- ``name``: -- A string reflecting the name of the file.
- ``size``: -- An integer reflecting the size of the file in KB.
- ``sha1``: -- A string reflecting the file's sha1 value.
- ``original_path``: -- A string identifying the file's path as it exists in the codebase, prior to
  any processing by DeltaCode to modify the path for purposes of comparing the two codebases.
- ``licenses``: -- A list of License objects reflecting all licenses identified by ScanCode as
  associated with the file. This list can be empty.
- ``copyrights``: -- A list of Copyright objects reflecting all copyrights identified by ScanCode
  as associated with the file. This list can be empty.

**Example of Detailed JSON output**

Here is an example of the detailed DeltaCode output in ``JSON`` format displaying one Delta object
in the ``deltas`` key/value pair -- in this case, an excerpt from the ``JSON`` output of a
DeltaCode comparison of ``zlib-1.2.11`` and ``zlib-1.2.9``:::

  {
    "deltacode_notice": "Generated with DeltaCode and provided on an \"AS IS\" BASIS, WITHOUT WARRANTIES\nOR CONDITIONS OF ANY KIND, either express or implied. No content created from\nDeltaCode should be considered or used as legal advice. Consult an Attorney\nfor any legal advice.\nDeltaCode is a free software codebase-comparison tool from nexB Inc. and others.\nVisit https://github.com/nexB/deltacode/ for support and download.",
    "deltacode_options": {
      "--new": "C:/scans/zlib-1.2.11.json",
      "--old": "C:/scans/zlib-1.2.9.json",
      "--all-delta-types": false
    },
    "deltacode_version": "1.0.0.post49.e3ff7be",
    "deltacode_errors": [],
    "deltas_count": 40,
    "deltas": [
      {
        "factors": [
          "modified"
        ],
        "score": 20,
        "new": {
          "path": "trees.c",
          "type": "file",
          "name": "trees.c",
          "size": 43761,
          "sha1": "ab030a33e399e7284b9ddf9bba64d0dd2730b417",
          "original_path": "zlib-1.2.11/trees.c",
          "licenses": [
            {
              "key": "zlib",
              "score": 60.0,
              "short_name": "ZLIB License",
              "category": "Permissive",
              "owner": "zlib"
            }
          ],
          "copyrights": [
            {
              "statements": [
                "Copyright (c) 1995-2017 Jean-loup Gailly"
              ],
              "holders": [
                "Jean-loup Gailly"
              ]
            }
          ]
        },
        "old": {
          "path": "trees.c",
          "type": "file",
          "name": "trees.c",
          "size": 43774,
          "sha1": "1a554d4edfaecfd377c71b345adb647d15ff7221",
          "original_path": "zlib-1.2.9/trees.c",
          "licenses": [
            {
              "key": "zlib",
              "score": 60.0,
              "short_name": "ZLIB License",
              "category": "Permissive",
              "owner": "zlib"
            }
          ],
          "copyrights": [
            {
              "statements": [
                "Copyright (c) 1995-2016 Jean-loup Gailly"
              ],
              "holders": [
                "Jean-loup Gailly"
              ]
            }
          ]
        }
      },
      [additional Delta objects if any]
    ]
  }

CSV
^^^

Compared with DeltaCode's JSON output, the CSV output is relatively simple, comprising the
following seven fields as column headers, with each row representing one Delta object:

- ``Score`` -- An integer representing the magnitude/importance of the file-level change.
- ``Factors`` -- One or more strings -- with no comma or other separators -- representing the
  factors that characterize the file-level comparison and are used to calculate the resulting
  score.
- ``Path`` -- A string identifying the file's path in the 'new' codebase unless the Delta object
  reflects a ``removed`` file, in which case the string identifies the file's path in the 'old'
  codebase. As noted above, this path may vary to some extent from the file's actual path in its
  codebase as a result of DeltaCode processing for codebase comparison purposes.
- ``Name`` -- A string reflecting the file's name in the 'new' codebase unless the Delta object
  reflects a ``removed`` file, in which case the string reflects the file's name in the 'old'
  codebase.
- ``Type`` -- A string reflecting the file's type ('file' or 'directory') in the 'new' codebase
  unless the Delta object reflects a ``removed`` file, in which case the string reflects the file's
  type in the 'old' codebase.
- ``Size`` -- An integer reflecting the file's size in KB in the 'new' codebase unless the Delta
  object reflects a ``removed`` file, in which case the string reflects the file's size in the
  'old' codebase.
- ``Old Path`` -- A string reflecting the file's path in the 'old' codebase if the Delta object
  reflects a ``moved`` file. If the Delta object does not involve a ``moved`` file, this field is
  empty. As with the ``Path`` field/column header above, this path may differ to some extent from
  the file's actual path in its codebase due to DeltaCode processing for codebase comparison
  purposes.
