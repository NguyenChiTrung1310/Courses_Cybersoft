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

const connector = createConnector();
export default connector;
