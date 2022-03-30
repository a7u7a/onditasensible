console.log('Starting bridge server');
const OSC = require('osc-js')

const config = { udpServer: { port: 9129, host: '0.0.0.0' } }
const osc = new OSC({ plugin: new OSC.BridgePlugin(config) })

osc.open() // start a WebSocket server on port 8080

osc.on('/ramp1', message => { console.log('msg', message); })