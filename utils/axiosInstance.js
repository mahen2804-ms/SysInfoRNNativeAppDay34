import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://e029-49-15-170-131.ngrok.io',
  timeout: 3000,
  timeoutErrorMessage: 'Server down.. Please try after sometime.',
});

export default axiosInstance;
