import React from 'react';

function tick() {
  return(
    <div>
      <h4> Bom dia </h4>
      <h3> clock's {new Date().toLocaleTimeString()}.</h3>
    </div>
  )
}
setInterval(tick, 1000);

export default tick
