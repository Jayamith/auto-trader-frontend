import axios from 'axios';
import { PRODUCT_URL } from '../../../Api'

class ServiceDataService {
  //Register a workshop
  getService(service) {
    return axios.post(PRODUCT_URL + '/api/v1/services/search', service);
  }

  getServiceById(id) {
    return axios.get(PRODUCT_URL + `/api/v1/services/${id}`);
  }
}
export default new ServiceDataService();
