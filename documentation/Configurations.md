# Configurations

## Jest

Unit tests utilize two testing libraries: `@testing-library/jest-dom` and `@testing-library/react`.

- **@testing-library/jest-dom**: Provides custom Jest matchers for asserting DOM elements:

  - `toHaveTextContent`
  - `toHaveAttribute`

  These matchers are essential for validating the presence, content, and attributes of DOM elements.

- **@testing-library/react**: Offers utilities for testing React components:
  - `render`: Renders React components for testing purposes.
  - `screen`: Provides a set of utilities to interact with and assert on rendered components.

## Jest-axe

Jest-axe is employed for accessibility testing within Jest tests. The custom matcher `toHaveNoViolations` is globally integrated using `jest.setup.ts` and configured in `jest.config.ts`.
