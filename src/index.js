#!/usr/bin/env node

const fs = require('fs');
const nconf_wrapper = require('./nconf_wrapper');
const program = require('commander');
const prompt = require('prompt');
const sh = require('shelljs');

program
  .arguments('<package>')
  .parse(process.argv);

// btw, this is called at the very end of this file
const main = args => {
  const command = args[0];
  switch(command) {
    case 'home':
      home();
      break;
    case 'pz':
      pz(args[1]);
    default:
      help();
  }
  console.log('thanks for using ez <3');
}

// saves the current directory as the root of their lerna project
const home = () => {
  const pwd = sh.pwd().stdout;
  nconf_wrapper.set('home', pwd);
  console.log('\nSet the home of your lerna project to ', pwd);
}

const pz = (project) => {
  console.log('pz was called!!', project);
  const home = nconf_wrapper.get('home');
  console.log('going to: ', home + '/packages/' + project);
  console.log(sh.cd(home + '/packages/' + project));
  sh.exec('cd');
  console.log(sh.exec(`cd ${nconf_wrapper.get('home')}`));
}

const exec = require('child_process').exec;

const help = () => {
  console.log('this is the helpful things to tell you how to use this!!');
  sh.exec('cdjava');
  // exec('cd src',
  //         (error, stdout, stderr) => {
  //             // console.log(`${stdout}`);
  //             // console.log(`${stderr}`);
  //             console.log('hi');
  //             console.log(`${stdout}`);
  //             console.log(`${stderr}`);
  //             if (error !== null) {
  //                 //console.log(`exec error: ${error}`);
  //                 console.log('THERE WAS AN ERROR');
  //             }
  //         });
  console.log(exec);
}

main(program.args);
