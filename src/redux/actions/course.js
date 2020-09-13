// create async action
import axios from 'axios';
import { createAction } from '.';
import { SET_COURSES } from './type';

export const fetchCourses = (dispatch) => {
  axios({
    url:
      'http://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01',
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + localStorage.getItem('myToken'),
    },
  })
    .then((res) => {
      console.log(res.data);

      // 1) dispatch action
      this.props.dispatch(createAction(SET_COURSES, res.data));
    })
    .catch((err) => {
      console.log(err);
    });
};
