VulnerableCode: On-demand live evaluation of packages
=====================================================

Organization - `AboutCode <https://www.aboutcode.org>`_
-----------------------------------------------------------
| **Michael Ehab Mikhail**
| GitHub: `michaelehab <https://github.com/michaelehab>`_
| LinkedIn: `@michaelehab16 <https://www.linkedin.com/in/michaelehab16/>`_
| Project: `VulnerableCode
  <https://github.com/aboutcode-org/vulnerablecode>`_
| Official GSoC project page: `Project Link
  <https://summerofcode.withgoogle.com/programs/2025/projects/uF0kzMAg>`_
| GSoC Proposal: `Proposal Link
  <https://docs.google.com/document/d/1Tkk4MoPWXFj9r_U5cp3E4AhJW6QlHxTElyzpII_f4LM/edit?usp=sharing>`_

Overview
--------

VulnerableCode traditionally relied on **batch importers** to fetch
and store all advisories from a source at once. While effective for
building complete databases, batch importers are slow and
resource-heavy for developers who only need vulnerability
data for a **single package**.

This project introduces **live importers**, a new class of
importers that operate in a *package-first* mode. Instead of
pulling all advisories, they run against a single
PackageURL (PURL), returning only the advisories affecting
that package. This makes vulnerability evaluation
**faster, more efficient, and more personalized**, since the
database is gradually filled with only the advisories
that matter to each user.

To support this, I added:

* A new **LIVE_IMPORTERS_REGISTRY** that tracks available live importers.
* A new **API endpoint** that accepts a **PURL**, enqueues compatible
  live importer pipelines into a Redis queue, and executes them asynchronously
  via workers.
* Integration with **VulnTotal** and its **browser extension**, enabling users
  to evaluate packages in real-time through a seamless interface.

This work bridges the gap between **batch-first databases** and
**package-first queries**, improving VulnerableCode's flexibility and enabling
better integration with developer workflows.

.. note::
   A PURL (Package URL) is a universal way to identify and locate software
   packages. `More on PURL <https://github.com/package-url/purl-spec>`_


Project Design and Architecture
-------------------------------

The new live importers system builds on existing batch importers, while introducing
a parallel registry and asynchronous execution model for package-first runs.

Importer Registries
^^^^^^^^^^^^^^^^^^^

* ``IMPORTERS_REGISTRY`` continues to hold batch importers (V1/V2).
* ``LIVE_IMPORTERS_REGISTRY`` holds live importers.

Each live importer:

* Inherits from its batch importer (when logic can be reused), or directly
  from ``VulnerableCodeBaseImporterPipelineV2`` when a separate
  implementation is needed.
* Declares a ``supported_types`` array, defining compatible package
  ecosystems (``"pypi"``, ``"npm"``, ``"maven"``, ``"generic"``, etc).
* Implements a package-first ``collect_advisories()`` method, which
  restricts results to advisories relevant to the given PURL.

Live importer executions are asynchronous: once triggered, they are placed in
a Redis-backed job queue and processed by dedicated workers. This prevents
blocking the main API thread and allows multiple evaluations to run safely
in parallel.

.. figure:: https://private-user-images.githubusercontent.com/29122581/480716687-1ffa16ba-fbce-41bd-b71a-674620a2fec3.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NTU4MTMxNDQsIm5iZiI6MTc1NTgxMjg0NCwicGF0aCI6Ii8yOTEyMjU4MS80ODA3MTY2ODctMWZmYTE2YmEtZmJjZS00MWJkLWI3MWEtNjc0NjIwYTJmZWMzLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTA4MjElMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwODIxVDIxNDcyNFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWI4MWQ2ZmY4MzkxY2MzOTYwNTI3MTViZThiZTk1Yzc0Y2Y0Y2E3YWNhY2Q5OTU5OTE5MTgxOGI5NGM1OTlkODcmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.Mt9-TVHRNDduOHHMnLuhr-vzKSxrbfmAz1JtWfksFA4
   :alt: Class architecture of importers registries
   :align: center
   :width: 70%

   Class architecture showing relationship between ``IMPORTERS_REGISTRY`` and
   ``LIVE_IMPORTERS_REGISTRY``.

API Endpoint
^^^^^^^^^^^^

The new API endpoint is responsible for handling live evaluation requests.

* Input:
  * ``purl`` (required)
* Execution:
  * Checks ``LIVE_IMPORTERS_REGISTRY`` for importers whose ``supported_types`` match the PURL.
  * Enqueues the pipelines runs of these live importers in a ``live`` rq.
  * Returns the **Live Run ID**, information about the pipelines to run, and the status url.
  * The status URL shows the current state of a live evaluation run
  and its individual pipeline runs.
* Output:
  * Once workers complete execution, the resulting advisories are imported
  into the database and exposed as JSON through the status endpoint.

.. figure:: https://private-user-images.githubusercontent.com/29122581/482222427-38b61fc5-b5c3-414a-a372-fb2ec11e4023.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NTYyMjkwMjcsIm5iZiI6MTc1NjIyODcyNywicGF0aCI6Ii8yOTEyMjU4MS80ODIyMjI0MjctMzhiNjFmYzUtYjVjMy00MTRhLWEzNzItZmIyZWMxMWU0MDIzLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTA4MjYlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwODI2VDE3MTg0N1omWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTZkZjE5ZWJkMWU2ZmFjZTM5M2RiZjZkNTdjYjMyMjBlNDY3NzU4NDEyOTRiMWUyMjI3M2RjZmJjMjQzNTgzY2QmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.TjybPFq85LrsEdtkbmNMynE7thE9zo5sRr8C280ZEuE
   :alt: Live Pipeline Run Class
   :align: center
   :width: 70%

   Live Pipeline Run Class and how it groups multiple PipelineRuns.

.. figure:: https://private-user-images.githubusercontent.com/29122581/482222353-524383d3-086d-466e-8b14-2d6314e9d72b.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NTYyMjkwMjcsIm5iZiI6MTc1NjIyODcyNywicGF0aCI6Ii8yOTEyMjU4MS80ODIyMjIzNTMtNTI0MzgzZDMtMDg2ZC00NjZlLThiMTQtMmQ2MzE0ZTlkNzJiLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTA4MjYlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwODI2VDE3MTg0N1omWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWNlNzE4NWI2YjRiMDk1OGViYmJjNWI1MDJkNGIxMmMwYmQzNjFhMDAyMzYwMmE1YjE2NTk0NmIwMmUyNmRiMjEmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.Vp0G3_bbJ2QLu-sJjfDA26I4OEbUUl59-WotALf3Ce8
   :alt: Live Importers API request flow
   :align: center
   :width: 70%

   Flow of API endpoint: selecting compatible live importers and executing
   them in parallel.

Integration with VulnTotal
^^^^^^^^^^^^^^^^^^^^^^^^^^

The new API was integrated into VulnTotal as an optional datasource:

* VulnTotal now checks the local environment for
  ``VCIO_HOST``, ``VCIO_PORT``, and ``ENABLE_LIVE_EVAL`` flags in ``.env``.
* If enabled, VulnTotal queries VulnerableCode in package-first mode.
* This allows VulnTotal to use both its proprietary datasources **and**
  the user's gradually built local database, improving coverage and
  personalization.

Integration with VulnTotal Browser Extension
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

The VulnTotal browser extension was updated to support live importers:

* Users can enable the "Local VulnerableCode" datasource and live evaluation option.
* When enabled, package lookups are forwarded to the new API, retrieving
  advisories in real-time.
* This reduces setup effort—developers can get live vulnerability checks
  directly in their browser, provided they have a local VC instance.

.. figure:: https://private-user-images.githubusercontent.com/29122581/480717461-29806bc6-faf5-48c9-8632-608c23d96e83.gif?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NTU4MTMzNTksIm5iZiI6MTc1NTgxMzA1OSwicGF0aCI6Ii8yOTEyMjU4MS80ODA3MTc0NjEtMjk4MDZiYzYtZmFmNS00OGM5LTg2MzItNjA4YzIzZDk2ZTgzLmdpZj9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTA4MjElMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwODIxVDIxNTA1OVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWUwOTRkNWI1OTViNzYxODM4MjAyYTBjYTdmY2QyMzQ1Mzg2MTVmM2M5N2Q0M2I1MDQwMGRiNWJjZDllNmRjODQmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.lmRcQBxwP1kbhcQ8Siq6vvm1GrBfd_BhkIbIte2NuYs
   :alt: Live evaluation demo in VulnTotal browser extension
   :align: center
   :width: 70%

   VulnTotal and its browser extension consuming the new live evaluation API.

Linked Pull Requests
--------------------

.. list-table::
   :widths: 10 40 20
   :header-rows: 1

   * - Sr. no
     - Name
     - Link
   * - 1
     - Add Live Evaluation API endpoint and PyPa live pipeline importer
     - `aboutcode-org/vulnerablecode#1969
       <https://github.com/aboutcode-org/vulnerablecode/pull/1969>`_
   * - 2
     - Add Gitlab Live V2 Importer
     - `aboutcode-org/vulnerablecode#1910
       <https://github.com/aboutcode-org/vulnerablecode/pull/1910>`_
   * - 3
     - Add Curl Live Importer V2
     - `aboutcode-org/vulnerablecode#1923
       <https://github.com/aboutcode-org/vulnerablecode/pull/1923>`_
   * - 4
     - Add Elixir Security Live V2 Importer
     - `aboutcode-org/vulnerablecode#1935
       <https://github.com/aboutcode-org/vulnerablecode/pull/1935>`_
   * - 5
     - Add NPM Live Importer V2
     - `aboutcode-org/vulnerablecode#1941
       <https://github.com/aboutcode-org/vulnerablecode/pull/1941>`_
   * - 6
     - Add GitHub OSV Live V2 Importer Pipeline
     - `aboutcode-org/vulnerablecode#1977
       <https://github.com/aboutcode-org/vulnerablecode/pull/1977>`_
   * - 7
     - Add Postgres Live V2 Importer Pipeline
     - `aboutcode-org/vulnerablecode#1982
       <https://github.com/aboutcode-org/vulnerablecode/pull/1982>`_
   * - 8
     - Add PySec Live V2 Importer Pipeline
     - `aboutcode-org/vulnerablecode#1983
       <https://github.com/aboutcode-org/vulnerablecode/pull/1983>`_
   * - 9
     - Add Local VulnerableCode Datasource in VulnTotal and allow live evaluation
     - `aboutcode-org/vulnerablecode#1985
       <https://github.com/aboutcode-org/vulnerablecode/pull/1985>`_
   * - 10
     - Integrate Local VulnerableCode datasource and live evaluation
     - `aboutcode-org/vulntotal-extension#17
       <https://github.com/aboutcode-org/vulntotal-extension/pull/17>`_


Closing Thoughts
-------------------

This project was an exciting step forward from my 2024 GSoC work. By moving
from batch importers to package-first live importers, We enabled a faster,
more personalized, and more flexible way of building vulnerability databases.

I especially enjoyed designing the **registry + API architecture** and
integrating Redis queues and workers for asynchronous execution. This improved
scalability, responsiveness, and fault tolerance, ensuring the API never blocks
and multiple live evaluations can run in parallel. I also appreciated discussing
it with mentors and integrating it seamlessly across
**VulnerableCode, VulnTotal, and the browser extension**.

This work lays the foundation for even richer interactivity
in the ecosystem and brings vulnerability evaluation closer
to developers' workflows.

I appreciated the weekly status calls and the feedback I received from my
mentors and the amazing team. They were really helpful and supportive. -
`Philippe Ombredanne <https://github.com/pombredanne>`_ - `Ayan Sinha
Mahapatra <https://github.com/AyanSinhaMahapatra>`_ - `Tushar Goel
<https://github.com/TG1999>`_ - `Keshav Priyadarshi
<https://github.com/keshav-space>`_
