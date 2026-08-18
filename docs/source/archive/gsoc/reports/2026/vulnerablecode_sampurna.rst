=======================
VulnerableCode Insights
=======================

| Mentee: **Sampurna Pyne**
| GitHub: `Samk1710 <https://github.com/Samk1710>`_
| LinkedIn: `@samk1710 <https://www.linkedin.com/in/samk1710/>`_
| Repository: `VulnerableCode <https://github.com/aboutcode-org/vulnerablecode>`_
| Official GSoC project page: `Project Link
  <https://summerofcode.withgoogle.com/programs/2026/projects/nlwOImQP>`_
| GSoC Proposal: `Proposal Link
  <https://docs.google.com/document/d/1xBapGNBjmkRrNeKFeXPyB014XOkDcpbJNFjGuw59sAc/edit?tab=t.0>`_

Overview
--------

VulnerableCode imports vulnerability advisories from dozens of data sources and
grows its database continuously. However, it previously lacked a way to
demonstrate its quality. This project enables VulnerableCode to visually
showcase its data richness and coverage, while highlighting areas for improvement. This transparency
gives users confidence in VulnerableCode and provides maintainers with actionable
insights to improve it.

.. raw:: html

    <div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; height: auto; margin-bottom: 2em; margin-top: 1em;">
        <iframe src="https://www.youtube.com/embed/pCTos7DMD5c" frameborder="0" allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe>
    </div>

This GSoC project builds three key features:

* `Insights Dashboard`_: A multi-panel dashboard containing various interactive
  charts to showcase VulnerableCode's strengths and identify areas for improvement.
* `History of Advisories`_: A diff view for tracking changes in an advisory and
  viewing its historical versions as snapshots.
* `EPSS History`_: Visual tracking of EPSS score and percentile trends over time.

Detailed Report
---------------

Insights Dashboard
^^^^^^^^^^^^^^^^^^

The Insights Dashboard is a multi-panel interactive dashboard designed to
visualize various features of VulnerableCode through infographic charts.

A dedicated ``insights`` Django app houses the dashboard's core functionality.
To ensure fast and scalable chart rendering, an automated daily snapshot pipeline
(``insights_snapshot_pipeline.py``) pre-computes database-wide metrics once every night, avoiding
heavy on the fly queries across VulnerableCode's million-row tables. These metrics
are stored in dedicated models linked to a ``DailySnapshot``, keeping the telemetry
structured and instantly queryable.

Below is the tree view of ``insights`` for better understanding ::

    insights
     ├── models.py
     ├── views.py
     ├── urls.py
     ├── utils.py
     ├── insights_snapshot_pipeline.py
     ├── charts/
     │     ├── __init__.py
     │     ├── overview_panel.py
     │     ├── package_panel.py
     │     ├── severity_panel.py
     │     ├── importer_panel.py
     │     └── data_quality_panel.py
     ├── templates/insights/
     │     ├── dashboard.html
     │     └── components/
     └── static/insights/
           ├── css/insights.css
           └── js/


The dashboard panels are implemented using a modular framework in the ``charts/``
directory. Each chart is driven by a ``ChartDefinition`` dataclass, which encapsulates
all the metadata, collection, and formatting logic required to render it. These
definitions are centrally registered in the ``insights/charts/__init__.py`` chart registry.
At request time, the API simply fetches the latest pre-computed snapshot using these
definitions, ensuring instantaneous page loads.

The UI integrates Billboard.js to render interactive charts.

More:

* https://github.com/aboutcode-org/vulnerablecode/pull/2391
* https://github.com/aboutcode-org/vulnerablecode/pull/2408


History of Advisories
^^^^^^^^^^^^^^^^^^^^^

Advisory data imported from upstream sources is constantly updated. Previously,
VulnerableCode only exposed the latest version of an advisory, making
it impossible for users to track what changed over time.

This feature introduces a chronological list of advisory versions, allowing users
to click into any historical snapshot and view the advisory exactly as it
existed at that moment. To provide a quick overview, the UI displays diffs between
versions directly.

These diffs are generated at import time. For existing advisories,
they can also be backfilled using the ``HistoryDiffImproverPipeline``. The diffs
are stored in the ``AdvisoryHistoryDiff`` model.


| More: https://github.com/aboutcode-org/vulnerablecode/pull/2356




EPSS History
^^^^^^^^^^^^

This feature adds an EPSS History Trend on the advisory page in the form of a line chart
and a paginated history table showing the percentile and score of EPSS over time
for a given advisory.

| More: https://github.com/aboutcode-org/vulnerablecode/pull/2328




Linked Pull Requests
--------------------

.. list-table::
   :widths: 10 60 30
   :width: 100%
   :header-rows: 1

   * - No.
     - Name
     - Link
   * - 1
     - Insights Dashboard (Part 1)
     - `vulnerablecode#2391 <https://github.com/aboutcode-org/vulnerablecode/pull/2391>`_
   * - 2
     - Insights Dashboard (Part 2)
     - `vulnerablecode#2408 <https://github.com/aboutcode-org/vulnerablecode/pull/2408>`_
   * - 3
     - History of Advisories
     - `vulnerablecode#2356 <https://github.com/aboutcode-org/vulnerablecode/pull/2356>`_
   * - 4
     - EPSS History
     - `vulnerablecode#2328 <https://github.com/aboutcode-org/vulnerablecode/pull/2328>`_


Pre-GSoC Work
-------------

.. list-table::
   :widths: 10 60 30
   :width: 100%
   :header-rows: 1

   * - No.
     - Name
     - Link
   * - 1
     - Add Mirror Pipeline for EUVD using GitHub Actions
     - `aboutcode-mirror-euvd#1 <https://github.com/aboutcode-org/aboutcode-mirror-euvd/pull/1>`_
   * - 2
     - Document the readme.md for EUVD Mirror
     - `aboutcode-mirror-euvd#3 <https://github.com/aboutcode-org/aboutcode-mirror-euvd/pull/3>`_
   * - 3
     - Add Importer Pipeline for Tuxcare Advisories
     - `vulnerablecode#2104 <https://github.com/aboutcode-org/vulnerablecode/pull/2104>`_
   * - 4
     - Add Importer Pipeline for Vmware Photon Advisories
     - `vulnerablecode#2198 <https://github.com/aboutcode-org/vulnerablecode/pull/2198>`_
   * - 5
     - Add Importer Pipeline for Openstack Advisories
     - `vulnerablecode#2154 <https://github.com/aboutcode-org/vulnerablecode/pull/2154>`_
   * - 6
     - Fix Nix Flake error in GitHub Actions
     - `vulnerablecode#2161 <https://github.com/aboutcode-org/vulnerablecode/pull/2161>`_
   * - 7
     - Add Importer Pipeline for EUVD
     - `vulnerablecode#2046 <https://github.com/aboutcode-org/vulnerablecode/pull/2046>`_
   * - 8
     - Add alpine in RANGE_CLASS_BY_SCHEME
     - `univers#185 <https://github.com/aboutcode-org/univers/pull/185>`_
   * - 9
     - Add support for Openstack Advisories
     - `univers#184 <https://github.com/aboutcode-org/univers/pull/184>`_
   * - 10
     - Fix missing cwe2 dependency
     - `vulnerablecode-ai-experiments#15 <https://github.com/aboutcode-org/vulnerablecode-ai-experiments/pull/15>`_
   * - 11
     - Identify and fix env load failures due to improper typecasts
     - `vulnerablecode-ai-experiments#18 <https://github.com/aboutcode-org/vulnerablecode-ai-experiments/pull/18>`_
   * - 12
     - Researched and documented VulDB API for Vulntotal
     - `vulnerablecode#1199 <https://github.com/aboutcode-org/vulnerablecode/issues/1199>`_


Post-GSoC
---------

The Insights Dashboard can be extended further with additional charts and panels to provide even
richer data analytics and visibility. These insights act as a direct feedback loop, helping us
continuously refine VulnerableCode by guiding the development of new data pipelines,
targeted improvers, and architectural enhancements.

Next Steps
^^^^^^^^^^

* `Review Vulnerablecode after Insights is Live #2413 <https://github.com/aboutcode-org/vulnerablecode/issues/2413>`_
* `Risk Panel in Insights #2414 <https://github.com/aboutcode-org/vulnerablecode/issues/2414>`_
* `Improve UX of CWE distribution chart #2416 <https://github.com/aboutcode-org/vulnerablecode/issues/2416>`_
* `Make charts more interactive #2417 <https://github.com/aboutcode-org/vulnerablecode/issues/2417>`_

Closing Thoughts
----------------

Working on VulnerableCode Insights was a truly rewarding experience that I thoroughly enjoyed.
Designing the Insights Dashboard was a particularly thought-intensive process where
I found myself drawing inspiration from various insights features like Spotify Capsule
and GitHub Insights.

The most amazing part of this journey was the `weekly meetings <https://meet.jit.si/AboutCode>`_ with my mentors. It was an
incredibly smooth experience, and I owe a huge thanks to them for all their
thoughtful inputs, guidance and feedback:

Mentors: `Philippe Ombredanne <https://github.com/pombredanne>`_, `Hritik Vijay <https://github.com/hritik14>`_, `Keshav Priyadarshi <https://github.com/keshav-space>`_, `Ziad Hany <https://github.com/ziadhany>`_, `Ayan Sinha Mahapatra <https://github.com/AyanSinhaMahapatra>`_, and `Tushar Goel <https://github.com/TG1999>`_

It was truly amazing to have this opportunity to learn, contribute, and grow with `AboutCode <https://github.com/aboutcode-org>`_ this summer, filled with tons of bugs and caffeine.

Until next time!
