
import axios from 'axios'
import { VIEWVEHICLES_URL } from '../../../Api'

class SellerVehicleListDataService {

    getVehicles(example){
        return axios.post(VIEWVEHICLES_URL + '/api/v1/vehicle/filter', example);
    }

}

export default new SellerVehicleListDataService();
