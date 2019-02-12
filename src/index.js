import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.css';
import PizzaCreator from './components/pizzaCreator';

function main() {
  ReactDOM.render(<PizzaCreator />, document.getElementById('app'));

}

document.addEventListener('DOMContentLoaded', main);