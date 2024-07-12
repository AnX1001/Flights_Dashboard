## Running the App in Development Mode with Docker 🐋

If you often work with different repositories or need to change the Node.js version to run the Next.js app, consider using Docker instead.

This app has been containerized using Docker with the following setup:

- Added a `Dockerfile`
- Added a `.dockerignore`

The `.dockerignore` file excludes all files that start with `.env*`. In order to run the app, Docker needs to read the `.env.local` content.

### Setup Instructions

Follow these steps to build the Docker image and run the container:

1. **Build the Docker Image**:

   ```bash
   docker build -t flightdash .
   ```

2. **Run the Docker Container**:

   ```bash
   docker run -p 3000:3000 --env-file .env.local flightdash
   ```

You can replace the tag name (`flightdash`) as desired. For example:

```bash
docker run --env-file .env.local -p 3000:3000 my-nextjs-app
```

### Rebuilding the Docker Image

Remember that changes to the `Dockerfile` or the environment variables require you to rebuild the Docker image and restart the container for the changes to take effect. Follow these steps to stop the existing container, rebuild the image, and run the new container:

1. **Stop the Existing Container**:

   ```bash
   docker stop flightdash
   ```

2. **Rebuild the Docker Image**:

   ```bash
   docker build -t flightdash .
   ```

3. **Run the New Container**:

   ```bash
   docker run --env-file .env.local -p 3000:3000 flightdash
   ```

### System Message Widget

In the user interface, the System message UI will display whether the app is running inside Docker or not.


Sure, here is the rewritten section for your README.md to document hot reloading in Docker using Docker Compose:

---

### Hot Reloading in Docker using Docker Compose

Hot reloading is enabled in Docker using Docker Compose. The `docker-compose.yml` is configured to expose the app at port 3000, read the local `.env.local` file for the API values, and enables hot reloading through `CHOKIDAR_USEPOLLING=true`.

#### Docker Compose Configuration

The `docker-compose.yml` file should include the following configuration:

```yaml
version: '3.8'

services:
  app:
    build:
      context: .
    volumes:
      - .:/app
      - /app/node_modules
    ports:
      - '3000:3000'
    env_file:
      - .env.local
    environment:
      - CHOKIDAR_USEPOLLING=true
    command: npm run dev
    container_name: flight-container
```

#### Dockerfile Configuration

To ensure hot reloading works correctly, the Dockerfile needs to enable polling for file changes:

```Dockerfile
# Enable polling for file changes
ENV WATCHPACK_POLLING=true
ENV CHOKIDAR_USEPOLLING=true
```

---
