import jwt from "jsonwebtoken";

export let TOKEN_KEY = "jwt";

export const LoginUtil = (data) => {
  localStorage.setItem(TOKEN_KEY, data);
};

export const LogoutUtil = () => {
  localStorage.removeItem(TOKEN_KEY);
  // localStorage.clear();
};

export const isLogin = () => {
  if (localStorage.getItem(TOKEN_KEY)) {
    const decoded = jwt.decode(localStorage.getItem(TOKEN_KEY));
    return { decoded };
  }
};


