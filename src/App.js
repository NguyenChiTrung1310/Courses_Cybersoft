import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import Home from './pages/Home';
import Signin from './pages/Signin';
import { createAction } from './redux/actions';
import { SET_TOKEN } from './redux/actions/type';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Home />
        <Signin />
      </div>
    );
  }
  componentDidMount() {
    const token = localStorage.getItem('myToken');
    if (token) {
      this.props.dispatch(createAction(SET_TOKEN, token));
    }
  }
}

export default connect()(App);
