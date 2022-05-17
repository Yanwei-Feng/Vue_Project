import { httpPost } from '@/network/http';
import requestLink from '@/network/urls';

export const login = () => {
  return httpPost(requestLink.$url.loginLogin, {
    loginName: 'a',
    password: '998744',
  });
};
