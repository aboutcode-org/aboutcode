# Contributing to AboutCode Projects

This document provides unified contribution guidelines for all AboutCode projects. It aims to standardize development practices across our ecosystem while maintaining the flexibility needed for individual projects.

## General Guidelines

### Pull Request Best Practices

1. **Keep PRs Small and Focused**
   - Each PR should address a single concern
   - Break large changes into smaller, logically separated PRs
   - Aim for PRs that can be reviewed in under 30 minutes

2. **Code Style and Consistency**
   - Follow the existing code style of the repository you're contributing to
   - Use the repository's established patterns and idioms
   - Run code formatters before submitting (see [Code Formatting](#code-formatting) below)

3. **Dependencies**
   - Avoid introducing new dependencies unless absolutely necessary
   - When adding a dependency, provide clear justification in the PR description
   - Consider the maintenance burden and security implications of new dependencies
   - Prefer well-maintained, widely-used packages over custom solutions

## Code Formatting and Tools

### Python Projects

We are standardizing our Python tooling across repositories:

#### Code Formatting
- Primary formatter: [Ruff](https://github.com/astral-sh/ruff) for both linting and formatting
- Configuration: Each repository contains a `pyproject.toml` with project-specific settings
- Line length: 100 characters (standardized across projects)

#### Code Quality Tools
- Type checking: `mypy`
- Testing: `pytest`
- Coverage: `pytest-cov`

### Tool Configuration

Project-specific configurations are maintained in:
- `pyproject.toml` for Python tooling
- `.pre-commit-config.yaml` for git hooks
- `setup.cfg` or `setup.py` for package configuration

## Development Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/nexB/<repository-name>
   cd <repository-name>
   ```

2. Create and activate a virtual environment:
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. Install development dependencies:
   ```bash
   pip install -e ".[dev]"
   ```

4. Install pre-commit hooks:
   ```bash
   pre-commit install
   ```

## Testing

- Write tests for new features and bug fixes
- Maintain or improve code coverage
- Run the full test suite before submitting a PR:
  ```bash
  pytest
  ```

## Documentation

- Update documentation for new features or changes
- Follow the repository's documentation style
- Include docstrings for public APIs
- Update README.md if necessary

## Commit Messages

Follow the conventional commits specification:
```
type(scope): description

[optional body]

[optional footer]
```

Types:
- feat: New feature
- fix: Bug fix
- docs: Documentation changes
- style: Code style changes (formatting, etc.)
- refactor: Code refactoring
- test: Adding or updating tests
- chore: Maintenance tasks

## Review Process

1. **Before Submitting**
   - Run all tests
   - Run code formatters
   - Update documentation
   - Verify commit messages

2. **During Review**
   - Respond to feedback promptly
   - Keep discussions focused on the code
   - Update PR based on feedback

## Project-Specific Guidelines

While this document provides general guidelines, some projects may have additional requirements. Always check:
1. Project's README.md
2. Project-specific contributing guidelines
3. Project-specific documentation

## Getting Help

- Join our [community chat](https://gitter.im/aboutcode-org/discuss)
- Open an issue for questions
- Tag maintainers in PR discussions when needed

## Tooling Updates

We maintain a central repository of development tools and configurations at [aboutcode-toolkit](https://github.com/nexB/aboutcode-toolkit). Changes to standardized tooling should be proposed there first.

### Current Standard Tools

| Tool | Purpose | Configuration |
|------|----------|--------------|
| Ruff | Linting & Formatting | pyproject.toml |
| mypy | Type Checking | pyproject.toml |
| pytest | Testing | pytest.ini |
| pre-commit | Git Hooks | .pre-commit-config.yaml |

## Reference Implementation

The [python-inspector](https://github.com/nexB/python-inspector) repository serves as our reference implementation for these guidelines. New projects should use it as a template, and existing projects should gradually align with its practices.

## Error Handling

### Best Practices

1. **Avoid Using `assert` Statements**
   - `assert` statements are removed when running with Python's `-O` or `-OO` flags
   - They should only be used for debugging and testing purposes
   - Instead, use proper exception handling with descriptive error messages

2. **Proper Exception Handling**
   - Use built-in exceptions when appropriate (ValueError, TypeError, etc.)
   - Create custom exceptions for project-specific error cases
   - Include descriptive error messages that help users understand and fix the issue
   - Document exceptions in function docstrings

3. **Example of Good Error Handling**
   ```python
   # Bad: Using assert
   assert len(items) > 0, "Items list cannot be empty"
   
   # Good: Using proper exception
   if not items:
       raise ValueError("Items list cannot be empty")
   ```

4. **Exception Documentation**
   - Document all exceptions that a function can raise
   - Use the `:raises:` directive in docstrings
   - Example:
     ```python
     def process_items(items):
         """Process a list of items.
         
         Args:
             items: List of items to process
             
         Returns:
             Processed items
             
         Raises:
             ValueError: If items list is empty
             TypeError: If items is not a list
         """
         if not isinstance(items, list):
             raise TypeError("items must be a list")
         if not items:
             raise ValueError("items list cannot be empty")
         # ... rest of the function
     ```