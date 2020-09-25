import validator from 'validator';
import React from 'react';
import ReactDOM from 'react-dom';

console.log(validator.isEmail('test@gmail.com'));

const template = React.createElement('p', {}, 'testing 123');
// <!-- const template = <p>testing 123</p>; -->
ReactDOM.render(template, document.getElementById('app'));
