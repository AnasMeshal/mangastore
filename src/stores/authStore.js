//React
import { decorate, observable } from "mobx";
import instance from "./instance";

import decode from "jwt-decode";

class AuthStore {
  user = null;

  setUser = async (token) => {
    instance.defaults.headers.common.Authorization = `Bearer ${token}`;
    this.user = decode(token);
  };

  signup = async (userData) => {
    try {
      const res = await instance.post("/signup", userData);
      this.setUser(res.data.token);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  signin = async (userData) => {
    try {
      const res = await instance.post("/signin", userData);
      this.setUser(res.data.token);
      console.log(res.data.token);
    } catch (error) {
      console.log(error);
    }
  };

  signout = () => {
    delete instance.defaults.headers.common.Authorization;
    this.user = null;
  };
}

decorate(AuthStore, {
  user: observable,
});

const authStore = new AuthStore();
export default authStore;
