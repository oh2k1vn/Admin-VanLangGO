import axios from 'axios';

const axiosClient = axios.create({
  baseURL: '',
  headers: {},
});

axiosClient.interceptors.request.use(
  function (config) {
    return config;
  },
  function (err) {
    return err;
  },
);

axiosClient.interceptors.response.use(
  function (response) {
    return response.data || response.data.data;
  },
  function (err) {
    return err;
  },
);

export default axiosClient;
