import React from 'react'
import ReactDom from 'react-dom'

function Greeting(){
  return <h4>Hello im the first Component</h4>; 
}

ReactDom.render(<Greeting/>,document.getElementById('root'));