import axios from 'axios';

const createConnector = () => {
  const config = {};
  const token = localStorage.getItem('myToken');
  if (token) {
    config.headers = {
      Authorization: 'Bearer ' + token,
    };
  }
  return axios.create(config);
};

export default createConnector();
