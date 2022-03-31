console.log('Iniciando servidor puente UDP-Websockets');
const OSC = require('osc-js')

const config = {
    udpServer: {  // desde donde escucharemos mensajes OSC provenientes de pure data
        host: '0.0.0.0', // abierto a recibir mensajes de cualquier ip
        port: 9129, 
    }, wsServer: { // desde donde enviaremos datos websockets al browser
        host: 'localhost',
        port: 8080
    }
}
const osc = new OSC({ plugin: new OSC.BridgePlugin(config) })
osc.open()

// opcionales solo para debug
osc.on('/amp', message => { console.log('msg', message); })
osc.on('/frec', message => { console.log('msg', message); })
