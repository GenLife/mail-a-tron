#
# Dockerfile
# The FROM directive sets the Base Image for subsequent instructions
FROM node:6.9.4-alpine
#
# Install Yarn
RUN npm i -g yarn
#
# Create app directory and set as working directory
RUN mkdir -p /app
WORKDIR /app
#
# Install dependencies
ADD yarn.lock package.json ./
RUN yarn
#
# Copy app source
ADD . /app
#
# Build the app so it is ready to go
RUN npm run build
#
# Run app
CMD ["npm", "start"]
