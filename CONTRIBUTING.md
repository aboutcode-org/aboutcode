# Contributing to AboutCode

Thank you for your interest in contributing to AboutCode! We are a family of open source projects working to uncover metadata about software. We welcome contributions from everyone, whether you're fixing a typo, adding a feature, or helping with documentation.

> AboutCode is for everyone. We're here to help if you have questions or need guidance along the way.

## Quick Start

### Prerequisites

Most AboutCode projects use Python and standard development tools. Check the specific project's README for detailed requirements.

### Get the Code

```bash
# Fork the repository on GitHub, then:
git clone https://github.com/YOUR_USERNAME/PROJECT_NAME.git
cd PROJECT_NAME

# Follow project-specific setup instructions in the README
```

### Run Tests

```bash
# Most projects use:
pytest

# Check the project's README or CI configuration for specifics
```

---

## Ways to Contribute

### 🌱 First Timers

New to open source? No problem! We maintain [good first issues](https://github.com/search?q=org%3Aaboutcode-org+label%3A%22good+first+issue%22+state%3Aopen&type=Issues) across our projects to help you get started.

### 💻 Code Contributions

- **Report a Bug**: Open an issue with detailed steps to reproduce
- **Fix a Bug**: Check existing issues labeled `bug`
- **Request a Feature**: Open an issue to discuss before implementing
- **Improve Performance**: Profile first, then optimize with benchmarks

> **Important**: Keep PRs small and focused. One logical change per PR makes review faster and merge easier.

### 📚 Documentation

Documentation is critical! Help us by:
- Fixing typos or clarifying confusing sections
- Adding examples or tutorials
- Improving API documentation
- Writing how-to guides

See our [documentation contribution guide](https://github.com/aboutcode-org/aboutcode/blob/main/docs/source/contributing/contrib_doc.rst) for technical details.

### 💬 Other Ways

- Help answer questions on [Gitter](https://gitter.im/aboutcode-org/discuss)
- Join our [community meetings](https://github.com/aboutcode-org/aboutcode/wiki/MeetingMinutes)
- Share your use case or provide feedback
- Improve translations

---

## Development Workflow

### 1. Fork and Clone

Fork the repository on GitHub, then clone your fork locally.

### 2. Create a Branch

```bash
git checkout -b fix/issue-123-short-description
```

Use descriptive branch names: `fix/`, `feat/`, `docs/`, etc.

###  3. Make Your Changes

**KEY PRINCIPLE: Small PRs**

- Focus on **one** logical change per PR
- If fixing multiple issues, create separate PRs
- Smaller changes = faster reviews = quicker merges

**Code Style:**

- **Match the existing style** of the project you're contributing to
- Run the project's linter before committing
- Follow PEP 8 for Python projects (most AboutCode projects)
- Add tests for new features or bug fixes

### 4. Reference Issues Properly

When referencing issues in your commits or code:

- **In commit messages within the same repo**: Use shorthand like `Fixes #123`
- **In code comments or cross-repo references**: Use full URLs like `https://github.com/aboutcode-org/aboutcode/issues/123`

This prevents broken references when code moves between repositories. See [our issue referencing guidelines](https://github.com/aboutcode-org/aboutcode/blob/main/docs/source/contributing/writing_good_commit_messages.rst) for details.

### 5. Write Good Commit Messages

Follow our [commit message guidelines](https://github.com/aboutcode-org/aboutcode/blob/main/docs/source/contributing/writing_good_commit_messages.rst):

- Use the imperative mood: "Add feature" not "Added feature"
- Keep the subject line under 50 characters
- Add a blank line before the body
- Explain **what** and **why**, not **how**
- Reference issue numbers

Example:
```
Add support for SPDX 2.3 format (#456)

The previous implementation only supported SPDX 2.2. This adds
parsing support for the new 2.3 fields while maintaining backwards
compatibility.

Fixes https://github.com/aboutcode-org/aboutcode/issues/456

Signed-off-by: Your Name <your.email@example.com>
```

### 6. Sign Your Commits (DCO)

We use the [Developer Certificate of Origin (DCO)](https://developercertificate.org/). Add a `Signed-off-by` line to your commits:

```bash
git commit -s -m "Your commit message"
```

The `-s` flag automatically adds your sign-off.

### 7. Push and Create a Pull Request

```bash
git push origin fix/issue-123-short-description
```

Then create a Pull Request on GitHub:
- Fill out the PR template
- Link to the related issue
- Explain what changed and why
- Add screenshots for UI changes

### 8. Respond to Review Feedback

- Address reviewer comments promptly
- Ask questions if feedback is unclear
- Push additional commits to your branch as needed
- Thank reviewers for their time!

---

## Project-Specific Guidelines

Different AboutCode projects may have additional requirements:

- **[ScanCode Toolkit](https://github.com/aboutcode-org/scancode-toolkit)**: Comprehensive code scanning
- **[VulnerableCode](https://github.com/aboutcode-org/vulnerablecode)**: See [importer/improver guides](https://vulnerablecode.readthedocs.io/en/latest/contributing.html)
- **[ScanCode.io](https://github.com/aboutcode-org/scancode.io)**: See [pipeline development](https://scancodeio.readthedocs.io/en/latest/contributing.html)
- **[DejaCode](https://github.com/aboutcode-org/dejacode)**: Enterprise license compliance

Check each project's `CONTRIBUTING.md` or documentation for specifics.

---

## Resources

### Documentation

- [AboutCode Documentation](https://aboutcode.readthedocs.io/)
- [Documentation Contribution Guide](https://github.com/aboutcode-org/aboutcode/blob/main/docs/source/contributing/contrib_doc.rst)
- [Writing Good Commit Messages](https://github.com/aboutcode-org/aboutcode/blob/main/docs/source/contributing/writing_good_commit_messages.rst)

### Community

- [Gitter Chat](https://gitter.im/aboutcode-org/discuss)
- [Weekly Meetings](https://github.com/aboutcode-org/aboutcode/wiki/MeetingMinutes)
- [Homepage](https://aboutcode.org)

### Learning Resources

- [How to Contribute to Open Source (egghead.io)](https://egghead.io/courses/how-to-contribute-to-an-open-source-project-on-github)
- [Pro Git Book](https://git-scm.com/book/en/v2)
- [How to Write a Good Bug Report](https://www.softwaretestinghelp.com/how-to-write-good-bug-report/)

### Finding Issues

- [Good First Issues (All Projects)](https://github.com/search?q=org%3Aaboutcode-org+label%3A%22good+first+issue%22+state%3Aopen&type=Issues)
- [Help Wanted Issues](https://github.com/search?q=org%3Aaboutcode-org+label%3A%22help+wanted%22+state%3Aopen&type=Issues)
- [Documentation Issues](https://github.com/search?q=org%3Aaboutcode-org+label%3Adocumentation+state%3Aopen&type=Issues)

---

## License and Copyright

By contributing to AboutCode, you agree to license your contributions under the same license as the project (typically Apache-2.0). You also certify that you have the right to make the contribution under the [Developer Certificate of Origin](https://developercertificate.org/).

---

## Questions?

- **General questions**: Ask on [Gitter](https://gitter.im/aboutcode-org/discuss)
- **Bug reports**: Open an issue in the relevant project
- **Security issues**: Email security@aboutcode.org (do not open public issues)

Thank you for contributing to AboutCode! 🎉
