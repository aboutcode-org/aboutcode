#!/usr/bin/env python3
"""Check for `assert` statements in non-test Python files.

Exit code 1 if any `assert` nodes are found outside tests/docs.
"""
from __future__ import annotations

import ast
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
EXCLUDE_DIRS = {"tests", "test", "docs", "doc", ".venv", "venv", "build", "dist", "__pycache__"}


def is_excluded(path: Path) -> bool:
    for part in path.parts:
        if part in EXCLUDE_DIRS:
            return True
    return False


def find_asserts() -> list[tuple[Path, int, str]]:
    results: list[tuple[Path, int, str]] = []
    for p in ROOT.rglob("*.py"):
        if is_excluded(p):
            continue
        try:
            src = p.read_text(encoding="utf-8")
        except Exception:
            continue
        try:
            tree = ast.parse(src)
        except Exception:
            continue
        for node in ast.walk(tree):
            if isinstance(node, ast.Assert):
                try:
                    seg = ast.get_source_segment(src, node.test) or ""
                except Exception:
                    seg = ""
                results.append((p, node.lineno, seg))
                break
    return results


def main() -> int:
    found = find_asserts()
    if not found:
        print("No `assert` statements found in non-test Python files.")
        return 0
    print("Found `assert` statements in non-test files:")
    for p, lineno, seg in found:
        print(f"{p}:{lineno}: assert {seg}")
    return 1


if __name__ == "__main__":
    raise SystemExit(main())
