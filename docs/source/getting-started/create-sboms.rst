.. _create-sboms:

Use AboutCode to create SBOMs for your products
===============================================

You can use **ScanCode.io** to create SBOMs for your products. ScanCode.io will
identify all the licenses associated with your codebase resources, highlighting the ones
that need attention based on your policies. You can also use ScanCode.io to identify
software vulnerabilities.

You can also use **DejaCode** to create SBOMs for your products. Dejacode will enable
you to review your product inventories, assert license conclusions, and record your
analysis and actions related to any licenses that require attention. You can also
record your analysis and actions related to any software vulnerabilities that you
have discovered.

1. Install AboutCode Projects
-----------------------------

**Install DejaCode.**

https://dejacode.readthedocs.io/en/latest/installation.html

**Setup your own Dataspace in DejaCode**

https://dejacode.readthedocs.io/en/latest/dataspace.html

.. note::
    Not ready to install your own instance of DejaCode? Consider taking a look at
    the DejaCode public evaluation site to take a test drive, and if you have specific
    requirements, you may also request a private SaaS evaluation dataspace.
    See https://public.dejacode.com/account/register/

**Install ScanCode.io**

https://scancodeio.readthedocs.io/en/latest/installation.html

Configure DejaCode to integrate with ScanCode.io. See

https://dejacode.readthedocs.io/en/latest/application-settings.html#scancodeio

**Install PurlDB**

https://aboutcode.readthedocs.io/projects/PURLdb/en/latest/getting-started/install.html

Configure DejaCode to integrate with your PurlDB instance. See:

https://dejacode.readthedocs.io/en/latest/application-settings.html#purldb

.. note::
    Not ready to install your own instance of PurlDB? You can configure DejaCode to
    integrate with the public version at https://public.purldb.io/

**Install VulnerableCode**

https://vulnerablecode.readthedocs.io/en/latest/installation.html#installation

Configure Dejacode to integrate with your Vulnerablecode instance.

https://dejacode.readthedocs.io/en/latest/dataspace.html#enable-vulnerablecodedb-service

.. note::
    Not ready to install your own instance of VulnerableCode? You can configure DejaCode
    to integrate with the public version at https://public.vulnerablecode.io/


2. Scan your codebases using ScanCode.io
----------------------------------------

Create new Projects in ScanCode.io to scan your codebases.

https://scancodeio.readthedocs.io/en/latest/user-interface.html#creating-a-new-project

Export the results in the appropriate format to share with your team.

https://scancodeio.readthedocs.io/en/latest/output-files.html#output-files


3. Import scan results to DejaCode products
-------------------------------------------

Create new Products in DejaCode for comprehensive analysis and action.

https://dejacode.readthedocs.io/en/latest/tutorial-1.html

Generate Attribution and SBOMs from DejaCode Products.

https://dejacode.readthedocs.io/en/latest/tutorial-5-sboms.html#tutorial-5-working-with-sboms-in-a-product

