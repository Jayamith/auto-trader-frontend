import axios from "axios";
import { PAYMENT_URL } from '../../Api'


class MyAccountDataService {
  updateUser(user){
    return axios.put(PAYMENT_URL + '/api/v1/user', user);
  }

  deleteUser(id) {
    return axios.delete(PAYMENT_URL + `/api/v1/user/${id}`);
  }
}

export default new MyAccountDataService();