//React
import { decorate, observable } from "mobx";
import instance from "./instance";

import decode from "jwt-decode";

class AuthStore {
  user = null;

  signup = async (userData) => {
    try {
      const res = await instance.post("/signup", userData);
      this.user = decode(res.data.token);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  signin = async (userData) => {
    try {
      const res = await instance.post("/signin", userData);
      this.user = decode(res.data.token);
      console.log(res.data.token);
    } catch (error) {
      console.log(error);
    }
  };
}

decorate(AuthStore, {
  user: observable,
});

const authStore = new AuthStore();
export default authStore;
