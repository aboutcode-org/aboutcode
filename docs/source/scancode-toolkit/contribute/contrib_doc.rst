Contributing to the Documentation
=================================

Continious Integration
----------------------

The documentations are checked on every new commit through Travis-CI, so that common errors are avoided and documentation standards are enforced. Travis-CI presently checks for these 3 aspects of the documentation 

1. Successful Builds (By using sphinx-build)
2. No Broken Links   (By Using link-check)
3. Linting Errors    (By Using ``restructuredtext-lint``)

Style Checks
------------

1. Internal Links

	Using ``:ref:`` is advised over standard reStructuredText links to sections (like ```Section title`_``) because it works across files, when section headings are changed, will raise warnings if incorrect, and works for all builders that support cross-references. However, external links are created by using the standard ```Section title`_`` method. 

2. Eliminate Redundancy

	If a section/file has to be repeated somewhere else, do not write the exact same section/file twice. Use ``.. include: ../README.rst`` instead. Here, ``../`` refers to the documentation root, so file location can be used accordingly. This enables us to link documents from other upstream folders. 

3. Using ``:ref:`` only when necessary 

	Use ``:ref:`` to create internal links only when needed, i.e. it is referanced somewhere. Do not create referances for all the sections and then only referance some of them, because this created unnecessary referances. This also generates ERROR in ``restructuredtext-lint``.  