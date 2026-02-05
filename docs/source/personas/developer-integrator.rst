.. _persona-developer-integrator:

====================================
For Developers & Integrators
====================================

Welcome! If you're integrating AboutCode tools into your development workflow, CI/CD
pipeline, or building applications that consume AboutCode data, you're in the right place.

AboutCode provides powerful APIs, command-line tools, and libraries that you can use to
automate scanning, generate SBOMs, and integrate license and vulnerability analysis into
your systems.

What You Can Accomplish
=======================

With AboutCode, you can:

- **Automate Code Scanning**: Run license and vulnerability scans from the command line or CI/CD
- **Generate SBOMs Programmatically**: Create CycloneDX and SPDX SBOMs via API or CLI
- **Integrate with Your Tools**: Use REST APIs to query vulnerability data and package metadata
- **Build Custom Workflows**: Create pipelines that combine scanning, analysis, and reporting
- **Parse and Process Results**: Work with structured JSON/YAML output for downstream processing

Key Workflows
=============

1. Command-Line Scanning
------------------------

Use ScanCode Toolkit from the command line to scan code, detect licenses, extract
copyrights, and identify packages.

The CLI provides extensive options for customizing scans, filtering results, and
generating output in various formats (JSON, YAML, SPDX, CycloneDX).

**Example:**

.. code-block:: bash

    # Basic scan
    scancode -clpieu --json-pp output.json /path/to/code

    # Scan with license policies
    scancode --license-policy policies.yml --json output.json /path/to/code

    # Generate SPDX SBOM
    scancode --spdx output.spdx /path/to/code

**Learn more:** :ref:`scancode-toolkit-project`

**Tools you'll use:** ScanCode Toolkit

2. API Integration
------------------

ScanCode.io provides a REST API for triggering scans, retrieving results, and managing
projects programmatically.

You can integrate scanning into your CI/CD pipeline, automate SBOM generation, or build
custom applications that consume scan data.

**Example:**

.. code-block:: python

    import requests

    # Create a project
    response = requests.post(
        'https://your-scancodeio.com/api/projects/',
        json={'name': 'my-project'},
        headers={'Authorization': 'Token your-api-token'}
    )

    # Upload code and run pipeline
    project_url = response.json()['url']
    # ... upload files and trigger pipeline

**Learn more:** :ref:`scancodeio-project`

**Tools you'll use:** ScanCode.io API, VulnerableCode API, PurlDB API

3. CI/CD Pipeline Integration
-----------------------------

Integrate AboutCode scanning into your continuous integration pipeline to catch license
and security issues early in the development process.

You can use GitHub Actions, GitLab CI, Jenkins, or any CI system that supports running
command-line tools or making API calls.

**Example (GitHub Actions):**

.. code-block:: yaml

    - name: Scan with ScanCode
      uses: aboutcode-org/scancode-action@v1
      with:
        path: .
        output: scancode-results.json

**Learn more:** :ref:`scancode-action-project`

**Tools you'll use:** ScanCode Action, ScanCode Toolkit, ScanCode.io

4. Creating and Consuming SBOMs
-------------------------------

Generate software bills of materials (SBOMs) in industry-standard formats like SPDX
and CycloneDX.

You can create SBOMs from scan results, import SBOMs from other tools, enrich them with
additional data, and export them for sharing with customers or partners.

**Learn more:** :ref:`create-sboms` and :ref:`consume-sboms`

**Tools you'll use:** ScanCode Toolkit, ScanCode.io, DejaCode

Recommended Tools & Libraries
==============================

**ScanCode Toolkit**
    Command-line scanner with extensive options and multiple output formats. The
    foundation for all AboutCode scanning.

    :ref:`scancode-toolkit-project`

    GitHub: https://github.com/aboutcode-org/scancode-toolkit

**ScanCode.io**
    Web application with REST API for running complex scanning pipelines. Supports
    Docker images, packages, and codebases.

    :ref:`scancodeio-project`

    GitHub: https://github.com/aboutcode-org/scancode.io

**VulnerableCode API**
    REST API for querying vulnerability data by package, CVE, or PURL.

    :ref:`vulnerablecode-project`

    Public API: https://public.vulnerablecode.io/api/

**PurlDB API**
    REST API for querying package metadata by PURL.

    https://purldb.readthedocs.io

    Public API: https://public.purldb.io/api/

**Python Libraries**
    - **license-expression**: Parse and normalize SPDX license expressions
    - **packageurl-python**: Work with Package URLs (PURLs)
    - **commoncode**: Common utilities for file handling, hashing, and dates
    - **extractcode**: Universal archive extraction

    :ref:`license-expression-project`

Working with Package URLs (PURLs)
==================================

Package URLs (PURLs) are a universal way to identify software packages across all
ecosystems. AboutCode tools use PURLs extensively.

**Format:**

.. code-block:: text

    pkg:type/namespace/name@version?qualifiers#subpath

**Examples:**

.. code-block:: text

    pkg:npm/express@4.18.2
    pkg:pypi/django@4.2.0
    pkg:maven/org.apache.commons/commons-lang3@3.12.0
    pkg:docker/library/nginx@1.25.0

**Python usage:**

.. code-block:: python

    from packageurl import PackageURL

    purl = PackageURL.from_string('pkg:npm/express@4.18.2')
    print(purl.type)      # 'npm'
    print(purl.name)      # 'express'
    print(purl.version)   # '4.18.2'

Output Formats
==============

AboutCode tools support multiple output formats:

- **JSON**: Structured data for programmatic processing
- **YAML**: Human-readable structured data
- **SPDX**: Industry-standard SBOM format (JSON, YAML, RDF, tag-value)
- **CycloneDX**: OWASP SBOM standard (JSON, XML)
- **CSV**: Tabular data for spreadsheet analysis
- **HTML**: Human-readable reports

Next Steps
==========

**New to AboutCode?**
    Start with :ref:`start-scanning-code` to understand the basics.

**Ready to automate?**
    Check out the ScanCode Toolkit CLI documentation for command-line options.

**Building an integration?**
    Review the ScanCode.io API documentation for REST endpoints.

**Need to understand the data model?**
    See :ref:`aboutcode_data` for AboutCode data structures.

**Also need compliance workflows?**
    Visit :ref:`persona-legal-compliance` for policy management and reporting.

**Interested in security analysis?**
    Check out :ref:`persona-security-researcher` for vulnerability scanning.
