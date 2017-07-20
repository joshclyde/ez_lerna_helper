const fs = require('fs');
const nconf = require('nconf');

const PATH_TO_CONFIG = 'config/config.json';
nconf.argv().env().file({ file: PATH_TO_CONFIG });
nconf.load();

const get = (key) => {
  return nconf.get(key);
}

const save = () => {
  nconf.save((err) => {
    fs.readFile(PATH_TO_CONFIG, function (err, data) {
      // console.dir(JSON.parse(data.toString()))
    });
  });
}

const set = (key, value) => {
  nconf.set(key, value);
  save();
}


module.exports = {
  get,
  save,
  set,
}
