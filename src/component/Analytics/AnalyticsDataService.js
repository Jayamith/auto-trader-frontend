import axios from 'axios'
import { ADMIN_URL } from '../../Api'

class AnalyticsDataService {

    getAnalytics(){
        return axios.get(ADMIN_URL + '/api/v1/analytics');
    }

}

export default new AnalyticsDataService();