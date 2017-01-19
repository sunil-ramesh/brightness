const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');
const brightness = require('brightness');

const mybrightness = require('./mybrightness.js');

var argv = yargs.argv;
console.log(argv.myBrightness);

mybrightness.getBrightness();
mybrightness.changeBrightness(argv.myBrightness);

module.exports = mybrightness;
