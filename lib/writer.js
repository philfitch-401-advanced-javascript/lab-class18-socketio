const io = require('socket.io-client');
const socket = io.connect('http://localhost:7890');
const { writeFile } = require('./file-writer');


socket.on('write', ({ path, text }) => {
  writeFile(path, text)
    .then(() => {
      socket.emit('written');
    })
    .catch(err => {
      socket.emit('file-error', err);
    });
});