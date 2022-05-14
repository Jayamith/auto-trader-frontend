import axios from 'axios';
import { PRODUCT_URL } from '../../../Api'

class AddServiceDataService {
  //Register a workshop
  registerService(service) {
    return axios.post(PRODUCT_URL + '/api/v1/services', service);
  }
  getServiceForId(Id) {
    return axios.get(PRODUCT_URL + `/api/v1/services/${Id}`);
  }

  updateService(id, data) {
    return axios.put(PRODUCT_URL + `/api/v1/services/${id}`, data);
  }

  deleteService(id) {
    return axios.delete(PRODUCT_URL + `/api/v1/services/${id}`);
  }
}
export default new AddServiceDataService();
