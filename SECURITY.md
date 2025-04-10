# Security Policy

## Supported Versions

We provide security updates for the following versions of our projects:

| Project | Version | Supported          |
| ------- | ------- | ------------------ |
| ScanCode Toolkit | >= 32.0.0 | :white_check_mark: |
| ScanCode.io | >= 32.0.0 | :white_check_mark: |
| VulnerableCode | >= 32.0.0 | :white_check_mark: |
| AboutCode Toolkit | >= 32.0.0 | :white_check_mark: |

## Reporting a Vulnerability

**IMPORTANT: Do not publicly disclose security vulnerabilities. Instead, please email security@aboutcode.org with details.**

We take the security of our software seriously. If you believe you've found a security vulnerability, please follow these steps:

1. Email your findings to security@aboutcode.org
2. Include as much information as possible about the vulnerability
3. Do not disclose the vulnerability publicly until it has been addressed
4. We will acknowledge receipt of your vulnerability report within 48 hours
5. We will provide a more detailed response within 7 days indicating the next steps

## Security Process

1. **Initial Response**: We will acknowledge receipt of your report within 48 hours
2. **Verification**: Our security team will verify the vulnerability
3. **Fix Development**: We will develop a fix for the vulnerability
4. **Testing**: The fix will be thoroughly tested
5. **Release**: A new version will be released with the fix
6. **Disclosure**: We will coordinate public disclosure with you

## Security Updates

Security updates are released as new versions of our software. We recommend always using the latest version of our tools.

## Security Team

Our security team consists of core maintainers and security experts who review and address security reports.

## Acknowledgments

We appreciate the efforts of security researchers who help us keep our software secure. We will acknowledge your contribution in our security advisories unless you request otherwise.

## Security Practices

### Code Security

- All code changes are reviewed by at least one maintainer
- We use automated security scanning tools in our CI/CD pipeline
- Dependencies are regularly audited and updated
- We follow secure coding practices and guidelines

### Data Security

- We do not store sensitive user data
- All data processing is done locally unless explicitly configured otherwise
- API keys and credentials are never stored in the codebase
- We use environment variables for sensitive configuration

### Infrastructure Security

- Regular security updates are applied to our infrastructure
- Access to production systems is restricted and monitored
- We use secure communication protocols (HTTPS, SSH)
- Regular security audits are performed

## Responsible Disclosure

We believe in responsible disclosure and will work with security researchers to address vulnerabilities in a timely manner. We will not take legal action against security researchers who report vulnerabilities according to this policy.

## Security Contacts

- Primary: security@aboutcode.org
- Backup: pombredanne@gmail.com

## Additional Resources

- [GitHub Security Advisory Database](https://github.com/advisories)
- [OpenSSF Security Scorecard](https://securityscorecards.dev)
- [Package Repository Security Principles](https://repos.openssf.org/principles-for-package-repository-security) 