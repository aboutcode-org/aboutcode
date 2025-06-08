Support Python 3.x Part 2
==========================

Goals

- Remove legacy Python code
- Support latest Python 3.x
- Improve 3rd party package provisioning

ScanCode has been ported on Python 3 but still supports Python 2.7. The
goal of this project is to remove all the code that provides Python
2-specific support.

In addition, the way we deal with 3rd party packages needs to be
refactored: today we embed a copy of all our third-party dependencies as
pre-built wheels in the ScanCode repository. This creates some problems:

1.  We supported Python 2 and now support Python 3.6. Each version may need
    a pre-built wheel if there is native code. With 3.7, 3.8 and beyond
    this means creating and storing in the ScanCode git repo 4 variants for
    each dependency.

2.  We support Windows, Linux, macOS and possibly FreeBSD each with some
    possible architecture variants. For each of these we are storing a
    variant for each of the Python versions above.

This creates way too many wheels that end up making ScanCode checkouts and
tarballs too big. We need to define a new improved way to handle
third-party dependencies including:

- Make the build automation more prominent
- Ensure secured pinning of wheel versions and actual files (e.g. using
  checksums)
- Do not bundle these wheels anymore.

For more info see Disk quota and Limitations.

Basically it is an extension of previous GSoC 2019 Project: Port
scancode-toolkit to Python 3

Assigned to
-----------

Abhishek Kumar: https://github.com/Abhishek-Dev09

Level
-----

Advanced

Tech
----

Python, build scripts, packaging

URLS
----

https://github.com/nexB/scancode-toolkit/issues/295

Project Board
--------------

https://github.com/nexB/scancode-toolkit/projects/8

Mentors
--------

@majurg https://github.com/majurg @pombredanne
https://github.com/pombredanne

Commits
-------

List of commits(merged):
https://github.com/nexB/scancode-toolkit/commits?author=Abhishek-Dev09
https://github.com/nexB/scancode-toolkit/pull/2184 (open)
https://github.com/nexB/scancode-toolkit/pull/2167 (open)
