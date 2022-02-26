#!/bin/bash

echo "Running Before install phase"

echo "Updating existing packages"
sudo apt update

echo "Installing Node"
curl -sL https://deb.nodesource.com/setup_14.x | sudo bash -
sudo apt -y install nodejs

echo "Installing Yarn Package Manager"
sudo npm install -g yarn

echo "Installing pm2"
npm install -g pm2

echo "Creating our website folder"
DIR=/home/ubuntu/ideal-travel-creations
if [ -d "$DIR" ]; then
    echo "${DIR} is already present"
else
    echo "Creating new directory at ${DIR}"
fi
cd /home/ubuntu/ideal-travel-creations

