FROM node:latest

WORKDIR /user/src/app

#Copy package json into image so we can install dependencies
#from package*.json to the current working directory in the image "./"
COPY package*.json ./

# Run npm install in the current working directory off the newly added package.json and package.lock.json files
RUN npm install --only=production

# Copy everything from the build directory into the current working directory in the docker image
COPY build/ ./build/

# Grab the server file
COPY server.js .

# The server.js files listens on port 8080, we want to map port 80 of the machine running docker to port 8080 of the docker image
EXPOSE 80:8080

CMD ["node", "server.js"]
