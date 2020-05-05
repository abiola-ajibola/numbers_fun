import React from 'react';
import ReactDOM from 'react-dom';
// import { createStore, applyMiddleware } from 'redux';
// import { Provider } from 'react-redux';
// import thunkMiddleware from 'redux-thunk'
import './index.css';
import App from './containers/App';

// const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

ReactDOM.render(
  // <Provider store = {store} >
    <React.StrictMode>
      <App />
    </React.StrictMode>
  // </Provider>,
  ,document.getElementById('root')
);
