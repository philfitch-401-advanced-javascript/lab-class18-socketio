const io = require('socket.io')(7890);

io.connect('connection', socket => {
  socket.emit('reader');

  socket.on('read', string => {
    socket.broadcast.emit('capitalize', string);
  });

  socket.on('capitalized', string => {
    socket.broadcast.emit('write', string);
  });

  socket.on('written', () => {
    console.log('capitalized file written');
  });

})