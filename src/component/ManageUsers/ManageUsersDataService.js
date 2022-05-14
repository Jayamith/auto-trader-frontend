import axios from 'axios'
import { ADMIN_URL } from '../../Api'

class ManageUsersDateService {
  
  getUsers(example){
    return axios.post(ADMIN_URL + '/api/v1/user/filter', example);
  }

  deleteUser(email){
    return axios.delete(ADMIN_URL + `/api/v1/user/${email}`)
  }

  
}

export default new ManageUsersDateService();
