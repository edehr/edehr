# Testing

We currently have some tests in place, however, we are looking to improve our testing coverage. So any contributions are welcome in that regard, when writing tests, make sure to read through our testing guidelines in the section below

# Guidelines

## Front-end Tests

For writing good Vue.js tests, you should consider the following: 

- Tests should be written in a way that is easy to understand and maintain.
- Prioritize Unit tests rather than Integration or End-to-End tests, as they are easier to maintain and debug.
- Tests should mock the functionality of the components they are testing, and not the functionality of the components they are dependent on. Make sure to keep them as separate as possible

Feel free to implement the testing strategy you see fit, some testing strategies may include:

- **Mocking** the functionality of the components by replacing the dependencies and services with fake implementations, which is valuable for isolating behaviour
  
- **Stubbing** similar to Mocking, but by replacing a function or method with a fake implementation of it, returning a predetermined value
  
- **Component Snapshot Testing** which would involve testing a component's rendered output and comparing it to a previously saved snapshot. 

For further reference to writing Vue tests, please refer to the Vue Testing Handbook [here](https://lmiller1990.github.io/vue-testing-handbook/).

## Back-end Tests

For writing good Express tests, you should consider the following:

- All files using the extension ``.spec.js`` are considered tests (and therefore run by ``npm run test``). However, since a lot of the tests required an attached database, they cannot be run in the CI pipeline (Github Actions). Therefore, all tests that do not require a database connection should be written in a file with the extension ``.system.spec.js``. Please, make sure to name your test files accordingly.

- Tests should be written in a way that is easy to understand and maintain.

- All axios tests should be mocked by using the project's ``axios-mock-helper`` which can be found under ``src/tests/helpers/axios-mock-helper.js``

- Tests should mock the functionality of the components they are testing, and not the functionality of the components they are dependent on. Make sure to keep them as separate as possible

- You should extend jest mocking library when needed. For further information: [Jest Mocking](https://jestjs.io/docs/mock-functions)

- You should combine Unit tests with Integration tests as you see fit. For further information: [Unit Testing](https://en.wikipedia.org/wiki/Unit_testing) and [Integration Testing](https://en.wikipedia.org/wiki/Integration_testing)

For more information on how to write tests, please refer to the [Jest Documentation](https://jestjs.io/docs/en/getting-started).

