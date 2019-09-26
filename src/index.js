import React from 'react';
import ReactDOM from 'react-dom';
const { render } = ReactDOM
import Nav from './nav';
import People from './people';
import Places from './places';
import Things from './things';
import App from './app';


render(<App />, document.querySelector('#root'));
