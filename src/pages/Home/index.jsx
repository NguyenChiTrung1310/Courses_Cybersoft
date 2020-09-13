import React, { Component } from 'react';
import { Typography, Container, Grid, withStyles } from '@material-ui/core';
import Course from '../../components/Course';
import styles from './style';
import { connect } from 'react-redux';
import { fetchCourses } from '../../redux/actions/course';

class Home extends Component {
  renderCourses = () => {
    return this.props.courseList.map((item, index) => {
      return (
        <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
          <Course item={item} />
        </Grid>
      );
    });
  };
  render() {
    return (
      <div>
        <Typography
          className={this.props.classes.title}
          component='h1'
          variant='h2'
        >
          Danh sách khóa học
        </Typography>
        <Container maxWidth='lg'>
          <Grid container spacing={3}>
            {this.renderCourses()}
          </Grid>
        </Container>
      </div>
    );
  }

  componentDidMount() {
    this.props.dispatch(fetchCourses);
  }
}

const mapStateToProps = (state) => {
  return {
    courseList: state.course.courseList,
  };
};

export default connect(mapStateToProps)(withStyles(styles)(Home));
