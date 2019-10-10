const fs = require('fs').promises;

function writeFile(path, string) {
  console.log(string)
  return fs.writeFile(path, string, (err) => {
    if(err) throw err;
  });
}

module.exports = { writeFile };