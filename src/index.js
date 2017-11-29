import React from 'react';
// import { render } from 'react-dom';
import { render } from 'react-snapshot';

import './styles/normalize.css';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

render(<App />, document.getElementById('root'));
registerServiceWorker();
