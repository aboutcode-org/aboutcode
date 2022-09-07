=================================================================
Create a web application to scan and review a single license text
=================================================================


| **Organization:** `AboutCode <https://aboutcode.org>`_
| **Project:** `Scancode.io <https://github.com/nexB/scancode.io>`_
| **Mentee:** `Lali Akhil Raj (lf32) <https://github.com/lf32>`_
| **Mentors:** `Philippe Ombredanne <https://github.com/pombredanne>`_, `Thomas Druez <https://github.com/tdruez>`_, `AyanSinhaMahapatra <https://github.com/AyanSinhaMahapatra>`_, `AvishrantsSh <https://github.com/AvishrantsSh>`_

Overview
--------

The aim of this project is to create a Django-based web application (scantext) to scan and review a single license text inside ScanCode.io. The application will be designed around a Django_REST-framework, and it will be integrated with ScanCode-Analyzer to automatically find potential issues. It will also allow the integrated reporting of license detection issues in the app based on the results.

Implementation
--------------

**After the application is created it should have these similar features**

* A form to upload/paste text from which scantext

By default, it prefers to scan input text, though both are provided.

.. image:: https://user-images.githubusercontent.com/96695352/188984928-3c40b8de-aac6-4dd2-b0eb-cb06610f2005.png
* A license summary page to view the analysed results in detail

This page is the backbone of the entire project. It is to show everything from highlighting matched licence text to showing details of every match.
There are still things that need to be implemented. For now, this is how it looks. On hovering over the dropdown in the left sidebar panel, it's going to show details of their respective match. These are just a few details at the top level. If you click on "view more details," it's going to show more details of that match. Isn't it awesome? I had terrible issues when I was designing it the other way.

Thanks to my mentors for giving me ideas to present them in a better way. The backend part (tokenization and views) wouldn't be possible without the help of the mentors. Thank you so much `@philippe <https://github.com/pombredanne>`_, `@tdruez <https://github.com/tdruez>`_, and `@Ayan <https://github.com/AyanSinhaMahapatra>`_!

.. image:: https://user-images.githubusercontent.com/96695352/188737270-03b87f46-116d-4845-9875-9601af295a10.png
* A more detail view of licenses per match

.. image:: https://user-images.githubusercontent.com/96695352/188736661-5cc590c4-23de-4454-9aed-4e7439e3c2ae.png

**Now the user can see what has been detected, right? What if the user concludes there is something wrong with the match?**

* Well, to solve it, the user has to create a new issue on scancode.io's github page and upload a few details so the developers can understand what the issue is actually.For that, the user has to provide the `Input Text`, `Matched Text`, and `Detected Values`. Luckily, there is a report functionality button provided inside the application which on click does all the work for the end user and redirects the user to scancode.io's issues page on github to save some time.[4]

.. image:: https://user-images.githubusercontent.com/96695352/188580376-668200de-7de0-483c-9a0a-5a5174c35ef5.png

Post GSoC
---------

I am interested in continuing the development process of the Scancode.io. There are still things needed to be implemented which are necessary for having an improved and stable version of `scantext` inside scancode.io

Links
-----

* `Project Idea <https://github.com/nexB/aboutcode/wiki/GSOC-2022#scancodeio--scancode-toolkit-create-web-application-to-scan-and-review-a-single-license-text>`_
* `Project Proposal <https://summerofcode.withgoogle.com/programs/2022/projects/qLGnC87T>`_
* `Project Source Code <https://github.com/nexB/scancode.io/tree/5c883673e58654624cd178b539708942ae404a18>`_

Acknowledgements
----------------

I had an amazing time working on this project this summer. Thanks, for selecting me for this project. I've got an opportunity to learn various things about software licensing and I was also able to learn various tools and got deep into Django and Django-REST-framework.

Thanks for guiding me.

Tabs are Evil, Space Rocks!!!
