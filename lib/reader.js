const io = require('socket.io-client');
const socket = io.connect('http://localhost:7890');
const { readFile } = require('./file-reader');


socket.on('reader', () => {
  const path = process.argv[2];
  const string = { path: path };
  return readFile(path)
  .then(text => {
    string.text = text;
    socket.emit('read', string);
    })
    .catch(err => {
      socket.emit('file-error', err);
    });
});