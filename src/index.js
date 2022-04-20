import React from 'react';
import { render } from 'react-dom';
import RouterApp from './router/Router';

// Since we are using HtmlWebpackPlugin WITHOUT a template, we should create our own root node in the body element before rendering into it
let root = document.createElement('div');
let body = document.body;
body.style.padding = '0'
body.style.margin = '0'
body.minWidth = '800px'
body.minHeight = '600px'
body.style.backgroundColor = '#202035'
root.id = "root";
document.body.appendChild( root );

// Now we can render our application into it
render( <RouterApp />, document.getElementById('root') );
