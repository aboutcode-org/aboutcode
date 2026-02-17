# AboutCode

## What is AboutCode?

AboutCode is a family of FOSS projects to uncover metadata about software:

-   where does the code come from? which software package?
-   what is its license? copyright?
-   is the code vulnerable, maintained, well coded?
-   what are its dependencies, are there vulnerabilities/licensing issues?

All these are questions that are important to answer: there are millions of free and open source software components available on the web for reuse.

Knowing where a software package comes from, what its license is and whether it is vulnerable should be a problem of the past such that everyone can safely consume more free and open source software. We support not only open source software, but also open data, generated and curated by our applications.

> [!NOTE]
> This is a repository with information on aboutcode open source activities and not the actual code repository. See the [projects section](#projects) below for links to all the code repositories of our projects with a brief overview and our [wiki](https://github.com/aboutcode-org/aboutcode/wiki) if you are looking to participate.

## Important Links

- **Homepage**: http://aboutcode.org
- **Documentation**: https://aboutcode.readthedocs.io/en/latest/
- **Chat**: [Gitter](https://app.gitter.im/#/room/#aboutcode-org_discuss:gitter.im) | [Slack](https://join.slack.com/t/aboutcode-org/shared_invite/zt-1paqwxccw-IuafuiAvYJFkTqGaZsC1og)
- **Weekly Meetings**: [Meeting Minutes](https://github.com/aboutcode-org/aboutcode/wiki/MeetingMinutes)
- **GSoC**: [Wiki](https://github.com/aboutcode-org/aboutcode/wiki)
- **Documentation Build**: ![Doc Build](https://github.com/aboutcode-org/aboutcode/actions/workflows/docs-ci.yml/badge.svg)

> [!TIP]
> To manually build the documentation, run `make docs` from the root of this repo.
>
> Alternatively, you can use Docker to build and serve the documentation with live-reload:
> ```bash
> docker-compose up
> ```
> The documentation will be available at http://localhost:8000.

## Contributing

We welcome contributions! Whether you're fixing bugs, adding features, or improving documentation, we'd love your help.

**Get started:**
- Read our [CONTRIBUTING.md](CONTRIBUTING.md) guide
- Look for [good first issues](https://github.com/search?q=org%3Aaboutcode-org+label%3A%22good+first+issue%22+state%3Aopen&type=Issues)
- Join our [community chat](https://app.gitter.im/#/room/#aboutcode-org_discuss:gitter.im)

## Projects

### Core Tools

| Project | Description | Maintainer |
|---------|-------------|------------|
| [ScanCode Toolkit](https://github.com/aboutcode-org/scancode-toolkit) | Detect origin, license, and vulnerabilities in code, packages, and dependencies | [@AyanSinhaMahapatra](https://github.com/AyanSinhaMahapatra) |
| [ScanCode.io](https://github.com/aboutcode-org/scancode.io) | Web UI and API for running complex scans in pipelines with CycloneDX and SPDX support | [@tdruez](https://github.com/tdruez) |
| [ScanCode LicenseDB](https://github.com/aboutcode-org/scancode-licensedb) | Free database of 2400+ software licenses with metadata and detection rules ([public instance](https://scancode-licensedb.aboutcode.org/)) | [@AyanSinhaMahapatra](https://github.com/AyanSinhaMahapatra), [@DennisClark](https://github.com/DennisClark) |
| [ScanCode Workbench](https://github.com/aboutcode-org/scancode-workbench) | Desktop application to visualize and review ScanCode Toolkit scan results | [@AyanSinhaMahapatra](https://github.com/AyanSinhaMahapatra), [@mjherzog](https://github.com/mjherzog) |
| [DejaCode](https://github.com/aboutcode-org/dejacode) | Enterprise application for open source license compliance and supply chain integrity | [@tdruez](https://github.com/tdruez), [@DennisClark](https://github.com/DennisClark) |
| [VulnerableCode](https://github.com/aboutcode-org/vulnerablecode) | Database of software package vulnerabilities with Web UI and API ([public instance](https://public.vulnerablecode.io/)) | [@TG1999](https://github.com/TG1999), [@keshav-space](https://github.com/keshav-space) |
| [PURLDB](https://github.com/aboutcode-org/purldb) | Database of package metadata keyed by PURL with API access | [@JonoYang](https://github.com/JonoYang) |

### Inspectors

Special-purpose analysis tools that run as ScanCode Toolkit plugins, ScanCode.io pipeline steps, or from the command line.

| Project | Description | Maintainer |
|---------|-------------|------------|
| [binary-inspector](https://github.com/aboutcode-org/binary-inspector) | Extract symbols from ELF, Mach-O, WinPE and other binary formats | [@AyanSinhaMahapatra](https://github.com/AyanSinhaMahapatra) |
| [container-inspector](https://github.com/aboutcode-org/container-inspector) | Analyze structure and provenance of Docker image layers | [@JonoYang](https://github.com/JonoYang), [@chinyeungli](https://github.com/chinyeungli) |
| [source-inspector](https://github.com/aboutcode-org/source-inspector) | Inspect source code to collect symbols, strings, and comments | [@JonoYang](https://github.com/JonoYang) |
| [nuget-inspector](https://github.com/aboutcode-org/nuget-inspector) | Resolve dependencies for .NET/NuGet projects without requiring dotnet SDK | [@JonoYang](https://github.com/JonoYang) |
| [python-inspector](https://github.com/aboutcode-org/python-inspector) | Analyze PyPI packages and resolve Python dependencies | [@TG1999](https://github.com/TG1999), [@chinyeungli](https://github.com/chinyeungli) |
| [debian-inspector](https://github.com/aboutcode-org/debian-inspector) | Parse and inspect Debian control files and codebases | [@JonoYang](https://github.com/JonoYang), [@AyanSinhaMahapatra](https://github.com/AyanSinhaMahapatra) |
| [elf-inspector](https://github.com/aboutcode-org/elf-inspector) | Inspect binary ELF files and collect metadata | [@AyanSinhaMahapatra](https://github.com/AyanSinhaMahapatra) |
| [go-inspector](https://github.com/aboutcode-org/go-inspector) | Extract dependencies and symbols from Go binaries | [@JonoYang](https://github.com/JonoYang) |
| [rust-inspector](https://github.com/aboutcode-org/rust-inspector) | Extract dependencies and symbols from Rust binaries | [@AyanSinhaMahapatra](https://github.com/AyanSinhaMahapatra) |

### Libraries

| Project | Description | Maintainer |
|---------|-------------|------------|
| [license-expression](https://github.com/aboutcode-org/license-expression) | Parse, analyze, and normalize SPDX license expressions | [@AyanSinhaMahapatra](https://github.com/AyanSinhaMahapatra) |
| [commoncode](https://github.com/aboutcode-org/commoncode) | Common utilities for paths, dates, files, and hashes | [@AyanSinhaMahapatra](https://github.com/AyanSinhaMahapatra) |
| [extractcode](https://github.com/aboutcode-org/extractcode) | Universal archive extraction library and CLI tool | [@JonoYang](https://github.com/JonoYang) |
| [fetchcode](https://github.com/aboutcode-org/fetchcode) | Reliably fetch code via HTTP, FTP, and version control systems | [@JonoYang](https://github.com/JonoYang) |

### Other Tools

| Project | Description | Maintainer |
|---------|-------------|------------|
| [aboutcode-toolkit](https://github.com/aboutcode-org/aboutcode-toolkit) | Document code provenance and generate attribution notices using ABOUT files | [@chinyeungli](https://github.com/chinyeungli) |
| [univers](https://github.com/aboutcode-org/univers) | Parse and compare package versions across all ecosystems | [@TG1999](https://github.com/TG1999) |
| [federatedcode](https://github.com/aboutcode-org/federatedcode) | Decentralized, federated metadata system for open source software | [@keshav-space](https://github.com/keshav-space) |

### AboutCode Data

AboutCode Data is a set of conventions for data structures that all AboutCode tools can use to exchange data. ABOUT files and ScanCode Toolkit data are examples of this approach, supporting projects like [libraries.io](https://libraries.io/) and [OSS Review Toolkit](https://github.com/heremaps/oss-review-toolkit).

## Standards and Related Projects

AboutCode is based on key industry standards and works closely with other FOSS organizations:

### PURL (Package URL)

[PURL](https://github.com/package-url/purl-spec) is a URL string used to identify and locate software packages universally across programming languages, package managers, and tools. It originated from ScanCode and is in process to become an Ecma standard.

**Maintainer**: [@johnmhoran](https://github.com/johnmhoran)

### VERS (Version Range Specification)

VERS is an emerging specification for resolving dependency and vulnerable version ranges. It originated as part of the PURL project and is in process to become an Ecma standard.

**Specification**: [VERSION-RANGE-SPEC.rst](https://github.com/package-url/purl-spec/blob/c29b870ab33382309eefee2a0975ef7f71fdb742/VERSION-RANGE-SPEC.rst)

### Related Organizations

-   [Package URL](https://github.com/package-url): A widely used standard to identify software packages with simple, readable URLs. See the [PURL discussions](https://github.com/package-url/purl-spec/discussions) for Ecma standardization details.

-   [SPDX](http://SPDX.org): System Package Data Exchange, a specification to document the origin and licensing of packages.

-   [CycloneDX](https://cyclonedx.org): OWASP CycloneDX is a full-stack Bill of Materials (BOM) standard for supply chain security.

-   [ClearlyDefined](https://ClearlyDefined.io): A project to help FOSS projects improve their licensing and documentation clarity (incubating with [opensource.org](https://opensource.org)).

---

**License**: Apache License 2.0 | **Code of Conduct**: [CODE_OF_CONDUCT.rst](CODE_OF_CONDUCT.rst)
