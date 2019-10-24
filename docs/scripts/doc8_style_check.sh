#!/bin/bash
# halt script on error
set -e
# Check for Style Code Violations
# (Here D000 is ignored to bypass the include statement errors as the files we are including are
# not in the same source folder as the include statement.)
# [ToDo 1. Expand Scan to All Docs (source/) 2. Fix this D000 workaround if possible]
# Doc Contribution Guide is at scancode-toolkit/contribute/contrib_doc.rst
doc8 --max-line-length 100 source/scancode-toolkit --ignore D000 --quiet