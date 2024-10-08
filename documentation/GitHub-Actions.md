# Pipeline

## Github Actions

The workflow for this application is automated using Github Actions.

```yaml
name: Run Tests on Pull Request and Push to Main

on:
  push:
    branches:
      - main
  pull_request:
    branches:
      - main

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2
    - name: Setup Node.js
      uses: actions/setup-node@v1
      with:
        node-version: '22'
    - name: Install Dependencies
      run: npm install
    - name: Run Tests
      run: npm run test

```
## GitHub Actions Key Concepts

In the context of GitHub Actions, it's essential to understand the following terms:

- **`uses`**: This directive allows you to incorporate an external action into your workflow. Actions can be pre-built by the community or custom-made, and they are used to perform specific tasks within a job.

- **`runs-on`**: Specifies the runner that will execute your jobs. A runner is a virtual machine hosted by GitHub, providing a fresh instance of a virtual environment.

- **`run`**: A command that executes shell commands directly in the runner's environment. This is particularly useful for executing scripts defined in your project's `package.json` or any other shell commands necessary for your workflow.


