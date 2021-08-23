const os = require('os');
console.clear()

setInterval(() => {

const { freemem, totalmem } = os

const total = parseInt(totalmem()/1024 /1024);
const men = parseInt(freemem()/1024 /1024);
const porcents = parseInt((men / total)*100)

const loge = {
  free: `${men} MB`,
  total: `${total} MB`,
  usage: `${porcents} % `,
}
console.clear()
console.clear()
console.log(" ===== PC Status =====");
console.table(loge);
}, 2000);
