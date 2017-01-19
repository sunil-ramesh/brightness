#!/bin/sh

read -p "Enter brightness between 0 & 1: " value
sudo node app.js --myBrightness=$value