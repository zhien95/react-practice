import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Greeting(){
  return <h1>Hello World!</h1>
}

ReactDOM.render( <Greeting/>,
  document.getElementById('root')
);
