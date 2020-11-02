import http from './httpService';
import config from './../config.json';

export function login(user) {

  return http.post(
    config.loginApi,
    JSON.stringify({
      Username: user.username,
      Password: user.password,
    }),
  );
}

export function signup(user) {

  return http.post(config.signupApi,
    JSON.stringify({
      Username: user.username,
      Password: user.password,
      PhoneNumber: user.phone,
    }))

}

