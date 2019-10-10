const fs = require('fs').promises;

function readFile(path) {
  return fs.readFile(path, 'utf-8', (err, data) => {
    if(err) throw err;
    return data;
  });
}

module.exports = { readFile };