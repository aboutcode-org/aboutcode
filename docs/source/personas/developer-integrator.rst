.. _persona-developer-integrator:

====================================
For Developers & Integrators
====================================

If you're integrating AboutCode into your development workflow, CI/CD pipeline, or building
applications that consume AboutCode data, this is your starting point.

Quick Start Paths
=================

**Command-Line Usage**
    → :ref:`scancode-toolkit-project` - CLI scanning and SBOM generation

**API Integration**
    → :ref:`scancodeio-project` - REST API documentation
    → :ref:`vulnerablecode-project` - Vulnerability API
    → https://purldb.readthedocs.io - Package metadata API

**CI/CD Pipelines**
    → :ref:`scancode-action-project` - GitHub Actions integration

**SBOM Workflows**
    → :ref:`create-sboms` - Generate SPDX and CycloneDX SBOMs
    → :ref:`consume-sboms` - Import and process SBOMs

Quick Examples
==============

**Basic CLI Scan:**

.. code-block:: bash

    scancode -clpieu --json-pp output.json /path/to/code

**Generate SPDX SBOM:**

.. code-block:: bash

    scancode --spdx output.spdx /path/to/code

**Python API Usage:**

.. code-block:: python

    import requests
    response = requests.post(
        'https://your-scancodeio.com/api/projects/',
        json={'name': 'my-project'},
        headers={'Authorization': 'Token your-api-token'}
    )

Key Concepts
============

**Package URLs (PURLs)**
    Universal package identifiers: ``pkg:npm/express@4.18.2``

**Output Formats**
    JSON, YAML, SPDX, CycloneDX, CSV, HTML

**Python Libraries**
    - ``packageurl-python`` - Work with PURLs
    - ``license-expression`` - Parse SPDX license expressions

Also Explore
============

- :ref:`aboutcode_data` - AboutCode data structures
- :ref:`persona-legal-compliance` - For compliance workflows
- :ref:`persona-security-researcher` - For vulnerability analysis
