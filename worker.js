/* eslint-env worker */
export default {
  async fetch (request, env, ctx) {
    // Connect to the URL on port 3000, but a request to port 80 will be sent.
    const url = 'http://ws-port-bug-repro-0.loca.lt:3000'
    const resp = await fetch(url, {
      headers: {
        Upgrade: 'websocket'
      }
    })
    console.log(resp.status, resp.statusText)

    // If the WebSocket handshake completed successfully, then the
    // response has a `webSocket` property.
    const ws = resp.webSocket
    if (!ws) {
      throw new Error("server didn't accept WebSocket")
    }

    // Call accept() to indicate that you'll be handling the socket here
    // in JavaScript, as opposed to returning it on to a client.
    ws.accept()

    // Now you can send and receive messages like before.
    ws.send('hello')

    await new Promise(resolve => {
      ws.addEventListener('message', msg => {
        console.log(msg.data)
        resolve()
      })
    })

    return new Response()
  }
}
