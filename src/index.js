import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import './index.css';

export let mouseDown = 0;
document.body.onmousedown = function() {
    mouseDown = true;
}
document.body.onmouseup = function() {
    mouseDown = false;
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
