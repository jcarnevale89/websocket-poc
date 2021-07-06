const WebSocket = require('ws')

const port = 9898

console.log(`Creating Websocket on port ${port}`)
const wss = new WebSocket.Server({ port })

// When the client connects.
wss.on('connection', (ws) => {
    console.log('Client connected!')

    // When the client sends a message to the server
    ws.on('message', (pageSlug) => {
        console.log(`Slug received: ${pageSlug}`)

        // Get data for slug and send it back to the client
        ws.send(`insert data for slug ${pageSlug}: ${Math.random()}`)
    })
})

// wss.on('connection', function connection(ws) {
//     ws.on('message', function incoming(data) {
//         wss.clients.forEach(function each(client) {
//             if (client !== ws && client.readyState === WebSocket.OPEN) {
//                 client.send(data);
//             }
//         });
//     });
// });

// function noop() {}

// function heartbeat() {
//   this.isAlive = true;
// }
// wss.on('connection', function connection(ws) {
//   ws.isAlive = true;
//   ws.on('pong', heartbeat);
// });

// const interval = setInterval(function ping() {
//   wss.clients.forEach(function each(ws) {
//     if (ws.isAlive === false) return ws.terminate();

//     ws.isAlive = false;
//     ws.ping(noop);
//   });
// }, 30000);

// wss.on('close', function close() {
//   clearInterval(interval);
// });
