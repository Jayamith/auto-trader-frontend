import axios from 'axios';
import { PRODUCT_URL } from '../../../Api'

class ServiceDetailDataService {
  //Register a workshop
  reviewService(id, service) {
    return axios.put(PRODUCT_URL +
      `/api/v1/services/review/${id}`,
      service
    );
  }
  getServiceForId(Id) {
    return axios.get(PRODUCT_URL + `/api/v1/services/${Id}`);
  }

  deleteService(Id) {
    return axios.delete(PRODUCT_URL + `/api/v1/services/${Id}`);
  }
}
export default new ServiceDetailDataService();
