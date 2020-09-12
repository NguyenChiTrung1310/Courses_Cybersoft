import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

class Header extends Component {
  render() {
    return (
      <div className="btn">
        <Button variant="outlined" color="secondary">
          Primary
        </Button>
      </div>
    );
  }
}

export default Header;
