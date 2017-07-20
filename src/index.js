#!/usr/bin/env node

const program = require('commander');
const prompt = require('prompt');
const sh = require('shelljs');

program
  .arguments('<package>')
  .parse(process.argv);


const package = program.args[0];
console.log(`zooming to ${package}`);
