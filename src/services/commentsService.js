import {apiService} from "./apiService";
import {url} from "../constants/urls";

const commentsService = {
    getAll: () => apiService.get(url.comments.base)
}

export {commentsService}