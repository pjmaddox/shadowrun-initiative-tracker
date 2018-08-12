#!/bin/bash

#Generate a new build of the app
echo "Generating latest build!"
yarn build

#Remove the current stuff on the server and stop the current docker container
SCRIPT="echo '---Removing dockertest dir---\n';sudo rm -r dockertest; echo ---Removing active docker instances---\n; docker ps -aq; echo ---Remaking directory to hold app---\n; mkdir dockertest; cd dockertest; mkdir build"
ssh -i workLaptopEc2KeyPair.pem ec2-user@18.222.222.150 "${SCRIPT}"

#remove all the node modules
# rm -r node_modules/

#Transfer the needed files to the server
echo "---Sending files for docker to build---\n"
scp -i workLaptopEc2KeyPair.pem -r ./build/ ec2-user@18.222.222.150:~/dockertest/build
scp -i workLaptopEc2KeyPair.pem -r ./.dockerignore ec2-user@18.222.222.150:~/dockertest
scp -i workLaptopEc2KeyPair.pem -r ./Dockerfile ec2-user@18.222.222.150:~/dockertest
scp -i workLaptopEc2KeyPair.pem -r ./server.js ec2-user@18.222.222.150:~/dockertest

SCRIPT2="echo '---Building docker container---\n; cd dockertest; docker build -t pjmaddox24/initiative-tracker-image .; echo '---Running docker container -p 80:8080---\n'; docker run -d -p 80:8080 --name init-app pjmaddox24/initiative-tracker-image"
ssh -i workLaptopEc2KeyPair.pem ec2-user@18.222.222.150 "${SCRIPT2}"

echo "---Complete!---\n"