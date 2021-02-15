const axios = require('axios');

const CRIC_API_KEY = 'Hkt0hiCUu7YU7jIsBtBoeUv3jBl1';
const CRIC_BASE_URL = 'https://cricapi.com/api';

const http = axios.create({
  baseURL: CRIC_BASE_URL,
  timeout: 1000,
})

http.interceptors.request.use(function (config) {
  config.url = `${config.url}?apikey=${CRIC_API_KEY}`;
  return config;
}, function (error) {
  return Promise.reject(error);
});


export const cricketMatches = () => {
  return http.get('/cricket');
};

export const matches = () => {
  return http.get('/matches');
};

export const matchCalendar = () => {
  return http.get('/matchCalendar');
};

export const cricketScore = (unique_id) => {
  return http.get('/cricketScore', { unique_id });
};
