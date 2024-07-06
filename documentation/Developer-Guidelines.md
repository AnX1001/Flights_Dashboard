# <span style="color: peachpuff">Developer Guidelines ⌨️</span>

## Semantic Commits

Use semantic commits and branch naming. For references, please see below.

### Branch Naming

- `feature/user-authentication`

- `bugfix/fix-login-error`

- `hotfix/security-vulnerability-patch`

- `release/v1.2.0`

- `improvement/refactor-user-service`

- `experiment/try-new-auth-method`

- `docs/update-api-docs`

- `chore/update-dependencies`

## Semantic Commit Types

`e.g. chore: install jest-axe library, style: format with prettier`

- **feat**: New feature for the user, not a new feature for build script.
- **fix**: Bug fix for the user, not a fix to a build script.
- **docs**: Changes to the documentation.
- **style**: Formatting, missing semi colons, etc.; no production code change.
- **refactor**: Refactoring production code, e.g., renaming a variable.
- **test**: Adding missing tests, refactoring tests; no production code change.
- **chore**: Updating grunt tasks, etc.; no production code change.

## Adding a new API

Please document usage details for any API in the [API Endpoints](API-Endpoints.md).
