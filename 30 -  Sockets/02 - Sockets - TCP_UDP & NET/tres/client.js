const net = require('net');
const client = new net.Socket();

const PORT_URL = 65535;

client.connect(PORT_URL, '127.0.0.1',()=>{
})
client.on('data', (message)=>{
console.log(message);
})