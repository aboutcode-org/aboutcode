#############################
How release posts are structured
#############################

Release posts are short and consistent so they can be generated automatically.
Each post includes:

- A title in the form ``<Project> <version> released``.
- A one-paragraph summary and bullet points for highlights.
- A link to the project release page.
- Optional links to changelogs, installation notes, or SBOMs if available.

Posts are stored in ``docs/source/news/posts`` and named with the date prefix,
for example: ``2026-01-18-scancode-toolkit.rst``.

To add a post, run the helper script (documented in
:doc:`../contributing/release_news`) or author a file manually following the
same structure.
