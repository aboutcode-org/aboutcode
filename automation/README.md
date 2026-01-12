# Release Automation Kit

This directory contains tools to automate the posting of release news to the `aboutcode.org` website.

## Components

1.  **`generate_release_post.py`**: A Python script that generates a formatted ReStructuredText (RST) file for the news section.
2.  **`release-workflow-template.yml`**: A GitHub Actions workflow template that can be used in AboutCode projects (like ScanCode, VulnerableCode) to automatically trigger this process on release.

## Usage

### Local Usage

You can use the script locally to generate a news file:

```bash
python3 generate_release_post.py \
  --project "ScanCode Toolkit" \
  --version "32.0.1" \
  --url "https://github.com/aboutcode-org/scancode-toolkit/releases/tag/v32.0.1" \
  --output-dir "output"
```

This will create a file like `2023-10-27-scancode-toolkit-v32.0.1-released.rst` in the output directory.

### GitHub Actions Integration

To automate this for a project:

1.  Copy `release-workflow-template.yml` to the project's `.github/workflows/` directory.
2.  Update the `PROJECT_NAME` environment variable in the workflow file.
3.  Configure the `create-pull-request` step to point to the correct `aboutcode.org` source repository (if different from the current one) and ensure a `BOT_TOKEN` with sufficient permissions is available in the repository secrets.

## Requirements

- Python 3.6+
- No external dependencies for the script (uses standard library).
