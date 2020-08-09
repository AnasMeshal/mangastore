//React
import { decorate } from "mobx";
import instance from "./instance";

class AuthStore {
  signup = async (userData) => {
    try {
      await instance.post("/signup", userData);
    } catch (error) {
      console.log(error);
    }
  };

  signin = async (userData) => {
    try {
      const res = await instance.post("/signin", userData);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };
}

decorate(AuthStore, {});

const authStore = new AuthStore();
export default authStore;
