# Use a base image
FROM node:16.14.0

# Set the working directory
WORKDIR /app

# Copy the application files to the container
COPY . .

# Install dependencies (if any)
RUN npm install

# Expose a port (if needed)
EXPOSE 3000

# Define the command to run the application
CMD npm start
