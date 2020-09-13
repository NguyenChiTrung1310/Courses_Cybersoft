import { Box, Button, TextField, Typography } from '@material-ui/core';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signIn } from '../../redux/actions/auth';

class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      credentials: {
        taiKhoan: '',
        matKhau: '',
      },
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.credentials);
    this.props.dispatch(signIn(this.state.credentials));
  };

  handleChange = (e) => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value,
      },
    });
  };

  render() {
    return (
      <div>
        <Box textAlign='center' mb={5}>
          <Typography component='h1' variant='h2'>
            Sign in
          </Typography>
        </Box>
        <Box
          component='form'
          width='50%'
          mx='auto'
          onSubmit={this.handleSubmit}
        >
          <Box mb={3}>
            <TextField
              fullWidth
              id='outlined-basic'
              label='Username'
              variant='outlined'
              name='taiKhoan'
              onChange={this.handleChange}
            />
          </Box>
          <Box mb={3}>
            <TextField
              type='password'
              fullWidth
              id='outlined-basic'
              label='Password'
              variant='outlined'
              name='matKhau'
              onChange={this.handleChange}
            />
          </Box>

          <Box textAlign='center'>
            <Button type='submit' variant='contained' color='secondary'>
              Submit
            </Button>
          </Box>
        </Box>
      </div>
    );
  }
}

export default connect()(Signin);
