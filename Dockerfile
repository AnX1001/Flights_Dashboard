# Use the official Node.js image with the required version
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .
# Easily identify if the app is running inside docker
ENV RUNNING_IN_DOCKER=true

# Expose the port that the Next.js app runs on
EXPOSE 3000

# Command to run the application in development mode
CMD ["npm", "run", "dev"]