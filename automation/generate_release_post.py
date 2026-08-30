#!/usr/bin/env python3
"""
Release Post Generator for AboutCode.org

This script generates a news post file for a new project release.
It is designed to be used in GitHub Actions workflows.

Usage:
    python3 generate_release_post.py --project "Project Name" --version "1.0.0" --url "https://..." --date "2023-10-27" --output-dir "news"
"""

import argparse
import os
import sys
from datetime import datetime

TEMPLATE = """
{title}
{title_underline}

AboutCode is happy to announce the release of **{project} v{version}**!

Check out the full release notes and download it here:
{url}

Visit the project homepage:
{homepage}

-- The AboutCode Team
"""

PROJECT_HOMEPAGES = {
    "ScanCode Toolkit": "https://github.com/aboutcode-org/scancode-toolkit",
    "ScanCode.io": "https://github.com/aboutcode-org/scancode.io",
    "VulnerableCode": "https://github.com/aboutcode-org/vulnerablecode",
    "DejaCode": "https://github.com/aboutcode-org/dejacode",
    "PURLDB": "https://github.com/aboutcode-org/purldb",
}

def generate_post(project, version, url, date_str, output_dir):
    """Generates the release post file."""
    
    # Format the title
    title = f"{project} v{version} released"
    title_underline = "=" * len(title)
    
    # Get homepage or default to github organization
    homepage = PROJECT_HOMEPAGES.get(project, "https://github.com/aboutcode-org")
    
    content = TEMPLATE.format(
        title=title,
        title_underline=title_underline,
        project=project,
        version=version,
        url=url,
        homepage=homepage
    ).strip()
    
    # Create filename: YYYY-MM-DD-project-vVERSION-released.rst (Sphinx uses RST usually)
    # Using RST as AboutCode docs are RST-heavy
    safe_project_name = project.lower().replace(" ", "-").replace(".", "")
    filename = f"{date_str}-{safe_project_name}-v{version}-released.rst"
    
    if output_dir:
        os.makedirs(output_dir, exist_ok=True)
        filepath = os.path.join(output_dir, filename)
    else:
        filepath = filename

    with open(filepath, "w", encoding="utf-8") as f:
        f.write(content)
        f.write("\n")
        
    print(f"Successfully generated release post: {filepath}")
    return filepath

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Generate AboutCode release post")
    parser.add_argument("--project", required=True, help="Project name (e.g., ScanCode.io)")
    parser.add_argument("--version", required=True, help="Release version (e.g., 32.0.1)")
    parser.add_argument("--url", required=True, help="Release URL")
    parser.add_argument("--date", help="Date in YYYY-MM-DD format (default: today)")
    parser.add_argument("--output-dir", default=".", help="Directory to save the file")
    
    args = parser.parse_args()
    
    date_str = args.date if args.date else datetime.now().strftime("%Y-%m-%d")
    
    try:
        generate_post(args.project, args.version, args.url, date_str, args.output_dir)
    except Exception as e:
        print(f"Error: {e}", file=sys.stderr)
        sys.exit(1)
