  
import axios from 'axios'
import { PRODUCT_URL } from '../../Api'

class SparePartDataService {

    getSpares(example){
        return axios.post(PRODUCT_URL + '/api/v1/spare/filter', example);
    }

}

export default new SparePartDataService();