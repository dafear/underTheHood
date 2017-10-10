import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
// import App from './components/App';
import register from './components/register';
import './index.css';

ReactDOM.render(
	<Provider store={store}>
		<register />
	 </Provider>,
  document.getElementById('root'));

