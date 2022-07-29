# ws-port-bug-repro

This repo is a working reproduction of a bug when opening a Websocket connection using fetch from Cloudflare workers.

What does it do?

1. Creates a websocket server listening locally on :9000
2. Opens a local tunnel allowing an external server running on :80 to proxy requests to :9000
3. Starts a Cloudflare worker that attempts to connect to the external URL on port :3000 i.e. not :80 where it is running.
4. Observe that a connection is opened to :80 not :3000

There's also a `ws-client.js` script that you can use to verify for yourself that the local tunnel URL does not accept connections on :3000.

## Usage

Install dependencies:

```
npm install
```

Start websocket server on port 9000:

```
npm run start:server:node
```

You should see:

```
Websocket server started on :9000
```

Open a local tunnel to port 9000:

```
npm run start:server:lt
```

You should see:

```
your url is: http://ws-port-bug-repro-1.loca.lt
```

(if that URL is not shown, it means someone else is using it and you need to instead copy the URL you see into `worker.js`. It is important you retain `:3000` in the worker URL as it is the proof of the bug).

Start the worker:

```
npm run start:worker
```

When the worker is started, just open http://localhost:8787 in your browser.

