#!/bin/bash
# halt script on error
set -e
# Build the HTML docs
sphinx-build -E -W source build
# Check links in the docs
sphinx-build -b linkcheck source build/linkcheck
