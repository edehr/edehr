# Contributing

Welcome to our Github project! We are happy to have you here. We welcome contributions from anyone and everyone. By participating in this project, you agree to abide by our [Code of Conduct](./code_of_conduct.md).

## Getting started

For code-related instructions, please refer to the [README](./README.md) file. You can find issues in the project's issues page and you can submit pull requests to the project's pull requests page. If you are a first-time contributor, you may find value in filtering the issues that are labeled as ["good first issue"](https://github.com/edehr/edehr/labels/good%20first%20issue).

## Documentation

We value good documentation. Please ensure that any code you contribute is well-documented. This includes adding comments to your code, adding docstrings to functions and modules, and adding any necessary documentation to the project's README.

Although keep in mind that the code should be straightforward and provide enough context for the reader to understand what it does. One should consider code readability as a priority over documentation. And documentation should be present to fill in the gaps, as needed.


Another good way of documenting the behaviour of a feature should include tests. Unit tests are a great way to include documentation in the codebase. If you are adding a new feature, please consider adding tests for it. We appreciate good test coverage and every server-side PR must strive for 95% coverage.

For more information on testing, please refer to the [Testing](./testing.md) section.

## Filing an issue
When filing an issue on the EdEHR project, please provide these details:

A comprehensive list of steps to reproduce the issue.
What you're expecting to happen compared with what's actually happening.
Screenshots and video recordings demonstrating the bug are also very helpful.

Please remember to format code using triple backticks (`) so that it is neatly formatted when the issue is posted.

Any issue that is open for 14 days without actionable information or activity will be marked as "stalled" and then closed. Stalled issues can be re-opened if the information requested is provided.

When creating an issue, please use the appropriate template. If you are unsure which template to use, please use the "Bug report" template.

Here is a brief description of each template currently available:

- Bug report- Create a report to help us improve
- Custom issue template - Fully spec'ed out feature
- Small task template- A task to support a larger issue

## Commit Messages
When pushing code, you should follow the following guidelines:

* Use the imperative mood in the subject line as well as the present tense (hence "Add feature" not "Added feature")
* Limit the first line of the commit message to 72 characters or less
* Reference the relevant issue number in the commit message

Commit messages should be concise and descriptive at the same time, for further guidelines on writing good commit messages, please refer to [this](https://chris.beams.io/posts/git-commit/) article.

## Pull requests
We gladly accept pull requests to add documentation, fix bugs and, in some circumstances, add new features to the EdEHR.

Here's a quick guide:
1. Fork the repo.
2. Create new branch then make changes and add tests for your changes.
3. Push to your fork and submit a pull request. If the changes will apply cleanly to the latest stable branches and master branch, you will only need to submit one pull request. We may suggest some changes or improvements or alternatives.
4. At this point you're waiting on us. There is no formal team managing this repo, although the original developer has expressed interest in some maintenance post-contract. 

## Pull request guidelines
- Each individual commit should make sense by itself as far as possible.
- Breaking up a large change into smaller (coherent) commits is encouraged.
- Good commit messages are also encouraged. Here are some resources on writing good commit messages:
  - [Notes from Linus](https://github.com/torvalds/subsurface/commit/b6590150d68df528efd40c889ba6eea476b39873)
  - [Erlang's guide](https://github.com/erlang/otp/wiki/Writing-good-commit-messages)
  - [An often-cited post](http://tbaggery.com/2008/04/19/a-note-about-git-commit-messages.html)
- Update the documentation, examples elsewhere, guides and whatever is affected by your contribution.

## Coding Conventions

For front-end guidelines, you should keep in mind Vue's guidelines in the project, which include:

* Single-Responsibility Principle (SRP): this is very useful when writing and re-using components in Vue. It is also useful when writing unit tests. Developers should take advantage of using props and keep the data as static as possible and only modifiable when needed. 

* All templates should be written in [pug](https://pugjs.org/api/getting-started.html) to adhere to [DRY principles](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself).

* All styles should be written in [SCSS](https://sass-lang.com/documentation/syntax) to adhere to [DRY principles](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself).

Besides these top-level items, you should also follow the [Vue Style Guide](https://vuejs.org/v2/style-guide/). It provides good information on how to write Vue code that is performant, modular, and easy to read.

For Back-end guidelines, you should keep in mind the following:

* Keep the code in the structure of the project. If you are adding a new feature, please consider adding it to the appropriate folder. This will keep the file structure concise and predictable.

* Use environment variables to store any sensitive information with regards to the code. Feel free to extend our ``sample.env`` file by renaming it to ``.env`` and extend it as you see fit. Please update the sample file as you do.

* Use the [DRY principle](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself) when writing code. If you find yourself writing the same code over and over again, consider abstracting it into a function or a class. This will make the code more concise and easier to read.

Other guidelines can be found here:
[Node.js Best Practices](https://github.com/goldbergyoni/nodebestpractices)
[Express Best Practices](https://expressjs.com/en/advanced/best-practice-performance.html)
## Conclusion

Thank you for considering contributing to the project. We are happy to have you here. We look forward to your contributions. If you have any questions, please feel free to reach out to the project maintainers.