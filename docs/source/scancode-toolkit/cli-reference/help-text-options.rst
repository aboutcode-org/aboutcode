Getting Help from the Command Line
==================================

Scancode-Toolkit Command Line Interface can help you to search for specific options or use cases
from the command line itself. These are two options are ``--help`` and ``--examples``, and are
very helpful if you need a quick glance of the options or use cases. Or it can be useful when you
can't access the more elaborate online documentation.   

.. _cli_help_text:

Help text
---------

The Scancode-Toolkit Command Line Interface has a Help option displaying all the options. It also
displays basic usage, and some simple examples. The command line option for this is:

- ``--help`` 

.. Tip::

    You can also use the shorter ``-h`` option, which does the same. 

For Linux based systems the full command is::

    $ ./scancode --help

And for windows, it will be like::

    $ scancode --help

.. note::

    Make sure you are in the Scancode Root Directory before carrying out this command. After
    extracting the ``.zip`` or ``.tar.bz`` file, the folder for Scancode-Toolkit version 3.1.1
    will be named like "scancode-toolkit-3.1.1". 
 
The Following Help Text is displayed, i.e. this is the help text for Scancode Version 3.1.1 ::

    Usage: scancode [OPTIONS] <OUTPUT FORMAT OPTION(s)> <input>...

  scan the <input> file or directory for license, origin and packages
  and save results to FILE(s) using one or more output format option.

  Error and progress are printed to stderr.

 Options:

  primary scans:
    -l, --license    Scan <input> for licenses.
    -p, --package    Scan <input> for package manifests and packages.
    -c, --copyright  Scan <input> for copyrights.

  other scans:
    -i, --info   Scan <input> for file information (size, checksums, etc).
    --generated  Classify automatically generated code files with a flag.
    -e, --email  Scan <input> for emails.
    -u, --url    Scan <input> for urls.

  scan options:
    --license-score INTEGER      Do not return license matches with a
                                 score lower than this score. A number
                                 between 0 and 100.  [default: 0]
    --license-text               Include the detected licenses matched
                                 text.
    --license-text-diagnostics   In the matched license text, include
                                 diagnostic highlights surrounding with
                                 square brackets [] words that are not
                                 matched.
    --license-url-template TEXT  Set the template URL used for the license
                                 reference URLs. Curly braces ({}) are
                                 replaced by the license key.  [default: h
                                 ttps://enterprise.dejacode.com/urn/urn:dj
                                 e:license:{}]
    --max-email INT              Report only up to INT emails found in a
                                 file. Use 0 for no limit.  [default: 50]
    --max-url INT                Report only up to INT urls found in a
                                 file. Use 0 for no limit.  [default: 50]

  output formats:
    --json FILE             Write scan output as compact JSON to FILE.
    --json-pp FILE          Write scan output as pretty-printed JSON to
                            FILE.
    --json-lines FILE       Write scan output as JSON Lines to FILE.
    --csv FILE              Write scan output as CSV to FILE.
    --html FILE             Write scan output as HTML to FILE.
    --custom-output FILE    Write scan output to FILE formatted with the
                            custom Jinja template file.
    --custom-template FILE  Use this Jinja template FILE as a custom
                            template.
    --spdx-rdf FILE         Write scan output as SPDX RDF to FILE.
    --spdx-tv FILE          Write scan output as SPDX Tag/Value to FILE.
    --html-app FILE         (DEPRECATED: use the ScanCode Workbench app
                            instead ) Write scan output as a mini HTML
                            application to FILE.

  output filters:
    --ignore-author <pattern>       Ignore a file (and all its findings)
                                    if an author contains a match to the
                                    <pattern> regular expression. Note
                                    that this will ignore a file even if
                                    it has other findings such as a
                                    license or errors.
    --ignore-copyright-holder <pattern>
                                    Ignore a file (and all its findings)
                                    if a copyright holder contains a match
                                    to the <pattern> regular expression.
                                    Note that this will ignore a file even
                                    if it has other scanned data such as a
                                    license or errors.
    --only-findings                 Only return files or directories with
                                    findings for the requested scans.
                                    Files and directories without findings
                                    are omitted (file information is not
                                    treated as findings).

  output control:
    --full-root   Report full, absolute paths.
    --strip-root  Strip the root directory segment of all paths. The
                  default is to always include the last directory segment
                  of the scanned path such that all paths have a common
                  root directory.

  pre-scan:
    --ignore <pattern>         Ignore files matching <pattern>.
    --include <pattern>        Include files matching <pattern>.
    --classify                 Classify files with flags telling if the
                               file is a legal, or readme or test file,
                               etc.
    --facet <facet>=<pattern>  Add the <facet> to files with a path
                               matching <pattern>.

  post-scan:
    --consolidate            Group resources by Packages or license and
                             copyright holder and return those groupings
                             as a list of consolidated packages and a list
                             of consolidated components. This requires the
                             scan to have/be run with the copyright,
                             license, and package options active
    --filter-clues           Filter redundant duplicated clues already
                             contained in detected license and copyright
                             texts and notices.
    --is-license-text        Set the "is_license_text" flag to true for
                             files that contain mostly license texts and
                             notices (e.g over 90% of the content).
                             [EXPERIMENTAL]
    --license-clarity-score  Compute a summary license clarity score at
                             the codebase level.
    --license-policy FILE    Load a License Policy file and apply it to
                             the scan at the Resource level.
    --mark-source            Set the "is_source" to true for directories
                             that contain over 90% of source files as
                             children and descendants. Count the number of
                             source files in a directory as a new
                             source_file_counts attribute
    --summary                Summarize license, copyright and other scans
                             at the codebase level.
    --summary-by-facet       Summarize license, copyright and other scans
                             and group the results by facet.
    --summary-key-files      Summarize license, copyright and other scans
                             for key, top-level files. Key files are top-
                             level codebase files such as COPYING, README
                             and package manifests as reported by the
                             --classify option "is_legal", "is_readme",
                             "is_manifest" and "is_top_level" flags.
    --summary-with-details   Summarize license, copyright and other scans
                             at the codebase level, keeping intermediate
                             details at the file and directory level.

  core:
    --timeout <secs>         Stop an unfinished file scan after a timeout
                             in seconds.  [default: 120 seconds]
    -n, --processes INT      Set the number of parallel processes to use.
                             Disable parallel processing if 0. Also
                             disable threading if -1. [default: 1]
    --quiet                  Do not print summary or progress.
    --verbose                Print progress as file-by-file path instead
                             of a progress bar. Print verbose scan
                             counters.
    --from-json              Load codebase from an existing JSON scan
    --max-in-memory INTEGER  Maximum number of files and directories scan
                             details kept in memory during a scan.
                             Additional files and directories scan details
                             above this number are cached on-disk rather
                             than in memory. Use 0 to use unlimited memory
                             and disable on-disk caching. Use -1 to use
                             only on-disk caching.  [default: 10000]

  miscellaneous:
    --reindex-licenses  Check the license index cache and reindex if
                        needed and exit.

  documentation:
    -h, --help       Show this message and exit.
    --about          Show information about ScanCode and licensing and
                     exit.
    --version        Show the version and exit.
    --examples       Show command examples and exit.
    --list-packages  Show the list of supported package types and exit.
    --plugins        Show the list of available ScanCode plugins and exit.
    --print-options  Show the list of selected options and exit.

  Examples (use --examples for more):

  Scan the 'samples' directory for licenses and copyrights.
  Save scan results to the 'scancode_result.json' JSON file:

      scancode --license --copyright --json-pp scancode_result.json
      samples

  Scan the 'samples' directory for licenses and package manifests. Print scan
  results on screen as pretty-formatted JSON (using the special '-' FILE to print
  to on screen/to stdout):

      scancode --json-pp - --license --package  samples

  Note: when you run scancode, a progress bar is displayed with a
  counter of the number of files processed. Use --verbose to display
  file-by-file progress.

.. _cli_examples_text:

Command Examples Text
---------------------
 
The Scancode-Toolkit Command Line Interface has an examples option which displays some basic
examples (more than the basic synopsis in ``--help``). These examples include the following aspects
of code scanning:

- Scanning Single File/Directory
- Output Scan results to stdout(as JSON) or HTML/JSON file
- Scanning for only Copyrights/Licenses
- Ignoring Files
- Using GLOB Patterns to Scan Multiple Files
- Using Verbose Mode

The command line option for displaying these basic examples is:

- ``--examples`` 

For Linux based systems the full command is::

    $ ./scancode --examples

And for windows, it will be like::

    $ scancode --examples

The Following Text is displayed, i.e. this is the examples for Scancode Version 3.1.1 ::

    Scancode command lines examples:

    (Note for Windows: use '\' back slash instead of '/' forward slash for paths.)

    Scan a single file for copyrights. Print scan results to stdout as pretty JSON:

        scancode --copyright samples/zlib/zlib.h --json-pp -

    Scan a single file for licenses, print verbose progress to stderr as each
    file is scanned. Save scan to a JSON file:

        scancode --license --verbose samples/zlib/zlib.h --json licenses.json

    Scan a directory explicitly for licenses and copyrights. Redirect JSON scan
    results to a file:

        scancode --license --copyright samples/zlib/ --json - > scan.json

    Scan a directory while ignoring a single file. Scan for license, copyright and
    package manifests. Use four parallel processes.
    Print scan results to stdout as pretty formatted JSON.

        scancode -lc --package --ignore README --processes 4 --json-pp - samples/

    Scan a directory while ignoring all files with .txt extension.
    Print scan results to stdout as pretty formatted JSON.
    It is recommended to use quotes around glob patterns to prevent pattern
    expansion by the shell:

        scancode --json-pp - --ignore "*.txt" samples/

    Special characters supported in GLOB pattern:
    - *       matches everything
    - ?       matches any single character
    - [seq]   matches any character in seq
    - [!seq]  matches any character not in seq

    For a literal match, wrap the meta-characters in brackets.
    For example, '[?]' matches the character '?'.
    For details on GLOB patterns see https://en.wikipedia.org/wiki/Glob_(programming).

    Note: Glob patterns cannot be applied to path as strings.
    For example, this will not ignore "samples/JGroups/licenses".

        scancode --json - --ignore "samples*licenses" samples/


    Scan a directory while ignoring multiple files (or glob patterns).
    Print the scan results to stdout as JSON:

        scancode --json - --ignore README --ignore "*.txt" samples/

    Scan a directory for licenses and copyrights. Save scan results to an
    HTML file:

        scancode --license --copyright --html scancode_result.html samples/zlib

    To extract archives, see the 'extractcode' command instead.
