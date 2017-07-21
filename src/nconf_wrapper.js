const fs = require('fs');
const nconf = require('nconf');

const PATH_TO_CONFIG = 'config/config.json';
nconf.argv().env().file({ file: PATH_TO_CONFIG });
nconf.load();

const get = key => {
  return nconf.get(key);
}

const save = () => {
  nconf.save(err => {
    if (err) {
      console.log(err);
    };
  });
}

const set = (key, value) => {
  nconf.set(key, value);
  save();
  console.log('hi');
}


module.exports = {
  get,
  set,
}
