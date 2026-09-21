=============================================================================
ScanCode-Toolkit: Mark required phrases for rules automatically using NLP/AI
=============================================================================

| Mentee: **Kaushik Kumar R**
| GitHub: `Kaushik-Kumar-CEG <https://github.com/Kaushik-Kumar-CEG>`_
| LinkedIn: `Profile <https://www.linkedin.com/in/kaushik-kumar-ceg/>`_
| Repository: `ScanCode Required Phrases
  <https://github.com/aboutcode-org/scancode-required-phrases>`_
| Official GSoC project page: `Project Link
  <https://summerofcode.withgoogle.com/programs/2026/projects/K6CQtnjP>`_
| GSoC Proposal: `Proposal Link
  <https://docs.google.com/document/d/1qXYTrIoF4Tn5q-dPMQicCFZ0NKbLj9jYN18ipyPyqZI/edit?usp=sharing>`_
| Model: `Hugging Face
  <https://huggingface.co/Kaushik-Kumar-CEG/scancode-required-phrases-deberta-bioes-crf-hardened>`_

Overview
--------

Required phrases help ScanCode avoid weak or partial license matches. They are
marked with ``{{...}}`` inside a license rule. If the phrase is missing from the
scanned text, that rule does not match.

Many rules do not have these markers yet. Existing ScanCode commands can copy
known phrases to similar rules, but they need a phrase to start with. The work
in `scancode-toolkit#3924
<https://github.com/aboutcode-org/scancode-toolkit/pull/3924>`_ provides the
rule APIs used here. This project adds an NLP model that can suggest a phrase
directly from rule text.

A wrong phrase can hide a valid license match, so model output cannot be written
to rules without checks and review. The work includes dataset generation, model
training, prediction validation, a maintainer review command and a small
ScanCode Toolkit wrapper.

The two main flows are:

.. code-block:: text

    marked ScanCode rules -> dataset -> training -> public model
    unmarked rule -> prediction -> ScanCode checks -> review -> rule update

Work Completed
--------------

Dataset and composite rules
^^^^^^^^^^^^^^^^^^^^^^^^^^^

The dataset command reads eligible ScanCode ``.RULE`` files and converts
existing ``{{...}}`` markers into BIOES token labels. Text outside the markers
is labelled ``O``.

The split is deterministic. Rules with rarer license expressions stay together
in one split. Rules from common expressions are assigned by a hash of their
identifiers to keep the splits balanced. After tokenizer alignment checks, the
training run used 8,265 training rules, 1,044 validation rules and 1,004 test
rules.

A separate command handles composite expressions. It uses phrases already known
for the individual license keys and only updates a composite rule when every
key has a safe, non-overlapping match.

Model training and inference
^^^^^^^^^^^^^^^^^^^^^^^^^^^^

The selected model is based on DeBERTa v3 large with BIOES labels and a constrained
conditional random field (CRF) decoder. BIOES marks the start, inside, end and
single-token cases for each phrase. The CRF keeps the decoded label sequence
valid.

Training and test evaluation are kept separate. Test evaluation is opt-in and
was run only for the selected model. The training command also reloads and
checks the saved model before treating the output as complete.

The model is public on Hugging Face. It is pinned to revision
``11215925b0f9b64cfcfbbb5492b52d6aeb5a572b`` for the default command.

.. list-table:: Model results
   :widths: 40 30 30
   :width: 100%
   :header-rows: 1

   * - Metric
     - Validation
     - Test
   * - Precision
     - 0.8981
     - 0.8748
   * - Recall
     - 0.9035
     - 0.8784
   * - F1
     - 0.9008
     - 0.8766
   * - Exact match
     - 0.8563
     - 0.8197

Precision, recall and F1 are strict span metrics. The validation and test runs
had no invalid BIOES paths.

Review and rule updates
^^^^^^^^^^^^^^^^^^^^^^^

The main maintainer command is ``add-model-required-phrases``. It can review one
rule, a directory of rules or eligible rules installed with ScanCode Toolkit.
It shows the prediction, score, validation result, nearby text and the exact
rule diff before asking for a decision.

A review can approve, reject, edit or defer a phrase. Sessions are saved as
JSONL and can be resumed without loading the model again. Predict-only mode can
write machine-readable JSON without creating a review session or changing any
rule.

Batch mode requires explicit score thresholds. It does not write unless
``--yes`` is supplied. ``--dry-run`` always prevents rule-file changes. After
installed rules are changed, the command tells the maintainer to rebuild the
ScanCode license index.

Safety checks
^^^^^^^^^^^^^

Every prediction is treated as a candidate. ScanCode's own rule APIs decide
whether the phrase can be inserted. The command blocks phrases that overlap
protected content such as URLs and referenced filenames. It also rejects
ambiguous repeated text, conflicting spans and predictions cut by model input
limits.

Before applying a reviewed session, the command checks every path and file hash
again. It prepares the complete update first, then writes each changed rule once
using atomic replacement. File permissions and line endings are kept. A rule
with a pending phrase is left unchanged.

Toolkit integration
^^^^^^^^^^^^^^^^^^^

The model code and its optional dependencies live in the
``scancode-required-phrases`` package. ScanCode Toolkit only gets a small source
checkout wrapper. This keeps normal ScanCode installation and license scanning
free from ML dependencies. The wrapper imports the package command and passes
its arguments through.

A second Toolkit pull request contains ten manually reviewed rule changes from
a fixed sample of 30 rules. The sample was selected before prediction and was
checked against the final train, validation and test data.

The model returned 37 candidate phrases across 22 of the 30 rules. Twenty-one
passed the insertion checks and 16 were blocked. Ten clear license-specific
phrases were kept. Each updated rule still matched its original full text, while
text missing the required phrase did not match that rule.

Using the Command
-----------------

Install the inference dependencies from a package checkout:

.. code-block:: console

    python -m pip install ".[inference]"

Review one rule:

.. code-block:: console

    add-model-required-phrases --rule path/to/example.RULE

Run read-only prediction and save JSON:

.. code-block:: console

    add-model-required-phrases --rule path/to/example.RULE \
        --predict-only --json predictions.json

Preview a batch without writing rule files:

.. code-block:: console

    add-model-required-phrases --all --batch \
        --auto-score 0.90 --review-score 0.70 --dry-run

Linked Pull Requests
--------------------

.. list-table::
   :widths: 8 62 30
   :width: 100%
   :header-rows: 1

   * - No.
     - Work
     - Link
   * - 1
     - Dataset and composite required phrase commands
     - `scancode-required-phrases#1
       <https://github.com/aboutcode-org/scancode-required-phrases/pull/1>`_
   * - 2
     - Model training, export and read-only inference
     - `scancode-required-phrases#2
       <https://github.com/aboutcode-org/scancode-required-phrases/pull/2>`_
   * - 3
     - Model prediction and rule integration
     - `scancode-required-phrases#3
       <https://github.com/aboutcode-org/scancode-required-phrases/pull/3>`_
   * - 4
     - Human review workflow for model predictions
     - `scancode-required-phrases#4
       <https://github.com/aboutcode-org/scancode-required-phrases/pull/4>`_
   * - 5
     - ScanCode Toolkit command wrapper
     - `scancode-toolkit#5267
       <https://github.com/aboutcode-org/scancode-toolkit/pull/5267>`_
   * - 6
     - Reviewed model predictions for ten sample rules
     - `scancode-toolkit#5330
       <https://github.com/aboutcode-org/scancode-toolkit/pull/5330>`_

Testing
-------

The package tests cover dataset generation, model loading, prediction decoding,
rule validation, review sessions, stale files, dry runs, batch thresholds,
atomic writes and command output. The complete package suite passed 322 tests.
Documentation, style, source distributions and wheels were also checked.

The Toolkit wrapper passed its focused tests with a fake package and with the
real public model. The ten evidence rules passed ScanCode rule validation and
the focused required-phrase tests.

Earlier Work
------------

Before GSoC, I worked on a few ScanCode license detection cases. These helped me
understand rule data and how small rule changes affect matching.

* `Add a rule for CKSource Holding copyright
  <https://github.com/aboutcode-org/scancode-toolkit/pull/4649>`_
* `Fix incorrect license detection in dragon4.c
  <https://github.com/aboutcode-org/scancode-toolkit/pull/4654>`_
* `Fix JCalendar LGPL detected as GPL
  <https://github.com/aboutcode-org/scancode-toolkit/pull/4880>`_

Current Limits and Next Steps
-----------------------------

The model can miss a phrase or suggest a boundary that is not useful. Scores are
not enough to approve a change, which is why review and ScanCode validation stay
part of the workflow. Long rules may also be truncated by the model and are not
approved automatically.

The package pull requests and both Toolkit pull requests are still open. After
they are reviewed and merged, I plan to prepare version ``0.1.0`` and help with
the PyPI release. I will keep maintaining the dataset tools, training pipeline,
model and review command. Maintainer feedback and reviewed rules can be used for
future training runs.

One later area to study is `scancode-toolkit#3945
<https://github.com/aboutcode-org/scancode-toolkit/issues/3945>`_. It considers
ranking matches with required phrases instead of always filtering matches that
miss them. The phrases produced by this project can still be used if that policy
changes.

Closing Thoughts
----------------

GSoC taught me much more than how to train an NLP model. I learned how ScanCode's
license rules and matching code work, how to turn an experiment into a package
and why review matters for even a small rule change.

The weekly community calls were one of my favourite parts of the project. I
could show my progress, hear where an idea was weak and fix it before going too
far. Thanks to `Ayan Sinha Mahapatra
<https://github.com/AyanSinhaMahapatra>`_, `Philippe Ombredanne
<https://github.com/pombredanne>`_ and `Dennis Clark
<https://github.com/DennisClark>`_ for their time, feedback and patience.

I am very glad I got to work with the `AboutCode community
<https://github.com/aboutcode-org>`_. I learned a lot from the reviews and the
technical discussions. I plan to keep contributing to AboutCode and continue
maintaining this work after GSoC.
