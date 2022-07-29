import { WebSocketServer } from 'ws'

const wss = new WebSocketServer({ port: 9000 })

wss.on('connection', ws => {
  console.log('connection')
  ws.on('message', data => console.log('received: %s', data))
})

console.log('Websocket server started on :9000')
