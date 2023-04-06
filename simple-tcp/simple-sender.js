const net = require("net");

const socket = net.createConnection({ host: "127.0.0.1", port: 3099 }, () => {
  const buff = Buffer.alloc(8);
  buff[0] = 12;
  buff[1] = 34;

  socket.write(buff);
});
