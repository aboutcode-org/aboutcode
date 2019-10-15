Post-Scan Options
-----------------

--mark-source    Set the "is_source" flag to true for directories that
                 contain over 90% of source files as direct children
                 and descendants. Count the number of source files in a
                 directory as a new source_file_counts attribute

.. include:: /scancode-toolkit/rst_snippets/note_snippets/post_mark_source.rst

--consolidate            Group resources by Packages or license and
                         copyright holder and return those groupings
                         as a list of consolidated packages and a list
                         of consolidated components.

.. include:: /scancode-toolkit/rst_snippets/note_snippets/post_consolidate.rst

--filter-clues           Filter redundant duplicated clues already
                         contained in detected license and copyright
                         texts and notices.

--is-license-text        Set the "is_license_text" flag to true for
                         files that contain mostly license texts and
                         notices (e.g over 90% of the content).

.. include:: /scancode-toolkit/rst_snippets/note_snippets/post_is_license_text.rst

.. include:: /scancode-toolkit/rst_snippets/warning_snippets/post_is_license_text.rst

--license-clarity-score  Compute a summary license clarity score at
                         the codebase level.

.. include:: /scancode-toolkit/rst_snippets/note_snippets/post_license_clarity_score.rst

--license-policy FILE    Load a License Policy file and apply it to
                         the scan at the Resource level.

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
