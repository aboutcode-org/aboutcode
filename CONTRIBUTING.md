# Contributing Guide

Welcome! We’re glad you’re interested in contributing to projects like ScanCode.io, VulnerableCode, and DejaCode.  
This guide covers the basics to help you get started quickly and smoothly.

---

## 1. Getting Started

1. **Find or open an issue**  
   Check the issue tracker for existing discussions.  
   If you plan a larger change or new feature, please open an issue first so we can align on the approach.

2. **Fork and clone the repository**  
   Fork the repo on GitHub and clone your fork locally.

3. **Create a new branch**  
   Use a short, descriptive branch name such as:  
   - `fix/update-readme`  
   - `feature/new-api-endpoint`

4. **Develop and test locally**  
   Write your code and make sure tests pass before opening a Pull Request.

---

## 2. Code Quality and Standards

### 2.1. Code Style

Most AboutCode repositories use **PEP8** conventions. Tools like **Black** and **isort** are commonly used for formatting and import sorting.

To format your code automatically, many projects support:

```bash
make valid
```

### 2.2. pre-commit Hooks (Optional but Recommended)

If the repository includes a `.pre-commit-config.yaml`, you can enable automatic checks to run before every commit:

```bash
pip install pre-commit
pre-commit install
```

This helps catch formatting and simple issues early.

### 2.3. Developer Certificate of Origin (DCO)

All contributions require a DCO sign-off.  
Add this automatically by committing with:

```bash
git commit -s
```

Each commit message must include a line like:

```
Signed-off-by: Your Name <email@example.com>
```

### 2.4. Tests

If you fix a bug, add a test that fails before your change and passes afterward.  
If you introduce a new feature, include tests that cover the new functionality.

Run the full test suite locally:

```bash
make test
```

---

## 3. Submitting Your Pull Request

When your branch is ready:

1. Push it to your fork.
2. Open a Pull Request against the main branch of the original repository.

A helpful PR includes:

- [ ] **Linked Issue** (e.g., “Fixes #123”)  
- [ ] **Passing Tests** (local + CI)  
- [ ] **DCO Signed** on all commits  
- [ ] **Changelog/Docs Updated** if the change affects behavior  

Thanks for contributing! We appreciate your time and effort.