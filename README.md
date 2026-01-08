# AboutCode

### What is AboutCode?

AboutCode is a family of FOSS projects to uncover metadata about software:

-   where does the code come from? which software package?
-   what is its license? copyright?
-   is the code vulnerable, maintained, well coded?
-   what are its dependencies, are there vulnerabilities/licensing issues?

All these are questions that are important to answer: there are millions of free
and open source software components available on the web for reuse.

Knowing where a software package comes from, what its license is and whether it
is vulnerable should be a problem of the past such that everyone can safely
consume more free and open source software. We support not only open source
software, but also open data, generated and curated by our applications.

> [!NOTE]
> This is a repository with information on aboutcode open source
> activities and not the actual code repository. See the
> [projects section](https://github.com/aboutcode-org/aboutcode#projects) below
> for links to all the code repositories of our projects with a brief overview
> and our [wiki](https://github.com/aboutcode-org/aboutcode/wiki) if you are
> looking to participate.

### Documentation Build

![Doc Build](https://github.com/aboutcode-org/aboutcode/actions/workflows/docs-ci.yml/badge.svg)

> [!NOTE]
> To manually build the documentation, run the `$ make docs` command from 
> the root of this repo.

### Important Links

Our homepage is at http://aboutcode.org

Our documentation (in progress) is at
https://aboutcode.readthedocs.io/en/latest/

Join the chat online at
[app.gitter.im : aboutcode-org#discuss](https://app.gitter.im/#/room/#aboutcode-org_discuss:gitter.im)
or if you're using the element app set the homeserver to `gitter.im` and then
join the
[aboutcode-org#discuss](https://matrix.to/#/#aboutcode-org_discuss:gitter.im)
chatroom. Introduce yourself and start the discussion!

Look at our [wiki](https://github.com/aboutcode-org/aboutcode/wiki) for
information about our participation in the GSoC program.

We have a weekly meeting, see more details
[here](https://github.com/aboutcode-org/aboutcode/wiki/MeetingMinutes).

### Projects

## **ScanCode Toolkit** 

[https://github.com/aboutcode-org/scancode-toolkit](https://github.com/aboutcode-org/scancode-toolkit) 

### **What**

ScanCode Toolkit is a set of code scanning tools that detect the origin (copyrights), license and vulnerabilities of code, packages and dependencies in a codebase.

### **Why**

ScanCode Toolkit is the leading tool in scanning depth and accuracy, used by hundreds of software teams. You can use ScanCode Toolkit as a command line tool or as a library.

### **Maintainer**

The primary ScanCode Toolkit maintainer is [@AyanSinhaMahapatra](https://github.com/AyanSinhaMahapatra)


## [**ScanCode.io**](http://ScanCode.io)

[https://github.com/aboutcode-org/scancode.io](https://github.com/aboutcode-org/scancode.io) 

### **What**

ScanCode.io provides a Web UI and API to run and review complex scans in rich scripted pipelines, on different kinds of containers, Docker images, package archives, manifests etc, to get information on licenses, copyrights, sources, and vulnerabilities.

### **Why**

ScanCode.io provides an easy-to-use front-end to ScanCode Toolkit and other AboutCode projects. The flexible pipeline technology supports advanced scanning tasks such as container scanning and deploy-to-develop analysis. You can run ScanCode.io in a Docker container or install it on a Linux server. It provides full support for generating and consuming CycloneDX and SPDX SBOMs.

### **Maintainer**

The primary ScanCode.io maintainer is [@tdruez](https://github.com/tdruez) 

## **ScanCode LicenseDB**

[https://github.com/aboutcode-org/scancode-licensedb](https://github.com/aboutcode-org/scancode-licensedb) 

### **What**

ScanCode LicenseDB is a free and open database of software and related licenses with over 2400 curated license texts, their metadata and ScanCode license detection rules. There is a public database available at: [https://scancode-licensedb.aboutcode.org/](https://scancode-licensedb.aboutcode.org/) 

### **Why**

ScanCode LicenseDB provides the most comprehensive list of software license identifiers, supporting SPDX-compliant license expressions. API access is available to the public database. 

### **Maintainer**

The primary ScanCode LicenseDB maintainers are [@AyanSinhaMahapatra](https://github.com/AyanSinhaMahapatra) and [@DennisClark](https://github.com/DennisClark)


## **ScanCode Workbench** 

[https://github.com/aboutcode-org/scancode-workbench](https://github.com/aboutcode-org/scancode-workbench) 

### **What**

ScanCode Workbench is an application to visualize and review scan results from ScanCode Toolkit scans. You can install and use the Workbench on a Linux, MacOS or Windows desktop.

### **Why**

ScanCode Workbench provides an easy-to-use tool to review and edit ScanCode Toolkit results.

### **Maintainer**

The primary ScanCode Workbench maintainers are [@AyanSinhaMahapatra](https://github.com/AyanSinhaMahapatra) and [@mjherzog](https://github.com/mjherzog) 

## **DejaCode** 

[https://github.com/aboutcode-org/dejacode](https://github.com/aboutcode-org/dejacode) 

### **What**

DejaCode provides an enterprise-level application to automate open source license compliance and ensure software supply chain integrity, powered by ScanCode.

### **Why**

DejaCode is your system of record as a single source of truth with quality data for licenses, vulnerabilities, and package provenance and metadata, enabling you to ensure FOSS compliance with enterprise-grade features and integrations for DevOps and software systems.

### **Maintainer**

The primary DejaCode maintainers are [@tdruez](https://github.com/tdruez) and [@DennisClark](https://github.com/DennisClark) 

## **VulnerableCode**

[https://github.com/aboutcode-org/vulnerablecode](https://github.com/aboutcode-org/vulnerablecode) 

### **What**

VulnerableCode provides a Web UI and API to access a database of known software package vulnerabilities with comprehensive information from upstream and downstream public sources including packages affected by a vulnerability and packages that fix a vulnerability. There is a public VulnerableCode database at: [https://public.vulnerablecode.io/](https://public.vulnerablecode.io/) and the project also provides the tools to build your own instance of the database.

### **Why**

Known software package vulnerabilities are aggregated in a single database to query a richer graph of relations between multiple versions of a package identified by Package-URL (PURL).

### **Maintainer**

The primary VulnerableCode maintainers are [@TG1999](https://github.com/TG1999) and [@keshav-space](https://github.com/keshav-space) 

## **PURLDB**

[https://github.com/aboutcode-org/purldb](https://github.com/aboutcode-org/purldb) 

### **What**

PURLDB provides tools to create and update a database of package metadata keyed by PURL (Package URL) and an API for the PURL data.

### **Why**

Take advantage of the PURLDB to get fast pre-scanned metadata for popular software packages, integrated with other AboutCode projects. 

### **Maintainer**

The primary PURLDB maintainer is [@JonoYang](https://github.com/JonoYang) 

# **AboutCode Inspectors** 

Inspectors are special-purpose analysis tools. You can run them as a ScanCode Toolkit plugin, or steps in a [ScanCode.io](http://scancode.io) pipeline or from the command line.

## **binary-inspector** 

[https://github.com/aboutcode-org/binary-inspector](https://github.com/aboutcode-org/binary-inspector) 

### **What**

binary-inspector is a utility to extract symbols from various kinds of binaries, i.e. ELF, Mach-O, WinPE and other binary formats. 

### **Why**

binary-inspector supports the analysis intended to determine the code sources of a binary object and is designed to be used as a ScanCode Toolkit plugin or integrated in ScanCode.io pipelines.

### **Maintainer**

The primary binary-inspector maintainer is [@AyanSinhaMahapatra](https://github.com/AyanSinhaMahapatra) 

## **container-inspector** 

[https://github.com/aboutcode-org/container-inspector](https://github.com/aboutcode-org/container-inspector) 

### **What**

container-inspector is a tool to analyze the structure and provenance of software components in Docker images using static analysis.

### **Why**

container-inspector supports the analysis of the contents of the various layers of a container and is designed to be integrated in ScanCode.io pipelines.

### **Maintainer**

The primary container-inspector maintainers are [@JonoYang](https://github.com/JonoYang) and [@chinyeungli](https://github.com/chinyeungli) 

## **source-inspector**

[https://github.com/aboutcode-org/source-inspector](https://github.com/aboutcode-org/source-inspector) 

### **What**

source-inspector is a set of utilities to inspect and analyze source code and collect interesting data such as code symbols, strings and comments.  

### **Why**

source-inspector supports the analysis of source code and is designed to be used as a ScanCode Toolkit plugin

### **Maintainer**

The primary source-inspector maintainer is [@JonoYang](https://github.com/JonoYang) 

## **nuget-inspector** 

[https://github.com/aboutcode-org/nuget-inspector](https://github.com/aboutcode-org/nuget-inspector) 

### **What**

nuget-inspector is a tool to inspect manifests and code to resolve dependencies (vulnerable and non-vulnerable) for nuget packages.  

### **Why**

Nuget-inspector provides a reliable way to analyze .NET code projects and their dependencies independently of the availability of a dotnet SDK installed on the machine that runs this analysis. It is a comprehensive tool that can handle every style of .NET and NuGet projects and package layouts, manifests and lockfiles.

### **Maintainer**

The primary nuget-inspector maintainer is [@JonoYang](https://github.com/JonoYang)

## **python-inspector** 

[https://github.com/aboutcode-org/python-inspector](https://github.com/aboutcode-org/python-inspector) 

### **What**

python-inspector is a tool to inspect manifests and code to resolve dependencies (vulnerable and non-vulnerable) for python packages.  

### **Why**

python-inspector supports ScanCode to find and analyze PyPI archives and installed Python packages and their files. It is a comprehensive library that can handle every style of Python package layouts, manifests and lockfiles.

### **Maintainer**

The primary python-inspector maintainers are [@TG1999](https://github.com/TG1999) and  [@chinyeungli](https://github.com/chinyeungli) 

## **debian-inspector**  

[https://github.com/aboutcode-org/debian-inspector](https://github.com/aboutcode-org/debian-inspector) 

### **What**

debian-inspector is a tool to inspect debian codebases.  

### **Why**

debian-inspector is more flexible than other libraries, capable of parsing and inspecting almost correct control files that are not fully machine readable. 

### **Maintainer**

The primary debian-inspector maintainers are [@JonoYang](https://github.com/JonoYang) and  [@AyanSinhaMahapatra](https://github.com/AyanSinhaMahapatra) 

## **elf-inspector** 

[https://github.com/aboutcode-org/elf-inspector](https://github.com/aboutcode-org/elf-inspector) 

### **What**

elf-inspector is a set of utilities to inspect binary ELF files and collect interesting data from them. 

### **Why**

elf-inspector is designed to be used as a ScanCode Toolkit plugin as well as integrated in ScanCode.io pipelines.

### **Maintainer**

The primary elf-inspector maintainer is [@AyanSinhaMahapatra](https://github.com/AyanSinhaMahapatra) 

## **go-inspector** 

[https://github.com/aboutcode-org/go-inspector](https://github.com/aboutcode-org/go-inspector) 

### **What**

go-inspector is a utility to extract dependencies and symbols from Go binaries.  

### **Why**

go-inspector is designed to be used as a ScanCode Toolkit plugin as well as integrated in ScanCode.io pipelines. 

### **Maintainer**

The primary go-inspector maintainer is [@JonoYang](https://github.com/JonoYang)


## **rust-inspector** 

[https://github.com/aboutcode-org/rust-inspector](https://github.com/aboutcode-org/rust-inspector) 

### **What**

rust-inspector is a utility to extract dependencies and symbols from Rust binaries.

### **Why**

rust-inspector is designed to be used as a ScanCode Toolkit plugin as well as integrated in ScanCode.io pipelines. 

### **Maintainer**

The primary rust-inspector maintainer is [@AyanSinhaMahapatra](https://github.com/AyanSinhaMahapatra)


# **AboutCode Libraries**

## **license-expression**

[https://github.com/aboutcode-org/license-expression](https://github.com/aboutcode-org/license-expression) 

### **What**

license-expression is a library to parse, analyze, compare and normalize SPDX and SPDX-like license expressions using a boolean logic expression engine. The underlying boolean engine is at: [https://github.com/bastikr/boolean.py](https://github.com/bastikr/boolean.py) .

### **Why**

license-expression  is designed to be used as a ScanCode Toolkit plugin as well as integrated in ScanCode.io pipelines. 

### **Maintainer**

The primary license-expression maintainer is [@AyanSinhaMahapatra](https://github.com/AyanSinhaMahapatra) 

## **commoncode**

[https://github.com/aboutcode-org/commoncode](https://github.com/aboutcode-org/commoncode) 

### **What**

commoncode provides a set of common functions and utilities for handling various things like paths, dates, files and hashes.

### **Why**

commoncode is shared by multiple AboutCode projects. 

### **Maintainer**

The primary commoncode maintainer is [@AyanSinhaMahapatra](https://github.com/AyanSinhaMahapatra) 


## **extractcode** 

[https://github.com/aboutcode-org/extractcode](https://github.com/aboutcode-org/extractcode) 

### **What**

extractcode is a mostly universal file extraction library and CLI tool to extract almost any archive in a reasonably safe way on Linux, macOS and Windows.

### **Why**

extractcode supports  one of the largest number of archive formats and will extract things where other archive and compressed file extractors may fail.

### **Maintainer**

The primary extractcode maintainer is [@JonoYang](https://github.com/JonoYang)


## **fetchcode**

[https://github.com/aboutcode-org/fetchcode](https://github.com/aboutcode-org/fetchcode) 

### **What**

fetchcode is a utility to reliably fetch any code via HTTP, FTP and version control systems such as git.

### **Why**

It is surprisingly difficult to have a simple API to consistently fetch code from package repositories, version control repositories and APIs: each site and each package manager has its own unique and peculiar ways. FetchCode's goal is to abstract all these details and make it easy to fetch things reliably. 

### **Maintainer**

The primary fetchcode maintainer is [@JonoYang](https://github.com/JonoYang)


# **Other AboutCode Tools**

## **aboutcode-toolkit**

[https://github.com/aboutcode-org/aboutcode-toolkit](https://github.com/aboutcode-org/aboutcode-toolkit) 

### **What**

aboutcode-toolkit is a set of command line tools to document the provenance of your code and generate attribution notices. aboutcode-toolkit uses small yaml files to document code provenance inside a codebase.

### **Why**

The aboutcode-toolkit and ABOUT files provide a simple way to document the origin, license, usage and other important or interesting information about third-party software components that you use in your project. 

### **Maintainer**

The primary aboutcode-toolkit maintainer is [@chinyeungli](https://github.com/chinyeungli)


## **univers**

[https://github.com/aboutcode-org/univers](https://github.com/aboutcode-org/univers) 

### **What**

univers is a Python package to parse and compare all package versions and package version ranges. Parse and compare all the package versions and all the ranges. From debian, npm, pypi, ruby and more. Process all the version range specs and expressions. 

### **Why**

univers provides a mostly universal way to store version ranges and to compare two software package versions in VulnerableCode.

### **Maintainer**

The primary univers maintainer is [@TG1999](https://github.com/TG1999)


## **federatedcode**

[https://github.com/aboutcode-org/federatedcode](https://github.com/aboutcode-org/federatedcode) 

### **What**

federatedcode is a decentralized, federated metadata system for open source software code and security information.

### **Why**

federatedcode is funded, supported and sponsored by multiple global organizations. 

### **Maintainer**

The primary federatedcode maintainer is [@keshav-space](https://github.com/keshav-space)


## **AboutCode Data**

### **What**

AboutCode Data is a simple set of conventions to define data structures that all the AboutCode tools can understand and use to exchange data. ABOUT files and ScanCode Toolkit data are examples of this approach.

### **Why**

AboutCode Data supports other projects such as [https://libraries.io](https://libraries.io/) and [OSS Review Toolkit](https://github.com/heremaps/oss-review-toolkit) 

# **AboutCode Standards and Related Projects**

AboutCode is based on key industry standards.

## **PURL** 

[https://github.com/package-url/purl-spec](https://github.com/package-url/purl-spec) 

### **What**

A purl is a URL string used to identify and locate a software package in a mostly universal and uniform way across programming languages, package managers, packaging conventions, tools, APIs and databases. 

### **Why**

PURL supports accuracy of software identification in SBOMs. PURL originated from ScanCode and is in process to become an Ecma standard.

### **Maintainer**

The primary PURL maintainer is [@johnmhoran](https://github.com/johnmhoran)

## **VERS**

### **What**

VERS is an emerging specification for the resolution of dependency and vulnerable version ranges.

### **Why**

VERS originated as part of the PURL project and is in process to become an Ecma standard.

### **Specification**

See [https://github.com/package-url/purl-spec/blob/c29b870ab33382309eefee2a0975ef7f71fdb742/VERSION-RANGE-SPEC.rst](https://github.com/package-url/purl-spec/blob/c29b870ab33382309eefee2a0975ef7f71fdb742/VERSION-RANGE-SPEC.rst) 

## **Related FOSS orgs and projects**

We also co-started and work closely with other FOSS orgs and projects:

-   [Package URL](https://github.com/package-url): a widely used standard to identify
    precisely software packages of all types with simple, readable and concise URLs.
    The PURL standard is currently being prepared for Ecma standardization.
    See https://github.com/package-url/purl-spec/discussions for more details.

-   [SPDX](http://SPDX.org): aka System Package Data Exchange, a spec to
    document the origin and licensing of packages.

-   [CycloneDX](https://cyclonedx.org) aka. OWASP CycloneDX is a full-stack Bill
    of Materials (BOM) standard that provides advanced supply chain capabilities
    for cyber risk reduction

-   [ClearlyDefined](https://ClearlyDefined.io): a project to review and help
    FOSS projects improve their licensing and documentation clarity. This
    project is incubating with https://opensource.org
    
