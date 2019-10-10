const io = require('socket.io-client');
const socket = io.connect('http://localhost:7890')

socket.on('capitalize', (string) => {
  console.log(string)
  string.text = string.text.toUpperCase();
  socket.emit('capitalized', string);
});