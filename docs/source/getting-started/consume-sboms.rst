.. _consume-sboms:

Use AboutCode to consume SBOMs from your suppliers
==================================================

You can use **ScanCode.io** to consume SBOMs from your suppliers. ScanCode.io will
identify all the licenses associated with your codebase resources, highlighting the ones
that need attention based on your policies. ScanCode.io also identifies and highlights
software vulnerabilities.

You can also use **DejaCode** to consume SBOMs from your suppliers, generally in the
context of an SBOM that you intend to use in one of your own products.

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


2. Load Package Data from SBOMs to ScanCode.io
----------------------------------------------

Create a new Project in ScanCode.io .

https://scancodeio.readthedocs.io/en/latest/user-interface.html#creating-a-new-project

Load package data from one or more SBOMs to your Project using the load_sbom Pipeline.

https://scancodeio.readthedocs.io/en/latest/built-in-pipelines.html#load-sbom

Review the details in your ScanCode.io project.

Export the results in the appropriate format to share with your team.

https://scancodeio.readthedocs.io/en/latest/output-files.html#output-files


3. Import SBOM data to a DejaCode Product
-----------------------------------------

Create a new Product in DejaCode for comprehensive analysis and action.

https://dejacode.readthedocs.io/en/latest/tutorial-1.html

Load an SBOM to your Dejacode Product.

https://dejacode.readthedocs.io/en/latest/tutorial-5-sboms.html#load-an-sbom-to-your-product

Review and edit your Product in DejaCode. Enrich the data as needed.

Generate Attribution and SBOMs from DejaCode Products.

https://dejacode.readthedocs.io/en/latest/tutorial-5-sboms.html#tutorial-5-working-with-sboms-in-a-product
