.. _persona-security-researcher:

====================================
For Security & SCA Professionals
====================================

Welcome! If you're focused on identifying vulnerabilities, managing security risks, or
performing software composition analysis (SCA), AboutCode has the tools you need.

Whether you're a security researcher, AppSec engineer, or SCA analyst, you can use
AboutCode to scan code for vulnerabilities, query vulnerability databases, and integrate
security analysis into your workflows.

What You Can Accomplish
=======================

With AboutCode, you can:

- **Identify Vulnerable Components**: Scan code and packages to find known security vulnerabilities
- **Query Vulnerability Data**: Access a comprehensive, open database of CVEs and
  security advisories
- **Analyze SBOM Security**: Review software bills of materials for security risks
- **Track Security Metrics**: Monitor vulnerability counts, severity levels, and remediation status
- **Integrate with Security Tools**: Automate vulnerability scanning in your security pipeline

Key Workflows
=============

1. Scanning Code for Vulnerabilities
------------------------------------

Scan your codebase, Docker images, or packages to identify components with known
security vulnerabilities.

ScanCode.io can detect packages and match them against the VulnerableCode database to
find CVEs, security advisories, and affected version ranges.

**Learn more:** :ref:`start-scanning-code`

**Tools you'll use:** ScanCode.io, VulnerableCode, ScanCode Toolkit

2. Querying the Vulnerability Database
--------------------------------------

VulnerableCode provides a free, open database of software vulnerabilities aggregated
from multiple sources including NVD, GitHub Security Advisories, and ecosystem-specific
databases.

You can query by package, CVE, or PURL (Package URL) to get comprehensive vulnerability
information including affected versions, severity scores, and references.

**Learn more:** :ref:`vulnerablecode-project`

**Tools you'll use:** VulnerableCode

**Public instance:** https://public.vulnerablecode.io/

3. Analyzing SBOM Security
--------------------------

When you receive SBOMs from suppliers or generate them for your own software, you need
to understand the security posture of all included components.

Import SBOMs into ScanCode.io or DejaCode, enrich them with vulnerability data from
VulnerableCode, and identify high-risk components that need attention.

**Learn more:** :ref:`consume-sboms`

**Tools you'll use:** ScanCode.io, VulnerableCode, DejaCode

4. Integrating Security Scanning
--------------------------------

Automate vulnerability scanning in your CI/CD pipeline, security tools, or monitoring
systems.

Use the ScanCode.io API or command-line interface to trigger scans, retrieve results,
and integrate with your existing security infrastructure.

**Learn more:** :ref:`persona-developer-integrator`

**Tools you'll use:** ScanCode.io, ScanCode Toolkit, VulnerableCode API

Recommended Tools
=================

**VulnerableCode**
    Free and open database of software package vulnerabilities. Query by package,
    CVE, or PURL to get comprehensive vulnerability information.

    :ref:`vulnerablecode-project`

    Public instance: https://public.vulnerablecode.io/

**ScanCode.io**
    Web-based scanning platform with built-in VulnerableCode integration. Scan
    packages, containers, and codebases for vulnerabilities.

    :ref:`scancodeio-project`

**PurlDB**
    Package metadata database keyed by PURL. Useful for enriching vulnerability
    data with package information.

    https://purldb.readthedocs.io

    Public instance: https://public.purldb.io/

**ScanCode Toolkit**
    Command-line scanner that can detect packages and integrate with VulnerableCode
    for vulnerability analysis.

    :ref:`scancode-toolkit-project`

Understanding Vulnerability Data
=================================

**Severity Scoring**
    VulnerableCode aggregates severity scores from multiple sources including CVSS
    scores from NVD and ecosystem-specific severity ratings.

**Affected Version Ranges**
    Vulnerability data includes precise version ranges showing which versions of a
    package are affected and which versions contain fixes.

**Multiple Data Sources**
    VulnerableCode aggregates data from NVD, GitHub Security Advisories, OSV, and
    ecosystem-specific databases for comprehensive coverage.

**Package URL (PURL)**
    All vulnerability data is keyed by PURL, a universal identifier for software
    packages across all ecosystems.

Next Steps
==========

**New to AboutCode?**
    Start with :ref:`start-scanning-code` to run your first vulnerability scan.

**Want to explore the vulnerability database?**
    Visit https://public.vulnerablecode.io/ to search and browse vulnerability data.

**Need to integrate with your security tools?**
    See :ref:`persona-developer-integrator` for API documentation and automation.

**Also responsible for license compliance?**
    Check out :ref:`persona-legal-compliance` for compliance workflows.

**Looking for developer documentation?**
    Visit :ref:`persona-developer-integrator` for CLI and API integration guides.
