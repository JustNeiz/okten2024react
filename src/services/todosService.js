import {apiService} from "./apiService";
import {url} from "../constants/urls";

const todosService = {
    getAll: () => apiService.get(url.todos.base)
}

export {todosService}