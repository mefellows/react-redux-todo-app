import './favicon.ico';
import './index.html';
import 'babel-core/polyfill';
import 'normalize.css/normalize.css';
import 'todomvc-common/base.css';
import 'todomvc-app-css/index.css';
import './scss/app.scss';

import App from 'components/App/App';

import ReactDOM from 'react-dom';
import React from 'react';
import bucky from 'bucky';
bucky
  .setOptions({
    host: 'http://docker:5000',
    active: true,
    sendLatency: true,
    aggregationInterval: 2000
  });

bucky.sendPagePerformance(`myawesomemetrics.page`);

ReactDOM.render(
  <App/>,
  document.getElementById('app')
);
