//React
import { decorate, observable } from "mobx";
import instance from "./instance";

//Decode
import decode from "jwt-decode";

class AuthStore {
  user = null;

  setUser = (token) => {
    localStorage.setItem("myToken", token);
    instance.defaults.headers.common.Authorization = `Bearer ${token}`;
    this.user = decode(token);
  };

  signup = async (userData) => {
    try {
      const res = await instance.post("/signup", userData);
      this.setUser(res.data.token);
      console.log(res.data.token);
    } catch (error) {
      console.log(error);
    }
  };

  signin = async (userData) => {
    try {
      const res = await instance.post("/signin", userData);
      this.setUser(res.data.token);
      console.log(this.user);
    } catch (error) {
      console.log(error);
    }
  };

  signout = () => {
    delete instance.defaults.headers.common.Authorization;
    localStorage.removeItem("myToken");
    this.user = null;
  };

  checkForToken = () => {
    const token = localStorage.getItem("myToken");
    if (token) {
      const user = decode(token);
      if (Date.now() < user.expires) {
        this.setUser(token);
      } else {
        this.signout();
      }
    }
  };
}

decorate(AuthStore, {
  user: observable,
});

const authStore = new AuthStore();
authStore.checkForToken();
export default authStore;
