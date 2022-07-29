import WebSocket from 'ws'

const ws = new WebSocket('ws://ws-port-bug-repro-1.loca.lt:80')

ws.on('open', () => console.log('opened'))

ws.on('message', data => console.log('received: %s', data))
