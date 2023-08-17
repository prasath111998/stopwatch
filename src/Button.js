import React from 'react'

function Button({start,status,reset,stop}) {
  return (
    <div>
        {status === 0 &&  <div> <button onClick={ start}>Start</button>   
        <button onClick={ reset}>Reset</button></div>}
        {status === 1 &&
        <div>
          
            <button onClick={ stop}>Stop</button>
            </div>
        }
    </div>
  )
}

export default Button;