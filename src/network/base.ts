import axios from 'axios';
import requestLink from './urls';
import Vue from 'vue';

//根据环境设置请求地址
if (process.env.NODE_ENV === 'development') {
  axios.defaults.baseURL = requestLink.$devBaseUrl;
} else if (process.env.NODE_ENV === 'production') {
  axios.defaults.baseURL = requestLink.$onlineBaseUrl;
}

/**
 * 设置超时时间
 *
 */
const service = axios.create({
  timeout: 15000, //请求超时15秒
  headers: { 'Content-Type': 'application/json;charset=utf-8' },
});

//请求拦截器
service.interceptors.request.use(
  (config) => {
    //登录流程控制中，根据本地是否存在token 判断用户的登录情况
    //但是即使 token存在，也有可能token是过期的，所以在每次的请求头中携带token
    //后台根据携带的token判断用户的登录情况，并返回给我们对应的状态码
    //而后我们可以在响应拦截器中，根据状态码进行一些统一的操作
    // const token = '';
    // token && (config.headers.Authorization = token);
    return config;
  },
  (error) => Promise.reject(error)
);

//响应拦截器
service.interceptors.response.use(
  //请求成功
  (res) => {
    if (res.status === 200) {
      return Promise.resolve(res.data);
    } else {
      return Promise.reject(res);
    }
  },
  (error) => {
    const { response } = error;
    if (response) {
      //请求已发出，但是不在2XX的范围
      return Promise.reject(response);
    }
  }
);

export default service;
