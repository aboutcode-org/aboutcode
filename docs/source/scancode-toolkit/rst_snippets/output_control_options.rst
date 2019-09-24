Output Control Options
----------------------

--strip-root           Strip the root directory segment of all paths.

--full-root            Report full, absolute paths. 

.. note::

    The options ``--strip-root`` and ``--full-root`` can't be used together, i.e. any one option
    may be used in a single scan.

.. note::

    The default is to always include the last directory segment of the scanned path such that all
    paths have a common root directory. 

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
