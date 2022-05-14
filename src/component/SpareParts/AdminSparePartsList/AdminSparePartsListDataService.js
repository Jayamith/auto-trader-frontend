  
import axios from 'axios'
import { ADMIN_URL } from '../../../Api'

class AdminSparePartsListDataService {

    getSpares(example){
        return axios.post(ADMIN_URL + '/api/v1/spare/filter', example);
    }

    getReportSpares(){
        return axios.get(ADMIN_URL + '/api/v1/spare/report');
    }

}

export default new AdminSparePartsListDataService();