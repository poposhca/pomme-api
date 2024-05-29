# Start from a Node.js image.
FROM node:21

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the code
COPY . .

# Build the project
RUN npm run build

# Expose the port the app runs on
EXPOSE 3000

# Start the app
CMD [ "npm", "start" ]