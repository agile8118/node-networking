const dgram = require("dgram");

// max size of buffer size by default: 9216 bytes
const sender = dgram.createSocket({ type: "udp4", sendBufferSize: 20000 });

sender.send(
  Buffer.from("Some amount of data 1 ..."),
  8000,
  "127.0.0.1",
  (e, bytes) => {
    if (e) console.log(e);
    console.log(bytes);
  }
);

sender.send(
  Buffer.from("Some amount of data 2 ..."),
  8000,
  "127.0.0.1",
  (e, bytes) => {
    if (e) console.log(e);
    console.log(bytes);
  }
);

// Another syntax:
sender.connect(8000, "127.0.0.1", (err) => {
  if (err) console.log(err);

  sender.send(Buffer.from("Some amount of data..."));
});
