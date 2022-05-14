  
import axios from 'axios'
import { VIEWVEHICLES_URL } from '../../../Api'

class DetailedViewDataService {

    getSpare(id){
        return axios.get(VIEWVEHICLES_URL + `/api/v1/spare/id/${id}`);
    }

    reviewSpare(obj){
        return axios.post(VIEWVEHICLES_URL + '/api/v1/spare/review', obj);
    }

    deleteSpare(id){
        return axios.delete(VIEWVEHICLES_URL + `/api/v1/spare/${id}`);
    }

}

export default new DetailedViewDataService();