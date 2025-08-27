========================================================================
Have variable license sections in license rules
========================================================================

**Organization:** `AboutCode <https://aboutcode.org>`_

**Projects:** `Scancode Toolkit <https://github.com/aboutcode-org/scancode-toolkit>`_

**Mentee:** `Alok Kumar (alok1304) <https://github.com/alok1304>`_

**Mentors:**

- `Philippe Ombredanne <https://github.com/pombredanne>`_
- `Ayan Sinha Mahapatra <https://github.com/AyanSinhaMahapatra>`_

Overview
--------
This project aims to enhance the `detection_log` by clearly indicating when `extra-words`
are detected. These `extra-words` represent variable parts in the license rules, which
previously caused the match score to fall below 100.

To address this issue, the implementation now verifies whether the `extra-words`
appear in the correct position within the license text. If they do, the score is
adjusted and improved accordingly, resulting in more accurate license rule matching.

--------------------------------------------------------------------------------

Implementation
--------------

- **Enhanced the detection_log:**

  - Display `extra-words` when they are detected.

- **Added extra-phrase marker like [[n]] for the extra-words:**

  - The `extra-phrase` is denoted by double opening square brackets ``[[``
    and double closing square brackets ``]]``.
  - Here, `n` represents the maximum number of allowable `extra-words`.
  - The `extra-phrase` ``[[n]]`` is inserted in license rules at positions
    where `extra-words` may appear.
  - The value of `n` specifies how many `extra-words` are permitted
    at that location.

- **Improve Score:**

  - Check whether `extra-words` appear in the correct position as defined by
    the `extra-phrase`, and ensure they do not exceed the maximum allowable limit.
  - If the conditions are satisfied, increase the match score to ``100``.

- **Shows in detection_log:**

  - If the score is increased that means `extra-words` are in the correct
    position, then show ``extra-words-permitted-in-rule`` in the `detection_log`.
  - If the `extra-words` are at wrong place or exceed the maximum allowable limit,
    then show ``extra-words`` in the `detection_log`.

- **Testing:**

  - Added tests for the `extra-phrase` functionality, such as
    `test_extra_phrase_tokenizer` and `test_extra_phrase_spans`, to ensure that
    phrases are correctly identified and processed.
  - Implemented multiple tests to verify that `extra-words` appear in the correct
    position according to the rules and that the match score is updated correctly
    when they are within the allowable limit.
  - Covered various edge cases where `extra-words` might be misplaced or exceed
    the maximum allowable count, ensuring the scoring and logging behave as expected.

Linked Pull Requests
--------------------

.. list-table::
   :widths: 10 60 30 10
   :header-rows: 1

   * - Sr. no
     - Name
     - Link
     - Status
   * - 1
     - Display `extra-words` in `detection_log` if present
     - `aboutcode.org/scancode-toolkit#4402
       <https://github.com/aboutcode-org/scancode-toolkit/pull/4402>`_
     - Merged
   * - 2
     - Improve score by supporting `extra_phrase` for `extra-words` in rules
     - `aboutcode.org/scancode-toolkit#4432
       <https://github.com/aboutcode-org/scancode-toolkit/pull/4432>`_
     - Open

Related Issues
--------------

.. list-table::
   :widths: 10 60 30
   :header-rows: 1

   * - Sr. no
     - Name
     - Link
   * - 1
     - `extra-words` does not show up in detection_log properly
     - `#4400
       <https://github.com/aboutcode-org/scancode-toolkit/issues/4400>`_
   * - 2
     - Improve score when `extra-words`` are found in the correct position
     - `#4420
       <https://github.com/aboutcode-org/scancode-toolkit/issues/4420>`_

Pre GSoC Work
-------------

Before GSoC, I had contributed the following PRs:

- `Renaming the dependency attribute is_resolved to is_pinned
  <https://github.com/aboutcode-org/scancode-workbench/pull/638>`_
- `Add test for all PyPI METADATA versions
  <https://github.com/aboutcode-org/scancode-toolkit/pull/4180>`_
- `Add test for false positive GPL3 license
  <https://github.com/aboutcode-org/scancode-toolkit/pull/4106>`_
- `Add new rules for EUPL license
  <https://github.com/aboutcode-org/scancode-toolkit/pull/4204>`_
- `Add DUMB License and detection rule
  <https://github.com/aboutcode-org/scancode-toolkit/pull/4143>`_
- `Fixing the dead link by cross-reference in the documentation
  <https://github.com/aboutcode-org/purldb/pull/550>`_

Post GSoC
---------

I plan to continue contributing by adding `extra-phrase` support across many
license rules. This will strengthen license detection by making it more accurate
and flexible in handling variations within the rules.

Links
-----

* `Project Idea
  <https://github.com/aboutcode-org/aboutcode/wiki/GSOC-2025-project-ideas#have-variable-license-sections-in-license-rules>`_

* `Official GSoC project page
  <https://summerofcode.withgoogle.com/programs/2025/projects/EvCogGhq>`_

* `GSoC Proposal
  <https://docs.google.com/document/d/1vNgiO8g1RiKVym4qK_jVFsiUH2z5ztaz8Q5lW6NkRK0/edit?tab=t.0>`_

* `Project Board <https://github.com/orgs/aboutcode-org/projects/28>`_

Acknowledgements
----------------

I would like to thank my mentors:

- `Philippe Ombredanne`_
- `Ayan Sinha Mahapatra`_

A special thanks to my mentors who always supported me throughout this journey. Whenever
I faced a problem, we discussed it in depth during our weekly status calls. Without
their guidance and constant help, completing this project would not have been possible.

I also plan to explore more projects in AboutCode and contribute whenever I get
time, because I would love to remain a part of this wonderful organization.
