  
import axios from 'axios'
import { VIEWVEHICLES_URL } from '../../../Api'

class SellerSparePartsListDataService {

    getSpares(example){
        return axios.post(VIEWVEHICLES_URL + '/api/v1/spare/filter', example);
    }

}

export default new SellerSparePartsListDataService();