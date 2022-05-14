import axios from 'axios'
import { PRODUCT_URL } from '../../../Api'

class AddSparePartDataService {

    addSparePart(sparePart){
        return axios.post(PRODUCT_URL + '/api/v1/spare', sparePart);
    }

    updateSparePart(sparePart){
        return axios.put(PRODUCT_URL + '/api/v1/spare', sparePart);
    }

    getSparePart(id){
        return axios.get(PRODUCT_URL + `/api/v1/spare/id/${id}`);
    }

    deleteSparePart(id){
        return axios.delete(PRODUCT_URL + `/api/v1/spare/${id}`);
    }

}

export default new AddSparePartDataService();