import axios from 'axios'
import { PRODUCT_URL } from '../../../Api'

class SingleVehicleViewDataService {

    getVehicle(id){
        return axios.get(PRODUCT_URL + `/api/v1/vehicle/id/${id}`);
    }
    reviewVehicle(object){
        return axios.post(PRODUCT_URL + '/api/v1/vehicle/review', object);
    }
    deleteVehicle(id){
        return axios.delete(PRODUCT_URL + `/api/v1/vehicle/${id}`);
    }
}

export default new SingleVehicleViewDataService();
