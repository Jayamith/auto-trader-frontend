import axios from 'axios';
import { VIEWVEHICLES_URL } from '../../../Api';

class HomeServicesDataService {
  getServicesData(example) {
    return axios.post(VIEWVEHICLES_URL + '/api/v1/services/search', example);
  }
}

export default new HomeServicesDataService();
