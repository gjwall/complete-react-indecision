import validator from 'validator';
import React from 'react';
import ReactDOM from 'react-dom';

console.log(validator.isEmail('test@gmail.com'));
 
const template = <p>JSX from dev</p>;
ReactDOM.render(template, document.getElementById('app'));
