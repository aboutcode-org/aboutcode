Writing good Commit Messages
============================

What is good commit message? We want to avoid this: https://xkcd.com/1296/

Read these articles:

- by @cbeams `How to Write a Git Commit Message <https://chris.beams.io/posts/git-commit/>`_
- this README from Linus Torvalds https://github.com/torvalds/subsurface-for-dirk/blob/0f58510ce0244513521296b75281fcc32f72a931/README#L73
- from the Git book: https://git-scm.com/book/en/v2/Distributed-Git-Contributing-to-a-Project


The main style points are these:

Subject:

- Add a issue number at the end of the line when available as in "#234"
- Limit the subject line to 50 characters
- Capitalize the subject line
- Do not end the subject line with a period
- Use the imperative mood in the subject line: you are giving orders to the codebase

Body:

- Separate subject from body with a blank line
- Wrap the body at 72 characters. Use only spaces for formatting, not tabs.
- Use the body to explain what and why vs. how
- use bullets with a * if needed
- Add a Reported-by: if needed
- End your message with a Signed-off-by: prefixed by a blank line


Other comments:

We like to suffix the subject line with an issue number. If this was a trivial change it may not
have one though. If it had one a you would use ``#156`` as a suffix to the first line.

We like to tell why the commit is there and use an imperative style, like if you were giving an
order to the codebase with your commit:

e.g rather than : ``Minor fix for unnecessary operations.``
may be ``Remove unnecessary operations #123``
or::

    Remove unnecessary operations #123

        * If the ts timestamp does not exist, do not compare with old one.

You need to add a signoff to your commit. So the final message would have looked like this::

    Remove unnecessary operations #123

        * If the ts timestamp does not exist, do not compare with old one.

    Signed-off-by: Philippe Ombredanne <pombredanne@nexb.com>
