#!/bin/bash

echo "Running Before install phase"
rm itc.zip

echo "Creating our website folder"
DIR=/home/ubuntu/ideal-travel-creations
if [ -d "$DIR" ]; then
    echo "${DIR} is already present"
else
    echo "Creating new directory at ${DIR}"
    mkdir /home/ubuntu/ideal-travel-creations
fi

echo "Moving website files to website folder"
mv ./temp/**/.* ./ideal-travel-creations

rm -rf ./temp
cd ./ideal-travel-creations

echo "Installing packages"
sudo yarn

echo "Copying .env to website folder"
cp ../.env.production ./

echo "Creating build"
yarn build

echo "Starting the website"
{
    pm2 start website
} || {
    pm2 start yarn --name website -- start 4000
    pm2 save
}

echo "Started the site and is running"
pm2 status



