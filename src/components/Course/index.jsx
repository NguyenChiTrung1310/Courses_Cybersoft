import React, { Component } from 'react';
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  Button,
  CardActions,
  withStyles,
} from '@material-ui/core';
import styles from './style';

class Course extends Component {
  render() {
    const { tenKhoaHoc, moTa, hinhAnh } = this.props.item;

    return (
      <div>
        <Card>
          <CardActionArea>
            <CardMedia
              // className={this.props.classes.styleImg}
              style={{ height: 150 }}
              image={hinhAnh}
              title='Contemplative Reptile'
            />
            <CardContent>
              <Typography gutterBottom variant='h5' component='h2'>
                {tenKhoaHoc}
              </Typography>
              <Typography variant='body2' color='textSecondary' component='p'>
                {moTa.substr(0, 30) + '...'}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button
              size='small'
              color='primary'
              variant='contained'
              className={this.props.classes.btnDetail}
            >
              View detail
            </Button>
          </CardActions>
        </Card>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Course);
