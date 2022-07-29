import WebSocket from 'ws'

// Expected to NOT work when connecting to 3000, but 80 is fine.
// This is just proof that local tunnel does not accept requests on any port other than 80.
const ws = new WebSocket('ws://ws-port-bug-repro-1.loca.lt:3000')

ws.on('open', () => console.log('opened'))

ws.on('message', data => console.log('received: %s', data))
