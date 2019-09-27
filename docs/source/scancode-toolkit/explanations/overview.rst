Overview
========

How does ScanCode work?
-----------------------

For license detection, ScanCode uses a (large) number of license texts and license detection
'rules' that are compiled in a search index. When scanning, the text of the target file is
extracted and used to query the license search index and find license matches.

For copyright detection, ScanCode uses a grammar that defines the most common and less common
forms of copyright statements. When scanning, the target file text is extracted and 'parsed'
with this grammar to extract copyright statements.

Scan results are provided in various formats:

- a JSON file simple or pretty-printed,
- SPDX tag value or XML RDF formats,
- CSV,
- a simple unformatted HTML file that can opened in browser or as a spreadsheet.

For each scanned file, the result contains:

- its location in the codebase,
- the detected licenses and copyright statements,
- the start and end line numbers identifying where the license or copyright was found in the
  scanned file, and
- reference information for the detected license.

For archive extraction, ScanCode uses a combination of Python modules, 7zip and libarchive/bsdtar
to detect archive types and extract these recursively.

Several other utility modules are used such as libmagic for file and mime type detection.
