How to specify Scancode Output Format
=====================================

JSON
^^^^

Currently, scancode's default behavior is output scan results in ``.json`` format. For example, running the command ``scancode /path/to/target/dir`` will output scan results in json format to stdout. A command in this format: ``scancode /path/to/target/dir /path/to/output.json`` will save the scancode results to the specified ``json`` file. 

HTML
^^^^

If you want HTML output of scancode results, you can pass either the ``--format`` or the ``--html`` argument to scancode depending on version. Newer versions of scancode us --html. The following commands will output scan results in a formatted html page or simple web application: 


* ``scancode --format html /path/to/target/dir /path/to/output.html``
* ``scancode --format html-app /path/to/target/dir /path/to/output.html``
* ``scancode --html /path/to/target/dir /path/to/output.html``

Custom format
^^^^^^^^^^^^^

While the three built-in output formats are convenient for a verity of use-cases, one may wish to create their own output template which can be passed to the ``--format`` argument. Scancode makes this very easy, as it uses the popular Jinja2 template engine. Simply pass the path to the custom template to the ``--format`` argument, or drop it in a folder to ``src/scancode/templates`` directory. 

For example, if I wanted a simple CLI output I would create a ``template2.html`` (file name and extension does not matter) with the particular data I wish to see. In this case, I am only interested in the license and copyright data for this particular scan.

::

   ## template2.html:
   [
       {% if results.license_copyright %}
           {% for location, data in results.license_copyright.items() %}
               {% for row in data %}
     location:"{{ location }}",
     {% if row.what == 'copyright' %}copyright:"{{ row.value|escape }}",{% endif %}
                {% endfor %}
            {% endfor %}
       {% endif %}
   ]

Now I can run scancode using my newly created template:

::

   $ ./scancode -f template2.html -c samples/ t.json
   Scanning files...
     [####################################]  46                                               
   Scanning done.

Now are results are saved in ``t.json`` and we can easily view them with ``head t.json``\ :

::

   [
     location:"samples/JGroups/LICENSE",
     copyright:"Copyright (c) 1991, 1999 Free Software Foundation, Inc.",

     location:"samples/JGroups/LICENSE",
     copyright:"copyrighted by the Free Software Foundation",
   ]
