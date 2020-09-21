Reference
=========

about
-----

**Syntax**

::

    about [OPTIONS] [COMMANDS]

**Options:**

::

    --version        Show the version and exit.
    -h, --help       Show this message and exit.

**Commands:**

::

  attrib     LOCATION: directory, OUTPUT: output file
  check      LOCATION: directory
  gen        LOCATION: input file, OUTPUT: directory
  inventory  LOCATION: directory, OUTPUT: csv file
  transform  LOCATION: csv file, OUTPUT: csv file


attrib
------

**Syntax**

::

    about attrib [OPTIONS] LOCATION OUTPUT

    LOCATION: Path to an ABOUT file or a directory containing ABOUT files.
    OUTPUT: Path to output file to write the attribution to.

**Options:**

::

    --template PATH             Path to a custom attribution template.
    --vartext <key>=<value>     Variable text as key=value for use in a custom attribution template.
    --verbose                   Show all the errors and warning.
    -q, --quiet                 Do not print any error/warning.
    -h, --help                  Show this message and exit.

Purpose
^^^^^^^
Generate an attribution file which contains the all license information
from the LOCATION along with the license text.

Assume the following:

::

    '/home/about_files/'** contains all the ABOUT files [LOCATION]
    '/home/attribution/attribution.html' is the user's output path [OUTPUT]

::

    $ about attrib /home/about_files/ /home/attribution/attribution.html

Options
^^^^^^^

::

    --template

        This option allows you to use your own template for attribution generation.
        For instance, if you have a custom template located at:
        /home/custom_template/template.html

    $ about attrib --template /home/custom_template/template.html LOCATION OUTPUT

    --vartext

        This option allow you to pass variable texts to the attribution template

    $ about attrib --vartext "title=Attribution Notice" --vartext "header=Product 101" LOCATION OUTPUT

        Users can use the following in the template to get the vartext:
        {{ variables['title'] }}
        {{ variables['header'] }}

    --verbose

        This option tells the tool to show all errors found.
        The default behavior will only show 'CRITICAL', 'ERROR', and 'WARNING'


The following data are passed to jinja2 and, therefore, can be used for a custom template:
 * about object: the about objects
 * common_licenses: a common license keys list in licenses.py
 * license_key_and_context: a dictionary list with license_key as a key
   and license text as the value
 * license_file_name_and_key: a dictionary list with license file name as
   a key and license key as the value
 * license_key_to_license_name: a dictionary list with license key as a key
   and license file name as the value


check
-----

**Syntax**

::

    about check [OPTIONS] LOCATION

    LOCATION: Path to an ABOUT file or a directory with ABOUT files.

**Options:**

::

    --verbose                Show all the errors and warning
    -h, --help               Show this message and exit.

Purpose
^^^^^^^
Validating ABOUT files at LOCATION.

Options
^^^^^^^

::

    --verbose

        This option tells the tool to show all errors found.
        The default behavior will only show 'CRITICAL', 'ERROR', and 'WARNING'

    $ about check --verbose /home/project/about_files/


gen
---

**Syntax**

::

    about gen [OPTIONS] LOCATION OUTPUT

    LOCATION: Path to a JSON or CSV inventory file.
    OUTPUT: Path to a directory where ABOUT files are generated.

**Options:**

::

    --android                           Generate MODULE_LICENSE_XXX (XXX will be
                                        replaced by license key) and NOTICE as the same
                                        design as from Android.

    --fetch-license api_url api_key     Fetch licenses data from DejaCode License
                                        Library and create <license>.LICENSE
                                        side-by-side with the generated .ABOUT file.
                                        The following additional options are required:

                                        api_url - URL to the DejaCode License Library
                                        API endpoint

                                        api_key - DejaCode API key
                                        Example syntax:

                                        about gen --fetch-license 'api_url' 'api_key'
    --reference PATH                    Path to a directory with reference license
                                        data and text files.
    --verbose                           Show all the errors and warning.
    -q, --quiet                         Do not print any error/warning.
    -h, --help                          Show this message and exit.

Purpose
^^^^^^^
Given an inventory of ABOUT files at location, generate ABOUT files in base directory.

Options
^^^^^^^

::

    --android

        Create an empty file named `MODULE_LICENSE_XXX` where `XXX` is the license
        key and create a NOTICE file which these two files follow the design from
        Android Open Source Project.

        The input **must** have the license key information as this is needed to
        create the empty MODULE_LICENSE_XXX

    $ about gen --android LOCATION OUTPUT

    --fetch-license

        Fetch licenses text from a DejaCode API. and create <license>.LICENSE side-by-side
        with the generated .ABOUT file using data fetched from the DejaCode License Library.

        This option requires 2 parameters:
            api_url - URL to the DJE License Library.
            api_key - Hash key to authenticate yourself in the API.

        In addition, the input needs to have the 'license_expression' field.
        (Please contact nexB to get the api_* value for this feature)

    $ about gen --fetch-license 'api_url' 'api_key' LOCATION OUTPUT

    --reference

        Copy the reference files such as 'license_files' and 'notice_files' to the
        generated location from the specified directory.

        For instance,
        the specified directory, /home/licenses_notices/, contains all the licenses and notices:
        /home/licenses_notices/apache2.LICENSE
        /home/licenses_notices/jquery.js.NOTICE

    $ about gen --license-notice-text-location /home/licenses_notices/ LOCATION OUTPUT

    --verbose

        This option tells the tool to show all errors found.
        The default behavior will only show 'CRITICAL', 'ERROR', and 'WARNING'


inventory
---------

**Syntax**

::

    about inventory [OPTIONS] LOCATION OUTPUT

    LOCATION: Path to an ABOUT file or a directory with ABOUT files.
    OUTPUT: Path to the JSON or CSV inventory file to create.

**Options:**

::

    -f, --format [json|csv]     Set OUTPUT file format.  [default: csv]
    --verbose                   Show all the errors and warning.
    -q, --quiet                 Do not print any error/warning.
    -h, --help                  Show this message and exit.

Purpose
^^^^^^^
Collect a JSON or CSV inventory of components from ABOUT files.

Options
^^^^^^^

::

    The above command will only inventory the ABOUT files which have the "license_expression: gpl-2.0"

    -f, --format [json|csv]

        Set OUTPUT file format.  [default: csv]

    $ about inventory -f json LOCATION OUTPUT

    --verbose

        This option tells the tool to show all errors found.
        The default behavior will only show 'CRITICAL', 'ERROR', and 'WARNING'


Special Notes
-------------
Multiple licenses support format
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
The multiple licenses support format for CSV files are separated by line break

+----------------+------+-----------------+----------------------+
| about_resource | name | license_key     | license_file         |
+----------------+------+-----------------+----------------------+
| test.tar.xz    | test | | apache-2.0    | | apache-2.0.LICENSE |
|                |      | | mit           | | mit.LICENSE        |
+----------------+------+-----------------+----------------------+


The multiple licenses support format for ABOUT files are by "grouping" with the keyword "licenses"

::

    about_resource: test.tar.xz
    name: test
    licenses:
        -   key: apache 2.0
            file: apache-2.0.LICENSE
        -   key: mit
            file: mit.LICENSE


Multiple license_file support
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
To support multiple license file for a license, the correct format is to separate by comma

+----------------+------+-----------------+----------------------+
| about_resource | name | license_key     | license_file         |
+----------------+------+-----------------+----------------------+
| test.tar.xz    | test | gpl-2.0         | COPYING, COPYINGv2   |
|                |      |                 |                      |
|                |      | mit             | mit.LICENSE          |
+----------------+------+-----------------+----------------------+


::

    about_resource: test.tar.xz
    name: test
    licenses:
        -   key: gpl-2.0
            file: COPYING, COPYING.v2
        -   key: mit
            file: mit.LICENSE


transform
---------

**Syntax**

::

    about transform [OPTIONS] LOCATION OUTPUT

    LOCATION: Path to a CSV file.
    OUTPUT: Path to CSV inventory file to create.

**Options:**

::

  -c, --configuration FILE  Path to an optional YAML configuration file. See
                            --help-format for format help.
  --help-format             Show configuration file format help and exit.
  -q, --quiet               Do not print error or warning messages.
  --verbose                 Show all error and warning messages.
  -h, --help                Show this message and exit.

Purpose
^^^^^^^
Transform the CSV file at LOCATION by applying renamings, filters and checks
and write a new CSV to OUTPUT.

Options
^^^^^^^

::

    -c, --configuration

        Path to an optional YAML configuration file. See--help-format for format help.

    $ about transform -c 'path to the YAML configuration file' LOCATION OUTPUT

    --help-format

        Show configuration file format help and exit.
        This option will print out examples of the the YAML configuration file.

        Keys configuration are: `field_renamings`, `required_fields` and `field_filters`

    $ about transform --help-format

    --verbose

        This option tells the tool to show all errors found.
        The default behavior will only show 'CRITICAL', 'ERROR', and 'WARNING'

Special Notes
-------------
When using the `field_filters` configuration, all the standard required columns
(`about_resource` and `name`) and the user defined `required_fields` need to be included.
