import { createAction } from '.';
import connector from '../../configs/connector';
import { SET_TOKEN } from './type';
export const signIn = (data) => (dispatch) => {
  connector({
    url: 'http://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap',
    method: 'POST',
    data,
  })
    .then((res) => {
      console.log(res);
      localStorage.setItem('myToken', res.data.accessToken);

      dispatch(createAction(SET_TOKEN, res.data.accessToken));
    })
    .catch((err) => {
      console.log(err);
    });
};
