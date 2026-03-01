#!/usr/bin/env python3
"""A small codemod to replace simple `assert` statements with explicit raises.

This transformer replaces `assert <test>, <msg>` with:

    if not <test>:
        raise RuntimeError(<msg>)

and `assert <test>` with a `RuntimeError('Assertion failed')`.

Use with caution; inspect changes before committing. Supports a `--apply` flag.
"""
from __future__ import annotations

import argparse
import ast
import shutil
from pathlib import Path
import sys


class AssertTransformer(ast.NodeTransformer):
    def visit_Assert(self, node: ast.Assert) -> ast.AST:
        # Build message
        msg_node = node.msg if node.msg is not None else ast.Constant(value="Assertion failed")
        # Construct raise RuntimeError(msg_node)
        raise_call = ast.Raise(
            exc=ast.Call(func=ast.Name(id="RuntimeError", ctx=ast.Load()), args=[msg_node], keywords=[]),
            cause=None,
        )
        # Construct if not <test>: raise RuntimeError(...)
        new_if = ast.If(
            test=ast.UnaryOp(op=ast.Not(), operand=node.test),
            body=[raise_call],
            orelse=[],
        )
        return ast.copy_location(new_if, node)


def transform_source(src: str) -> str:
    tree = ast.parse(src)
    transformer = AssertTransformer()
    new_tree = transformer.visit(tree)
    ast.fix_missing_locations(new_tree)
    try:
        new_src = ast.unparse(new_tree)
    except AttributeError:
        raise RuntimeError("Python version does not support ast.unparse; use Python 3.9+")
    return new_src


def process_file(path: Path, apply: bool) -> bool:
    src = path.read_text(encoding="utf-8")
    tree = ast.parse(src)
    has_assert = any(isinstance(n, ast.Assert) for n in ast.walk(tree))
    if not has_assert:
        return False
    new_src = transform_source(src)
    if apply:
        bak = path.with_suffix(path.suffix + ".bak")
        shutil.copy(path, bak)
        path.write_text(new_src, encoding="utf-8")
    else:
        print(f"Would modify: {path}")
    return True


def main(argv: list[str] | None = None) -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("paths", nargs="*", help="Files or directories to scan")
    ap.add_argument("--apply", action="store_true", help="Apply changes in-place (backups .bak)")
    args = ap.parse_args(argv)

    if not args.paths:
        args.paths = ["."]

    changed = False
    for p in args.paths:
        path = Path(p)
        if path.is_dir():
            for f in path.rglob("*.py"):
                if process_file(f, args.apply):
                    changed = True
        elif path.is_file():
            if process_file(path, args.apply):
                changed = True
    if changed:
        print("Processed files with `assert` statements.")
        return 0
    print("No `assert` statements found to process.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
