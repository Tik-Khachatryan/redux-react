import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';

const initialState = {count: 0};

function reducer(state = initialState, action) {
    switch (action.type) {
        case "PLUS":
            return {count: state.count + 1};
        case "MINUS":
            return {count: state.count - 1};
        default:
            return state
    }
}

const store = createStore(combineReducers({
   reducerOne :  reducer
}));


ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,

    document.getElementById('root')
);


