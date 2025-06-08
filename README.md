[![CI](https://github.com/stuart-p/ci-example/actions/workflows/ci.yml/badge.svg)](https://github.com/stuart-p/ci-example/actions/workflows/ci.yml)

# Basic CI Pipeline Example with GitHub Actions

This repository contains a basic example of setting up a Continuous Integration (CI) pipeline using [GitHub Actions](https://github.com/features/actions).

## Purpose

Demonstrate how to configure a simple CI workflow that builds and tests a Node.js/Express application automatically on every push or pull request.

## Prerequisites

- [GitHub account](https://github.com/)
- [Node.js](https://nodejs.org/) (for local development)
- [Docker](https://www.docker.com/) (optional, for containerization)

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/stuart-p/ci-pipeline-example.git
   cd ci-pipeline-example
   ```

2. (Optional) Run the application locally:

   ```bash
   cd api
   npm install
   npm start
   ```

3. The CI pipeline will automatically run on GitHub Actions for every push or pull request.

## CI Pipeline Overview

- **Lints** for consistent code style.
- **Runs tests** to ensure code quality.
- **Builds** the Node.js/Express application Docker image.
- **Runs and smoke tests** Check the running container to verify it starts and responds as expected.

The workflow configuration can be found in `.github/workflows/`.

## Project Structure

```
.
├── .github/
│   └── workflows/       # GitHub Actions workflow files
├── api/                 # Source code for the Express server
│   ├── Dockerfile       # Dockerfile for the Express server (optional)
├── docker-compose.yml   # Docker Compose configuration (optional)
└── README.md            # Project documentation
```

## License

This project is licensed under the MIT License.
