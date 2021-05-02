import { axiosInstance } from "../config/AxiosInstance";

class GenderService {
  get(user) {
    console.log(user);
    debugger;
    return axiosInstance.get(`gender`);
  }
}

export default new GenderService();
