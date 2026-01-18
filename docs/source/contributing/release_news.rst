########################################
Publishing release news to aboutcode.org
########################################

Goal
====
Provide a repeatable way for any AboutCode project to publish a release
announcement to the AboutCode news feed with minimal manual steps.

Generate a post locally
=======================

Use the helper script in this repo to create a news file in
``docs/source/news/posts``:

.. code-block:: bash

   python tools/generate_release_post.py \
       --project "ScanCode Toolkit" \
       --version "32.0.0" \
       --release-url "https://github.com/aboutcode-org/scancode-toolkit/releases/tag/v32.0.0"

This writes a dated file (for example,
``docs/source/news/posts/2026-01-18-scancode-toolkit.rst``). Stage, commit, and
open a PR to `aboutcode-org/aboutcode`.

Automate with GitHub Actions (template)
=======================================

Add a workflow in the releasing project that runs on ``release`` events and
opens a PR to the aboutcode site. This template assumes you store a token with
push rights to your fork of ``aboutcode-org/aboutcode`` as
``ABOUTCODE_DOCS_PAT``.

.. code-block:: yaml

   name: Publish release news
   on:
     release:
       types: [published]

   jobs:
     announce:
       runs-on: ubuntu-latest
       steps:
         - name: Check out aboutcode site
           uses: actions/checkout@v4
           with:
             repository: ${{ github.repository_owner }}/aboutcode
             token: ${{ secrets.ABOUTCODE_DOCS_PAT }}

         - name: Set up Python
           uses: actions/setup-python@v5
           with:
             python-version: '3.11'

         - name: Install deps (docs extra)
           run: |
             python -m pip install --upgrade pip
             pip install -e .[docs]

         - name: Generate news post
           run: |
             python tools/generate_release_post.py \
               --project "${{ github.event.repository.name }}" \
               --version "${{ github.event.release.tag_name }}" \
               --release-url "${{ github.event.release.html_url }}"

         - name: Create pull request
           uses: peter-evans/create-pull-request@v6
           with:
             token: ${{ secrets.ABOUTCODE_DOCS_PAT }}
             branch: release-news/${{ github.event.repository.name }}-${{ github.event.release.tag_name }}
             commit-message: "Add news post for ${{ github.event.repository.name }} ${{ github.event.release.tag_name }}"
             title: "Add news post for ${{ github.event.repository.name }} ${{ github.event.release.tag_name }}"
             body: "Automated release news post for ${{ github.event.release.html_url }}"

Notes and expectations
======================
- Keep posts concise: title, short summary, highlight bullets, and links.
- The script is idempotent per date + project; reruns on the same day overwrite
  the file unless a new version is provided.
- Review the generated post before merging; adjust highlights as needed.
- If you cannot grant a token to push directly, run the workflow in a fork and
  open a PR manually.
