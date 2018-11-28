import React from 'react';
import { render } from 'react-dom';
import Home from '../pages/containers/home'

console.log('hola mundo');
const homeContainer = document.getElementById('home-container');

render(<Home/>, homeContainer);