import React, { Component } from 'react';
import { Typography, Container, Grid, withStyles } from '@material-ui/core';
import Course from '../../components/Course';
import styles from './style';
import axios from 'axios';
import { connect } from 'react-redux';

class Home extends Component {
  render() {
    return (
      <div>
        <Typography
          className={this.props.classes.title}
          component="h1"
          variant="h2"
        >
          Danh sách khóa học
        </Typography>
        <Container maxWidth="lg">
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <Course />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <Course />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <Course />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <Course />
            </Grid>
          </Grid>
        </Container>
      </div>
    );
  }

  componentDidMount() {
    axios({
      url:
        'http://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01',
      method: 'GET',
    })
      .then((res) => {
        console.log(res);

        // 1) dispatch action
        this.props.dispatch({
          type: 'SET_COURSES',
          payload: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

export default connect()(withStyles(styles)(Home));
