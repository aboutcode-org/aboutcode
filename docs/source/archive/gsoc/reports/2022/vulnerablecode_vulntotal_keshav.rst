VulnTotal: Tool for cross-validating vulnerability
==================================================

Organization - `AboutCode <https://www.aboutcode.org>`_
-----------------------------------------------------------
| **Keshav Priyadarshi**
| GitHub: `keshav-space <https://github.com/keshav-space>`_
| LinkedIn: `@keshav-space <https://www.linkedin.com/in/keshav-space>`_
| Project: `VulnTotal <https://github.com/nexB/vulnerablecode/tree/vulntotal/vulntotal>`_
| Proposal: `Link <https://docs.google.com/document/d/1it5eKwIiSsnuKuMAPhP1SoYiq412bdPmuAWNN25ZVAY/edit>`_

Overview
---------

VulnTotal ``cross-validates`` the vulnerability coverage of publicly available
vulnerability check tools and databases. It's inspired by the VirusTotal
multi-scanner virus scanning service. There are scenarios where a package
is reported as vulnerable by some tools or databases but not by others,
VulnTotal helps in detection such anomaly. We can gradually work with
these tool providers to keep each other apprised about newly discovered
vulnerabilities and anomaly, making FOSS more secure.

Sneak Peek
-----------------

.. figure:: https://user-images.githubusercontent.com/44315208/188985807-b13e2c08-dd5c-40ec-8f8d-6b15b6d6f4db.gif

   VulnTotal takes PURL as an argument and returns vulnerability data from various data sources.
   By default, vulnerability data is grouped by CVE.

.. note::
   A PURL is a URL string used to identify and locate a software package in a mostly universal and uniform
   way across programming languages, package managers, packaging conventions, tools, APIs and databases.
   `more on PURL <https://github.com/package-url>`_

VulnTotal Development - Walkthrough
------------------------------------

Initial Configuration
^^^^^^^^^^^^^^^^^^^^^^^^

The initial PR and commits outlined the core structure and implemented
``VendorData`` and ``DataSource`` inside ``validator.py``.

**VendorData** is dataclass that encapsulates ``aliases``,
``affected_versions`` and ``fixed_versions`` for a vulnerability.

**DataSource** outlines core methords such as ``datasource_advisory`` and
``supported_ecosystem`` to be implemented by subclass.


Below is the tree view of VulnTotal for better understanding ::

    vulntotal
     ├── validator.py
     ├── vulntotal_cli.py
     ├── vulntotal_utils.py
     ├── datasources
     │     ├── __init__.py
     │     ├── deps.py
     │     ├── github.py
     │     ├── gitlab.py
     │     ├── oss.py
     │     ├── osv.py
     │     ├── snyk.py
     │     └── vulnerablecode.py
     └── tests
           ├── test_deps.py
           ├── test_github.py
           ├── test_oss.py
           ├── test_osv.py
           ├── test_snyk.py
           ├── test_vulnerablecode.py
           └── test_data
                 ├── deps/
                 ├── github/
                 ├── oss_index/
                 ├── osv/
                 ├── snyk/
                 └── vulnerablecode/

PR and commits related to initial configuration

* `nexB/vulnerablecode#777 <https://github.com/nexB/vulnerablecode/pull/777>`_
* `nexB/vulnerablecode#2176cb11 <https://github.com/nexB/vulnerablecode/commit/2176cb119614b0381ebd56551779266747f9a871>`_
* `nexB/vulnerablecode#922859f3 <https://github.com/nexB/vulnerablecode/commit/922859f3c198eb0e78b51f0f4600bbb872059bed>`_
* `nexB/vulnerablecode#78dd5ae7 <https://github.com/nexB/vulnerablecode/commit/78dd5ae7f736874b05764b935968e2e79559feb1>`_

Adding DataSource
^^^^^^^^^^^^^^^^^^

The initial config made adding datasource fairly smooth. AnyNewDataSource just needed to
inherit ``DataSource`` and implement ``datasource_advisory`` and ``supported_ecosystem``

**datasource_advisory** is core method that takes PURL as an arguments and yields ``VendorData``

**supported_ecosystem** should return a dictionary that maps PURL equivalent of ecosystem
(aka purl.type) to DataSource equivalent ecosystem.


Currently Supported DataSource
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

1. Open Source Vulnerability <osv.dev>
+++++++++++++++++++++++++++++++++++++++++

OSV provides API end-point for querying package vulnerability. Unfortunately NuGet package names aren't
case normalized by OSV. So the OSVDataSource employs NuGet SearchQueryService for
discovering the valid case-sensitive package name and then uses that to query OSV.
For more on this issue see `nexB/vulnerablecode/#800 <https://github.com/nexB/vulnerablecode/issues/800>`_

Related PR: `nexB/vulnerablecode#788 <https://github.com/nexB/vulnerablecode/pull/788>`_


2. Open Source Insights <deps.dev>
++++++++++++++++++++++++++++++++++++

Writing datasource for deps was quite uneventful. Deps doesn't provide any documented API except
for GCP BigQuery, but it does have obfuscated API and DepsDataSource makes use of that.

Related PR: `nexB/vulnerablecode#789 <https://github.com/nexB/vulnerablecode/pull/789>`_


3. GitHub Advisory Database
++++++++++++++++++++++++++++

GitHub provide GraphQL end-point for querying package vulnerability, but it comes with a caveat
that one can't query a specific version of a particular package. It dumps vulnerability related to
all the versions of a particular package. For this vulntotal_utils implements a specialized method
``github_constraints_satisfied`` to filters out vulnerabilities for specific version.

Related PR: `nexB/vulnerablecode#804 <https://github.com/nexB/vulnerablecode/pull/804>`_


4. Sonatype OSS Index
+++++++++++++++++++++++++

OSSIndexDataSource makes use of oss-index API. OSS-Index only provides CVE's related
particular package version and makes no mention of either the affected package versions
or fixed package version.

Related PR: `nexB/vulnerablecode#829 <https://github.com/nexB/vulnerablecode/pull/829>`_


5. VulnerableCode Advisory Database
++++++++++++++++++++++++++++++++++++++

VulnerableCodeDataSource currently make use of local VulnerableCode instance, but soon
will be migrated to global instance.

Related PR: `nexB/vulnerablecode#832 <https://github.com/nexB/vulnerablecode/pull/832>`_


6. Snyk Vulnerability Database
+++++++++++++++++++++++++++++++++++

Snyk comes with no API whatsoever, so had to restore to web scrapping using BeautifulSoup.
A specialized method ``snky_constraints_satisfied`` was implemented just filter out
vulnerabilities for specific version.
Among all the datasources currently available, Snyk is the only one that keeps track
of malicious packages.


Related PR: `nexB/vulnerablecode#842 <https://github.com/nexB/vulnerablecode/pull/842>`_


7. GitLab Gemnasium Advisory Database
+++++++++++++++++++++++++++++++++++++++++

Again, GitLab comes with no API, so GitlabDataSource is designed to directly
fetch package vulnerability data from GitLab gemnasium
repository. For case-sensitive package name, GitLab GraphQL end-point is
used to get the exact case-sensitive package name.
A similar method ``gitlab_constraints_satisfied`` is implemented to filter out
vulnerabilities for specific version.

Related PR: `nexB/vulnerablecode#883 <https://github.com/nexB/vulnerablecode/pull/883>`_


Automatic Datasourse Registery
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

All new Datasource must be added to ``DATASOURCE_REGISTERY`` to make it available for use.
Fortunately ``__init__.py`` is configured to take care of this, as soon as a new and valid
datasource file is added inside datasources directory it automatically gets registered
and vice versa.

Related PR: `nexB/vulnerablecode#901 <https://github.com/nexB/vulnerablecode/pull/901>`_

Command-line Interface
^^^^^^^^^^^^^^^^^^^^^^^^^^^^

VulnTotal CLI takes PURL as an argument and returns vulnerability data from various data sources.
By default, vulnerability data is grouped by CVE. It also supports JSON and YAML data dump.
Since most datasources are Network I/O intensive, so by default CLI makes use of ThreadPoolExecutor
for better efficiency.

Related PR: `nexB/vulnerablecode#801 <https://github.com/nexB/vulnerablecode/pull/801>`_

.. tip::
   | CLI comes with lots of hidden features that are specially useful while debugging a datasource.
   | Look inside ``vulntotal_cli.py`` to discover them all.

Pre GSoC
----------

* Test sorting of all the OpenSSL versions ever released.  `nexB/univers#61 <https://github.com/nexB/univers/pull/61>`_
* Migrate OpenSSL importer to importer-improver model.  `nexB/vulnerablecode#690 <https://github.com/nexB/vulnerablecode/pull/690>`_
* Correct notes for cvssv3.1_qr.  `nexB/vulnerablecode#599 <https://github.com/nexB/vulnerablecode/pull/599>`_
* Add from_versions in VersionRange.  `nexB/univers#55 <https://github.com/nexB/univers/pull/55>`_
* Add OpenSSL support in univers.  `nexB/univers#42 <https://github.com/nexB/univers/pull/42>`_
* Fix for NpmVersionRange.from_native and README.  `nexB/univers#34 <https://github.com/nexB/univers/pull/34>`_
* Add black code-style test for skeleton.  `nexB/skeleton#56 <https://github.com/nexB/skeleton/pull/56>`_

Post GSoC - Future Plans & Suggestions
---------------------------------------

* Support query using aliases. `nexB/vulnerablecode/#824 <https://github.com/nexB/vulnerablecode/issues/824>`_
* Adding more DataSource like mend.io. `nexB/vulnerablecode/#835 <https://github.com/nexB/vulnerablecode/issues/835>`_
* Support for API and Web UI.
* Cluster analysis of advisory fetched from different DataSources. `nexB/vulnerablecode#822 <https://github.com/nexB/vulnerablecode/issues/822>`_
* Handle forever vulnerable packages in VulnerableCode `nexB/vulnerablecode#855 <https://github.com/nexB/vulnerablecode/issues/855>`_


Closing Thoughts
-------------------

Thoroughly enjoyed working on this project. Weekly calls were greatly helpful and thanks to
`Philippe <https://github.com/pombredanne>`_, `Hritik <https://github.com/hritik14>`_,
`Tushar <https://github.com/TG1999>`_, `Shivam <https://github.com/sbs2001>`_ for the
thoughtful inputs. Learned a lot about various interesting projects and what it takes
to tame some of the real world problems. Greatly enhanced my ability to conduct myself
in an open source world. All in all it's been a remarkable journey.
