VulnTotal Browser Extension: Cross-validating vulnerability right within the browser
====================================================================================

Organization - `AboutCode <https://www.aboutcode.org>`_
-----------------------------------------------------------
| **Michael Ehab Mikhail**
| GitHub: `michaelehab <https://github.com/michaelehab>`_
| LinkedIn: `@michaelehab16 <https://www.linkedin.com/in/michaelehab16/>`_
| Project: `VulnTotal Browser Extension
  <https://github.com/aboutcode-org/vulntotal-extension>`_
| Official GSoC project page: `Project Link
  <https://summerofcode.withgoogle.com/programs/2024/projects/26FZNTGx>`_
| GSoC Proposal: `Proposal Link
  <https://docs.google.com/document/d/1K7oGBlfHxbrxah3TJW1PcUGgaLMR6q0ctK7_Y10hpVY/edit?usp=sharing>`_

Overview
--------

This project aims to simplify the process of vulnerability analysis by
developing a browser extension for Chrome-based browsers (Google Chrome,
Firefox, Arc, etc.). The extension leverages the power of `VulnTotal
<https://aboutcode.readthedocs.io/en/latest/archive/gsoc/reports/2022/vulnerablecode_vulntotal_keshav.html>`_,
a Python-based tool that queries multiple vulnerability data sources, such
as OSV and Snyk, to provide comprehensive security assessments of software
packages. The key innovation in this project is the use of Pyodide, a port
of CPython to WebAssembly/Emscripten, which enables Python code to run
natively in the browser.

By integrating Pyodide with VulnTotal, the extension can perform
vulnerability analysis directly within the browser environment, eliminating
the need for server-side components or external applications. The extension
provides a user-friendly interface that displays the results of
vulnerability analyses in a clear and interpretable table format. The table
allows users to quickly assess the security status of the software packages
they are examining.

This project not only enhances the functionality and reach of VulnTotal but
also provides a valuable tool for developers and security professionals who
seek to ensure the safety of their software directly from their browsers.
By simplifying and streamlining the vulnerability-checking process, this
extension contributes to safer and more secure software development
practices.

Extension Preview
-----------------

.. figure:: https://github.com/user-attachments/assets/07966663-9f89-4b80-9db3-0840e246d2c5
   :alt: Extension Preview
   :align: center
   :width: 70%

   VulnTotal Extension takes PURL and displays vulnerability data from
   various data sources. By default, vulnerability data is grouped by CVE.

.. note::
   A PURL is a URL string used to identify and locate a software package
   in a mostly universal and uniform way across programming languages,
   package managers, packaging conventions, tools, APIs, and databases.
   `more on PURL <https://github.com/package-url>`_

Project Design and Architecture
-------------------------------

The design of this project revolves around the integration of VulnTotal
with a browser environment, enabling seamless vulnerability analysis
without the need for server-side processing. This is achieved by leveraging
Pyodide, which runs Python code directly in the browser through
WebAssembly. Below, we discuss the core components of the project and how
they interact to deliver a functional and user-friendly extension.

Pyodide Integration
^^^^^^^^^^^^^^^^^^^

Pyodide is a critical component of this project, allowing the VulnTotal
Python library to be executed within the browser. Pyodide converts CPython
to WebAssembly, enabling Python code to run natively in a web environment.
This setup eliminates the need for external servers or backend
infrastructure, making the extension self-contained and easy to deploy.

.. figure:: https://github.com/user-attachments/assets/2bf61204-e26b-4322-8403-f126b3d44748
   :alt: Pyodide integration within the browser
   :align: center
   :width: 70%

   In the context of this extension, Pyodide serves as the bridge between
   the browser's JavaScript environment and the Python-based VulnTotal
   tool. The extension uses Pyodide to load the VulnTotal code, perform
   vulnerability checks, and return the results to the user interface,
   where they are displayed in a structured format.

Implementation
--------------

The implementation of the browser extension involved several key steps,
each crucial to ensuring the extension's functionality and integration with
VulnTotal. The process began with designing the frontend and progressed
through setting up Pyodide, creating core classes, and integrating all
components. Below is a detailed account of the implementation process.

Frontend Design
^^^^^^^^^^^^^^^

The initial phase of development focused on designing the frontend of the
extension. To maintain a consistent user experience, I adopted a design
approach similar to that used in VulnerableCode. This design choice aimed
to provide users with a familiar and intuitive interface for vulnerability
analysis.

I created a full demo using JavaScript to simulate how the extension should
function. This demo utilized a JSON response from the VulnTotal Python
package, allowing me to test and validate the user interface and
interaction flow before integrating with Pyodide.

Pyodide Integration
^^^^^^^^^^^^^^^^^^^

The most challenging part of the project was integrating the Pyodide Python
package into the browser environment. Pyodide allows Python code to run
within the browser using WebAssembly. To achieve this, I performed the
following steps:

* Setting Up Pyodide: I configured Pyodide, ensuring that the environment
  was properly set up to run Python code. This included loading the
  necessary Python packages into the environment.
* Using Python Code in JavaScript: I wrote the VulnTotalWorker.js class to
  manage the interaction between the Python environment and the browser.
  This class handles various tasks:

  * Environment Initialization: It ensures that the Pyodide environment is
    correctly initialized and ready for executing Python code.
  * Communication with UI: It updates the user interface with loading
    progress and other relevant information.
  * API Key Management: It manages API keys required for VulnTotal
    operations within the Python environment.
  * Request Handling: It processes scan requests, which include the Package
    URL (PURL) and the enabled or disabled data sources, and returns the
    analysis results.

Web Worker Integration
^^^^^^^^^^^^^^^^^^^^^^

The VulnTotalWorker class operates within a web worker to handle the actual
requests for vulnerability analysis. The web worker allows the extension to
perform background tasks without blocking the main thread, ensuring a
smooth user experience. It processes requests and communicates with the
VulnTotalWorker class to fetch and return results.

Background Script
^^^^^^^^^^^^^^^^^

The background script is responsible for managing user settings and API
keys. It stores these preferences and ensures that they are accessible to
other components of the extension. This worker plays a crucial role in
maintaining user-specific configurations and providing a seamless
experience.

Content Script
^^^^^^^^^^^^^^

The content script acts as the glue between different components of the
extension. It facilitates communication between the background script, web
worker, and user interface. The content script ensures that all components
work together effectively, coordinating the flow of data and requests to
deliver the desired functionality.

Build Script
^^^^^^^^^^^^

The final part was adding a script to build the extension. This script uses
an installed chrome-based browser to bundle all the necessary files,
including the Pyodide core package and the VulnTotal Python code, into a
single extension package. This package can then be installed in the browser
to enable vulnerability analysis directly within the browser environment.

.. figure:: https://github.com/user-attachments/assets/8f13128e-a32c-46f9-af47-4ec18c7e84d4
   :alt: Extension Architecture
   :align: center
   :width: 70%

   The architecture of the extension consists of multiple components that
   work together to provide vulnerability analysis within the browser. The
   frontend interacts with the content script, which coordinates requests
   and data flow between the background script, web worker, and Pyodide
   environment. This setup ensures a seamless and efficient user
   experience.

Challenges and Solutions
------------------------

1. WebAssembly and Project Scale
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

The first significant challenge was utilizing WebAssembly (Wasm) for a
project of this scale. While most tutorials and available content
demonstrate running simple scripts in the browser, this project involved a
more complex scenario. Integrating the VulnTotal tool, which has multiple
dependencies and a larger codebase, required careful optimization and
adaptation to ensure it ran smoothly within the browser environment.
Overcoming this challenge involved extensive testing and tweaking of the
Pyodide setup to ensure compatibility and performance.

2. Browser Context Incompatibilities
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Running Python scripts in a browser context introduces restrictions that do
not exist when running the same scripts in a standard Python environment.
One of the key challenges was handling HTTP requests. Certain requests that
work seamlessly in a Python script faced issues in the browser due to the
lack of request origin, which is a crucial aspect of web security.

To address this, running requests directly in the content script was not
feasible. The solution was to leverage Web Workers, which allowed for more
flexible request handling within the browser. This approach is recommended
by Google and provides a way to bypass some of the restrictions imposed by
the browser environment.

3. GitLab Data Source Integration
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Another challenge was integrating the GitLab data source into the
extension. The original VulnTotal tool had specific configurations and data
retrieval methods for GitLab that required adaptation for the browser
environment. Ensuring proper data retrieval and presentation from GitLab
required modifying the existing VulnTotal code and handling data fetching
and parsing within the browser constraints.

4. Extension Size Optimization
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

The size of the Pyodide release posed a practical challenge. The compressed
release size for Pyodide version 0.26.1 was approximately 281MB, which is
impractical to include within the extension files. Additionally, relying on
a CDN for such a large package would be challenging due to browser
limitations and potential issues with internet consumption.

To solve this, I opted to use only the Pyodide core package, which has a
much smaller compressed size of 5.31MB. I then bundled only the necessary
wheels for the required packages, reducing the overall extension size to
about 20MB. This made the extension more efficient and practical for users
to install and use.

5. Patching the Requests Module
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Another challenge involved patching the Python requests module to work
seamlessly within the browser environment. Pyodide provides a patch that
allows requests to use XHR for non-streaming requests and the Fetch API for
streaming requests. However, this patch only worked correctly for the
initial VulnTotal request. To ensure consistent and correct results, I
implemented a mechanism to apply this patch every time the Python code was
executed. This ensured that all requests were handled appropriately,
maintaining the functionality of the extension.

Linked Pull Requests
--------------------

.. list-table::
   :widths: 10 40 20 30
   :header-rows: 1

   * - Sr. no
     - Name
     - Link
     - Status
   * - 1
     - Frontend Demo
     - `aboutcode-org/vulntotal-extension#5
       <https://github.com/aboutcode-org/vulntotal-extension/pull/5>`_
     - Merged
   * - 2
     - Gitlab Change
     - `aboutcode-org/vulnerablecode#1524
       <https://github.com/aboutcode-org/vulnerablecode/pull/1524>`_
     - Merged
   * - 3
     - Backend Integration
     - `aboutcode-org/vulntotal-extension#6
       <https://github.com/aboutcode-org/vulntotal-extension/pull/6>`_
     - Merged
   * - 4
     - Build Scripts and Readme
     - `aboutcode-org/vulntotal-extension#9
       <https://github.com/aboutcode-org/vulntotal-extension/pull/9>`_
     - Merged

Closing Thoughts
-------------------

I really enjoyed working on such a challenging project. I loved exploring
the new technologies I used, like WebAssembly, and getting it running in a
complex project with packages and multiple files like VulnTotal.

I appreciated the weekly status calls and the feedback I received from my
mentors and the amazing team. They were really helpful and supportive. -
`Philippe Ombredanne <https://github.com/pombredanne>`_ - `Ayan Sinha
Mahapatra <https://github.com/AyanSinhaMahapatra>`_ - `Ziad Hany
<https://github.com/ziadhany>`_ - `Keshav Priyadarshi
<https://github.com/keshav-space>`_ - `Omkar Phansopkar
<https://github.com/OmkarPh>`_
