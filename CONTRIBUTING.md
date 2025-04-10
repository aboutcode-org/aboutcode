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

1. **Never Use `assert` Statements in Production Code**
   - `assert` statements are removed when running with Python's `-O` or `-OO` flags
   - They should only be used for debugging and testing purposes
   - Using `assert` in production code can lead to silent failures
   - Example of what NOT to do:
     ```python
     # Bad: Using assert in production code
     assert len(items) > 0, "Items list cannot be empty"
     ```

2. **Use Proper Exception Handling**
   - Use built-in exceptions when appropriate:
     - `ValueError`: For invalid values
     - `TypeError`: For invalid types
     - `KeyError`: For missing dictionary keys
     - `IndexError`: For invalid sequence indices
     - `FileNotFoundError`: For missing files
   - Create custom exceptions for project-specific cases
   - Example of good practice:
     ```python
     # Good: Using proper exception handling
     if not items:
         raise ValueError("Items list cannot be empty")
     ```

3. **Exception Documentation**
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

4. **Error Messages**
   - Make error messages clear and actionable
   - Include relevant context in the error message
   - Example:
     ```python
     # Bad: Unclear error message
     raise ValueError("Invalid input")
     
     # Good: Clear, actionable error message
     raise ValueError(
         f"Invalid input: expected positive integer, got {value} of type {type(value)}"
     )
     ```

5. **Testing Error Cases**
   - Write tests for error conditions
   - Use `pytest.raises` to test expected exceptions
   - Example:
     ```python
     def test_process_items_empty_list():
         with pytest.raises(ValueError, match="items list cannot be empty"):
             process_items([])
     ```