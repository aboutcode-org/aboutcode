###############################
AboutCode proposals (ABC series)
###############################

Org-wide standards and policies are captured as AboutCode proposals, numbered
``ABC-XXXX``. Each proposal lives in this repository, is reviewed in a Pull
Request, and—once accepted—serves as the canonical reference for the topic
(coding standards, security practices, governance, etc.).

Process (lightweight)
=====================
- Copy the template at :doc:`ABC-0000-template` to a new file named
  ``ABC-<number>-<short-slug>.rst``.
- Open a PR in this repo adding the new proposal under ``docs/source/standards``.
- Reviewers discuss in the PR; when accepted, the status becomes **Accepted**.
- If a proposal is replaced or declined, set status to **Superseded** or
  **Rejected** but keep the document for history.

Numbering
========= 
- Use four digits: ``ABC-0001``, ``ABC-0002``, …
- Start at 0001 for new proposals (coordinated by the PR author/reviewer to
  avoid collisions).

Statuses
========
- **Draft**: proposed, under discussion
- **Accepted**: approved and in effect
- **Superseded**: replaced by a newer ABC
- **Rejected/Withdrawn**: will not proceed

Where these are published
=========================
- Source lives in this repo under ``docs/source/standards``.
- Built docs (e.g., Read the Docs) will include them so all projects can link to
  the canonical copy.

.. toctree::
   :maxdepth: 1

   ABC-0000-template
   
