import axios from 'axios';

export const signIn = (data) => (dispatch) => {
  axios({
    url: 'http://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap',
    method: 'POST',
    data,
  })
    .then((res) => {
      console.log(res);
      localStorage.setItem('myToken', res.data.accessToken);
    })
    .catch((err) => {
      console.log(err);
    });
};
