#!/bin/bash

#Grab username and password variable from file
usernameAndPassword=$(cat usernameAndIp.txt)
echo "Connecting to: $usernameAndPassword"

#Generate a new build of the app
echo "Generating latest build!"
yarn build

#Remove the current stuff on the server and stop the current docker container
SCRIPT="echo '---Removing dockertest dir---\n';sudo rm -r dockertest; echo ---Stopping active docker instances---\n; docker kill init-app;  echo ---Removing all docker instances---\n; docker rm init-app; echo ---Remaking directory to hold app---\n; mkdir dockertest; cd dockertest; mkdir build"
ssh -i workLaptopEc2KeyPair.pem $usernameAndPassword "${SCRIPT}"

#remove all the node modules
# rm -r node_modules/

#Transfer the needed files to the server
echo "---Sending files for docker to build---\n"
scp -i workLaptopEc2KeyPair.pem -r ./build/ $usernameAndPassword:~/dockertest
scp -i workLaptopEc2KeyPair.pem -r ./.dockerignore $usernameAndPassword:~/dockertest
scp -i workLaptopEc2KeyPair.pem -r ./Dockerfile $usernameAndPassword:~/dockertest
scp -i workLaptopEc2KeyPair.pem -r ./server.js $usernameAndPassword:~/dockertest
scp -i workLaptopEc2KeyPair.pem -r ./package.json $usernameAndPassword:~/dockertest

SCRIPT2="echo '---Building docker container---\n'; cd dockertest; docker build -t pjmaddox24/initiative-tracker-image .; echo '---Running docker container -p 80:8080---\n'; docker run -d -p 80:8080 --name init-app pjmaddox24/initiative-tracker-image"
ssh -i workLaptopEc2KeyPair.pem $usernameAndPassword "${SCRIPT2}"

echo "---Complete!---\n"