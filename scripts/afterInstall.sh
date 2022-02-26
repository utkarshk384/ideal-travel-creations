#!/bin/bash

echo "Running after install phase"
cd /home/ubuntu/ideal-travel-creations

echo "Copying .env to website folder"
cp ~/.env.production ./

echo "Running `yarn build`"
yarn build