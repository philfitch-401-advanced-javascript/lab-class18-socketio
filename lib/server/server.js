const io = require('socket.io')(7890);

io.on('connection', socket => {
  console.log('on')
  socket.emit('reader');

  socket.on('read', string => {
    console.log(string)
    socket.broadcast.emit('capitalize', string);
  });

  socket.on('capitalized', string => {
    socket.broadcast.emit('write', string);
  });

  socket.on('written', () => {
    console.log('capitalized file written');
  });

})