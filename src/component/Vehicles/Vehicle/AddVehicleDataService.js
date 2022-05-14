import axios from 'axios'
import { PRODUCT_URL } from '../../../Api'

class AddVehicleDataService {

    addVehicle(vehicle){
        return axios.post(PRODUCT_URL + '/api/v1/vehicle', vehicle);
    }

    updateVehicle(vehicle){
        return axios.put(PRODUCT_URL + '/api/v1/vehicle', vehicle);
    }

    getVehicle(id){
        return axios.get(PRODUCT_URL + `/api/v1/vehicle/id/${id}`);
    }

    deleteVehicle(id){
        return axios.delete(PRODUCT_URL + `/api/v1/vehicle/${id}`);
    }
}

export default new AddVehicleDataService();
