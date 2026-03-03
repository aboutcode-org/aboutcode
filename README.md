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

## Contributing

We welcome contributions! Whether you're fixing bugs, adding features, or improving documentation, we'd love your help.

**Get started:**
- Read our [CONTRIBUTING.md](CONTRIBUTING.md) guide
- Look for [good first issues](https://github.com/search?q=org%3Aaboutcode-org+label%3A%22good+first+issue%22+state%3Aopen&type=Issues)
- Join our [community chat](https://app.gitter.im/#/room/#aboutcode-org_discuss:gitter.im)

## Projects

For the latest list of AboutCode projects and tools, please visit our website:

- [AboutCode Projects](https://www.aboutcode.org/projects/)

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
