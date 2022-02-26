#!/bin/bash

echo "Starting pm2 process"
cd /home/ubuntu/ideal-travel-creations

echo "Starting nginx"
sudo systemctl restart nginx

echo "Starting the website"
{
    pm2 start website
} || {
    pm2 start yarn --name website -- start 4000
}

echo "Started the site and is running"
pm2 status