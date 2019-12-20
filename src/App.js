import React from 'react';
import './App.css';
import Counter from "./components/Counter";
import { connect } from 'react-redux';

function App(props) {
  return (
    <Counter props={props}/>
  );
}

const mapStateToProps = state => ({
    count: state.reducerOne.count
});

const mapDispatchToProps = dispatch => ({
    plusDispatch(){
        dispatch({type: 'PLUS'})
    },
    minusDispatch(){
        dispatch({type: 'MINUS'})
    }
});

const connectedApp = connect(
    mapStateToProps,
    mapDispatchToProps
)(App);

export default connectedApp;