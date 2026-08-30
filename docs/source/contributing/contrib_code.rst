.. _contrib_doc_dev:

Contributing to the AboutCode
=============================

Here are some general guidelines to contribute to AboutCode both
for new contributors and veterans, so you know how we do things Here
and what to expect from us. If you are a new contributor, make sure you
go through the entire contributing page, before you start interacting with
the project through issues/PRs or in our public chatrooms.

First interactions
------------------

- To be completed.

What can you contribute to?
---------------------------

Most of our repositories have issues labeled as a `good-first-issue`
to help new conributors get started, with a small, clearly described
issue which helps you:

- understand the codebase and the concepts
- understand how we do PR reviews, and how you have to
  seek and integrate feedback into your PR
- understand our code/documentation and other standards

You can pick up an issue generally if:

- It is labeled as a `good-first-issue` or you think you understand the problem/fix
- Doesn't have anyone (maintainers/others) assigned
- Is not assigned to a aboutcode project (see the `Projects` section on the right) 
- Has a PR open for the issue, but this is stale (2-3 months old)
- Has an open PR, but you want to add more modifications

Working on the same issue
-------------------------

You can work on something which others are already working on, but always try to
use their commits directly or at the minimum credit them for their work.
Open Source is collaborative developement, not a competetion.

- Use commits directly by adding a git remote and fetching the commits from there
- Clearly mention/reference the commits/PRs in your commit/PR

We do not assign issues to new contributors as this blocks the issue for everyone else,
and in case the issue is not resolved by the assigned person, this only hampers
productivity for the project. So:

- Please don't comment on the issue asking to be assigned to it
- No need to comment on the issue stating that you've started working on it
  or expressing interest
- Comment on a issue, only to ask specific questions/more details and discuss the
  problem/fix

Use an issue to only discuss/communicate about the problem/fix, as this helps us help
you contribute and also helps any other contributor, as they only need to go
through the things needed for the issue.

You are always encouraged to work on issues together with other contributors, and
improve on PRs, with proper communication and credit.

What you need to do before a PR review
--------------------------------------

Reviewing a PR takes significant time from the maintainers to
properly evaluate and provide feedback, and make sure the code
contributed works as expected, and can be maintained. So Please
make sure you've made the PR easy to review for us by doing the
following:

- The PR has the issue referenced clearly
  (or contains explanation on why it is needed)
- The PR is from a current branch and there is no merge conflicts
- Populate the PR template with necessary information which we ask for
- All the tests for the PR pass on the CI, or the failures are explained
- If you have regenerated test expectations make sure they are related to
  your PR and the changes make sense
- Provide a commit signoff so this can be properly attributed to you
- If you are changing any functionalty you have to update the CHANGELOG,
  documentation, and not just the code
- Refrain from populating the PR title/description with AI, just write a
  concise summary yourself
- If you are adding new functionalty or fixing an issue, you must add a test
  to check your fix/feature works as expected


Your code must be tested
-------------------------

To be completed.

Communicating with maintainers
------------------------------

AboutCode has a small team of maintainers working on maintaining
and improving all the AboutCode projects, and it might take us
some time to review

Why you want to follow our guidelines
-------------------------------------

To be completed.

