import {apiService} from "./apiService";
import {url} from "../constants/urls";

const carService = {
    getAll: ()=>
        apiService.get(url.cars.base),
    add: (data)=>
        apiService.post(url.cars.base, data),
    delete: (id)=>
        apiService.delete(url.cars.byId(id)),
    patch: (id, data) =>
        apiService.patch(url.cars.byId(id), data)

}
export {carService}