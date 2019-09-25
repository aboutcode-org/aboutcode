Basic Scan Type Options
-----------------------

Option lists are two-column lists of command-line options and descriptions,
documenting a program's options. For example:

-c, --copyright              Scan <input> for copyrights. **[default]**

-l, --license                Scan <input> for licenses. **[default]**

-p, --package                Scan <input> for packages. **[default]**

-e, --email                  Scan <input> for emails.

-u, --url                    Scan <input> for urls.

-i, --info                   Include information such as:

                             - size,
                             - type,
                             - date,
                             - programming language,
                             - sha1 and md5 hashes,
                             - is/isn't binary/text/archive/media/source/script

                             etc.

.. note::

    Unlike previous 2.x versions, -c, -l, and -p are not default. If any of combination of these
    options are used, scancode only performs that specific task, and not the others.
    ``./scancode -e`` only scans for emails, and doesn't scan for copyright/license/packages/general
    information.

.. note::

    These options, i.e. -c, -l, -p, -e, -u, and -i can be used together. As in, instead of
    ``./scancode -c -i -p``, you can write ``./scancode -cip`` and it will be the same.

--generated                  Classify automatically generated code files with a flag.

--max-email INT              Report only up to INT emails found in a
                             file. Use 0 for no limit.  [default: 50]

--max-url INT                Report only up to INT urls found in a
                             file. Use 0 for no limit.  [default: 50]

--license-score INTEGER

          Do not return license matches with scores lower than this score.
          A number between 0 and 100.  [default: 0]
          Here, a bigger number means a better match, i.e. setting a higher license score
          translates to a higher threshold (with equal or less number of matches).

--license-text

          Include the matched text for the detected licenses with the output report.

--license-url-template TEXT

          Set the template URL used for the license reference URLs.

          In a template URL, curly braces ({}) are replaced by the license key.
          [default: https://enterprise.dejacode.com/urn/urn:dje:license:{}]

--license-text-diagnostics

          In the matched license text, include diagnostic highlights surrounding with
          square brackets [] words that are not matched.

.. note::

    These 4 options, ``--license-text-diagnostics``, ``--license-score``, ``--license-text``,
    and ``--license-url-template`` doesn't have any effect unless ``--license`` is requested.
