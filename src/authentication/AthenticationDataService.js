import axios from 'axios'
import { PAYMENT_URL } from '../Api'

class AthenticationDataService {

    login(email) {
        // let basicAuthHeader = 'Basic ' + window.btoa(email + ":" + password);
        return axios.get(PAYMENT_URL + `/api/v1/user/login/${email}`);
    }

}

export default new AthenticationDataService();