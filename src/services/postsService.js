import {apiService} from "./apiService";
import {url} from "../constants/urls";

const postsService = {
    getById: (id) => apiService.get(url.posts.byId(id))
}

export {postsService}