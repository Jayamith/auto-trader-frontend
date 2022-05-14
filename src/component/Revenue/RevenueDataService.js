import axios from 'axios'
import { PAYMENT_URL } from '../../Api'

class RevenueDataService {

  addRevenue(revenue) {
    return axios.post(PAYMENT_URL + '/api/v1/revenue', revenue);
  }

  getRevenue() {
    return axios.get(PAYMENT_URL + '/api/v1/revenue');
  }

  deleteRevenue(id) {
    return axios.delete(PAYMENT_URL + `/api/v1/revenue/${id}`)
  }


}

export default new RevenueDataService();