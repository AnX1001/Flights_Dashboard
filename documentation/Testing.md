# Testing

## Jest

Unit tests utilize two testing libraries: `@testing-library/jest-dom` and `@testing-library/react`.

- **@testing-library/jest-dom**: Provides custom Jest matchers for asserting DOM elements:

  - `toHaveTextContent`
  - `toHaveAttribute`

  These matchers are essential for validating the presence, content, and attributes of DOM elements.

- **@testing-library/react**: Offers utilities for testing React components:
  - `render`: Renders React components for testing purposes.
  - `screen`: Provides a set of utilities to interact with and assert on rendered components.

## Jest Commands

The script is setup to run the jest command though npm run test. The following commands are useful for debugging:

Tip 💡: The double -- in command lines separates options for the main command from options for invoked scripts or commands.

- npm run test -- --coverage
- npm run test -- --t 'Name of test'
- npm run test -- --changedSince=HEAD


## Jest-axe

Jest-axe is employed for accessibility testing within Jest tests. The custom matcher `toHaveNoViolations` is globally integrated using `jest.setup.ts` and configured in `jest.config.ts`.
