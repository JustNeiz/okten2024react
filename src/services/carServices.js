import {apiService} from "./apiService";
import {url} from "../constants/urls";

const carService = {
    getAll: ()=>
        apiService.get(url.cars),
    add: (data)=>
        apiService.post(url.cars, data)

}
export {carService}