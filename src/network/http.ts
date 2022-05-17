import service from './base';

/**
 * 发送Get 请求
 * @param {*} url
 * @param {*} params 请求参数
 * @returns
 */
export function httpGet(url: string, params = {}) {
  return service.get(url, {
    params,
  });
}

/**
 * 发送POST 请求
 * @param {*} url 请求地址 /login
 * @param {*} params 请求参数
 * @returns
 */
export function httpPost(url: string, params = {}) {
  return service.post(url, params);
}

export default {
  httpGet,
  httpPost,
};
