Reference
=========

about
-----

**Syntax**

::

    about [OPTIONS] [COMMANDS]

**Options:**

::

    --version    Show the version and exit.
    --help       Show this message and exit.

**Commands:**

::

  attrib     LOCATION: directory, OUTPUT: output file
  check      LOCATION: directory
  gen        LOCATION: input file, OUTPUT: directory
  inventory  LOCATION: directory, OUTPUT: csv file


attrib
------

**Syntax**

::

    about attrib [OPTIONS] LOCATION OUTPUT

    LOCATION: Path to an ABOUT file or a directory containing ABOUT files.
    OUTPUT: Path to output file to write the attribution to.

**Options:**

::

    --inventory PATH            Path to an inventory file.
    --mapping                   Use for mapping between the input keys and the ABOUT field.
                                names - mapping.config
    --mapping-file              Use a custom mapping file with mapping between input
                                keys and ABOUT field names.
    --template PATH             Path to a custom attribution template.
    --vartext TEXT              Variable texts to the attribution template
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
    '/home/project/component_list.csv' is the inventory that user want to be generated

::

    $ about attrib /home/about_files/ /home/attribution/attribution.html

Options
^^^^^^^

::

    --inventory

        This option allows you to define which ABOUT files should be used for attribution generation.
        For instance,
        '/home/project/component_list.csv' is the inventory that user want to be generated

    $ about attrib --inventory /home/project/component_list.csv LOCATION OUTPUT

    --mapping

        See mapping.config for details

    --mapping-file

        Same behavior as `--mapping` but with custom mapping file

    $ about attrib --mapping-file CUSTOM_MAPPING_FILE_PATH LOCATION OUTPUT

    --template

        This option allows you to use your own template for attribution generation.
        For instance, if you have a custom template located at:
        /home/custom_template/template.html

    $ about attrib --template /home/custom_template/template.html LOCATION OUTPUT

    --vartext

        This option allow you to pass variable texts to the attribution template

    $ about attrib --vartext "title=Attribution Notice" --vartext "header=Product 101" LOCATION OUTPUT

        Users can use the following in the template to get the vartext:
        {{ vartext_dict['title'] }}
        {{ vartext_dict['header'] }}

    --verbose

        This option tells the tool to show all errors found.
        The default behavior will only show 'CRITICAL', 'ERROR', and 'WARNING'


The following data are passed to jinja2 and, therefore, can be used for a custom template:
 * about object: the about objects
 * common_licenses: a common license keys list in licenses.py
 * license_key_and_context: a dictionary list with license_key as a key and license text as the
   value
 * license_file_name_and_key: a dictionary list with license file name as a key and license key
   as the value
 * license_key_to_license_name: a dictionary list with license key as a key and license file name
   as the value


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

    --fetch-license KEY                 Fetch licenses text from a DejaCode API. and
                                        create <license>.LICENSE side-by-side
                                        with the generated .ABOUT file using data
                                        fetched from a DejaCode License Library. The
                                        following additional options are required:

                                        api_url - URL to the DejaCode License Library
                                        API endpoint

                                        api_key - DejaCode API key
                                        Example syntax:

                                        about gen --fetch-license 'api_url' 'api_key'
    --license-notice-text-location PATH Copy the 'license_file' from the directory to
                                        the generated location.
    --mapping                           Use for mapping between the input keys and
                                        the ABOUT field names - mapping.config
    --mapping-file                      Use a custom mapping file with mapping between input
                                        keys and ABOUT field names.
    --verbose                           Show all the errors and warning.
    -q, --quiet                         Do not print any error/warning.
    -h, --help                          Show this message and exit.

Purpose
^^^^^^^
Given an inventory of ABOUT files at location, generate ABOUT files in base directory.

Options
^^^^^^^

::

    --fetch-license

        Fetch licenses text from a DejaCode API. and create <license>.LICENSE side-by-side
        with the generated .ABOUT file using data fetched from a DejaCode License Library.

        This option requires 2 parameters:
            api_url - URL to the DJE License Library
            api_key - Hash key to authenticate yourself in the API.

        In addition, the input needs to have the 'license_expression' field.
        (Please contact nexB to get the api_* value to use for this feature)

    $ about gen --fetch-license 'api_url' 'api_key' LOCATION OUTPUT

    --license-notice-text-location

        Copy the license files and notice files to the generated location based on the
        'license_file' and 'notice_file' value in the input from the directory

        For instance,
        the directory, /home/licenses_notices/, contains all the licenses and notices that you want:
        /home/license/apache2.LICENSE
        /home/license/jquery.js.NOTICE

    $ about gen --license-notice-text-location /home/licenses_notices/ LOCATION OUTPUT

    --mapping

        See mapping.config for details

    --mapping-file

        Same behavior as `--mapping` but with custom mapping file

    $ about attrib --mapping-file CUSTOM_MAPPING_FILE_PATH LOCATION OUTPUT

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

    --filter TEXT               Filter for the output inventory.
    -f, --format [json|csv]     Set OUTPUT file format.  [default: csv]
    --mapping                   Use file mapping.config to collect the defined not supported fields in ABOUT files.
    --mapping-file              Use a custom mapping file with mapping between input
                                keys and ABOUT field names.
    --mapping-output FILE       Use a custom mapping file with mapping between
                                ABOUT field names and output keys
    --verbose                   Show all the errors and warning.
    -q, --quiet                 Do not print any error/warning.
    -h, --help                  Show this message and exit.

Purpose
^^^^^^^
Collect a JSON or CSV inventory of components from ABOUT files.

Options
^^^^^^^

::

    -filter TEXT

        Filter for the output inventory.

    $ about inventory --filter "license_expression=gpl-2.0" LOCATION OUTPUT

    The above command will only inventory the ABOUT files which have the "license_expression: gpl-2.0"

    -f, --format [json|csv]

        Set OUTPUT file format.  [default: csv]

    $ about inventory -f json LOCATION OUTPUT

    --mapping

        See mapping.config for details

    --mapping-file

        Same behavior as `--mapping` but with custom mapping file

    $ about inventory --mapping-file CUSTOM_MAPPING_FILE_PATH LOCATION OUTPUT

    --mapping-output

        Same behavior as `--mapping-file` but with custom mapping file
        In the custom mapping file, the left side is the custom key name where
        the right side is the ABOUT field name. For instance,
        Component: name

        The "Component" is a custom field name for the output
        The "name" is one of the defaul ABOUT field name that user want to convert

    $ about inventory --mapping-output CUSTOM_MAPPING_FILE_PATH LOCATION OUTPUT

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
            name: apache-2.0.LICENSE
        -   key: mit
            name: mit.LICENSE

