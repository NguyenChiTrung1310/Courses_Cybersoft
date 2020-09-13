// create async action
import { createAction } from '.';
import connector from '../../configs/connector';
import { SET_COURSES } from './type';

export const fetchCourses = (dispatch) => {
  connector({
    url:
      'http://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01',
    method: 'GET',
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
