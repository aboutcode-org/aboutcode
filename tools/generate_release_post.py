#!/usr/bin/env python3
"""
Generate a news post for an AboutCode project release.

This writes a reStructuredText file into docs/source/news/posts with a
consistent title and link block. It is intended to be run from CI on release
publishes or locally before opening a PR.
"""
from __future__ import annotations

import argparse
from datetime import date
from pathlib import Path
import re
import sys
from textwrap import dedent


def slugify(text: str) -> str:
    text = text.strip().lower()
    text = re.sub(r"[^a-z0-9]+", "-", text)
    text = text.strip("-")
    return text or "release"


def build_content(project: str, version: str, release_url: str, summary: str) -> str:
    title = f"{project} {version} released"
    underline = "#" * len(title)
    summary = summary or f"{project} {version} is now available."
    body = f"""
    {title}
    {underline}

    {summary}

    Highlights
    ==========
    - Release link: {release_url}

    Links
    =====
    - Release page: {release_url}
    """
    return dedent(body).lstrip("\n")


def write_post(posts_dir: Path, filename: str, content: str, force: bool) -> Path:
    posts_dir.mkdir(parents=True, exist_ok=True)
    path = posts_dir / filename
    if path.exists() and not force:
        raise FileExistsError(f"Post already exists: {path}")
    path.write_text(content, encoding="utf-8")
    return path


def parse_args(argv: list[str]) -> argparse.Namespace:
    parser = argparse.ArgumentParser(description="Generate a release news post")
    parser.add_argument("--project", required=True, help="Project name")
    parser.add_argument("--version", required=True, help="Release version tag")
    parser.add_argument("--release-url", required=True, help="Release page URL")
    parser.add_argument("--date", default=date.today().isoformat(), help="ISO date for the post filename (default: today)")
    parser.add_argument("--posts-dir", default="docs/source/news/posts", help="Directory for news posts")
    parser.add_argument("--summary", default="", help="One-line summary for the post body")
    parser.add_argument("--force", action="store_true", help="Overwrite an existing post if present")
    return parser.parse_args(argv)


def main(argv: list[str]) -> int:
    args = parse_args(argv)
    slug = slugify(args.project)
    filename = f"{args.date}-{slug}.rst"
    content = build_content(args.project, args.version, args.release_url, args.summary)

    try:
        path = write_post(Path(args.posts_dir), filename, content, args.force)
    except FileExistsError as e:
        sys.stderr.write(f"{e}\n")
        return 1

    sys.stdout.write(f"Created news post: {path}\n")
    return 0


if __name__ == "__main__":
    raise SystemExit(main(sys.argv[1:]))
