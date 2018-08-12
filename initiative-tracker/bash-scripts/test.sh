#!/bin/bash

#Generate a new build of the app
yarn build

#Remove the current stuff on the server and stop the current docker container
SCRIPT="sudo rm -r dockertest; ls; docker ps -aq; "
ssh -i workLaptopEc2KeyPair.pem ec2-user@18.222.222.150 "${SCRIPT}"

#remove all the node modules
rm -r node_modules/

#Transfer the needed files to the server
scp -i workLaptopEc2KeyPair.pem -r ./build/ ec2-user@18.222.222.150:~/dockertest
scp -i workLaptopEc2KeyPair.pem -r ./.dockerignore ec2-user@18.222.222.150:~/dockertest
scp -i workLaptopEc2KeyPair.pem -r ./Dockerfile ec2-user@18.222.222.150:~/dockertest
scp -i workLaptopEc2KeyPair.pem -r ./server.js ec2-user@18.222.222.150:~/dockertest

