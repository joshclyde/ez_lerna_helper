#!/usr/bin/env node

const fs = require('fs');
const nconf_wrapper = require('./nconf_wrapper');
const program = require('commander');
const prompt = require('prompt');
const sh = require('shelljs');

program
  .arguments('<package>')
  .parse(process.argv);




const command = program.args[0];
