How to Add New License Rules for Enhanced Detection
===================================================

ScanCode relies on license rules to detect licenses. A rule is a simple text file containing a license text or notice or mention. And a small YAML text file that tells ScanCode which licenses to report when the text is detected. 

See the :ref:`faq` for a high level description of `how to add a new rule <https://github.com/nexB/scancode-toolkit/wiki/How-to:-Add-new-license-rules-for-enhanced-detection>`_.

See the `#257 issue <https://github.com/nexB/scancode-toolkit/issues/257>`_ and the related `#258 pull request <https://github.com/nexB/scancode-toolkit/pull/258>`_ for an example: this adds a new rule to detect a combination of MIT or GPL.
