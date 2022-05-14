
import axios from 'axios'
import { ADMIN_URL } from '../../../Api'

class AdminVehicleListDataService {

    getVehicles(example){
        return axios.post(ADMIN_URL + '/api/v1/vehicle/filter', example);
    }

    getVehiclesReport(){
        return axios.get(ADMIN_URL + '/api/v1/vehicle/report');
    }

}

export default new AdminVehicleListDataService();
