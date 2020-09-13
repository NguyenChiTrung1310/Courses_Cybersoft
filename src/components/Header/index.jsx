import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { AppBar, Toolbar } from '@material-ui/core';
import { connect } from 'react-redux';
class Header extends Component {
  render() {
    return (
      <AppBar position='static'>
        <Toolbar>
          <Button color='inherit'>Home</Button>
          <Button color='inherit'>Login</Button>
          <Button color='inherit'>Sign Up</Button>
        </Toolbar>
      </AppBar>
    );
  }
}

const mapStateToProps = (state) => ({
  isLogin: state.credentials.token,
});

export default connect()(Header);
