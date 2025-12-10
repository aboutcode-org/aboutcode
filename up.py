from __future__ import annotations
import argparse
import shutil
import subprocess
import sys
from pathlib import Path
from typing import List

PYTHON = sys.executable
ROOT = Path(__file__).resolve().parent


def run(cmd: List[str], dry: bool = False):
    print("+", " ".join(cmd))
    if dry:
        return 0
    return subprocess.call(cmd)


def ensure(tool: str):
    return shutil.which(tool) is not None


def cmd_test(dry):
    # pytest preferred
    if ensure("pytest"):
        return run([PYTHON, "-m", "pytest"], dry)
    return run([PYTHON, "-m", "unittest", "discover", "-v"], dry)


def cmd_lint(dry):
    if ensure("ruff"):
        return run(["ruff", "check", "."], dry)
    if ensure("flake8"):
        return run(["flake8", "."], dry)
    if ensure("pylint"):
        # auto-detect python packages in repo
        packages = [p.name for p in ROOT.iterdir() if (p / "__init__.py").exists()]
        if packages:
            return run(["pylint"] + packages, dry)
        return run(["pylint", "."], dry)
    print("No linter installed.")
    return 1


def cmd_format(dry):
    if ensure("black"):
        return run(["black", "."], dry)
    print("Black not installed.")
    return 1


def cmd_mypy(dry):
    if ensure("mypy"):
        return run(["mypy", "."], dry)
    print("mypy not installed.")
    return 1


def cmd_docs(dry):
    if ensure("sphinx-build"):
        return run(["sphinx-build", "docs", "docs/_build"], dry)
    print("Sphinx not installed.")
    return 1


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument(
        "command",
        nargs="?",
        default="help",
        choices=["help", "test", "lint", "format", "mypy", "docs", "all"],
    )
    parser.add_argument("--dry-run", action="store_true")
    args = parser.parse_args()

    cmds = {
        "test": [cmd_test],
        "lint": [cmd_lint],
        "format": [cmd_format],
        "mypy": [cmd_mypy],
        "docs": [cmd_docs],
        "all": [cmd_format, cmd_lint, cmd_mypy, cmd_test, cmd_docs],
    }

    if args.command == "help":
        parser.print_help()
        return

    for task in cmds[args.command]:
        rc = task(args.dry_run)
        if rc:
            sys.exit(rc)

    sys.exit(0)

if __name__ == "__main__":
    main()
