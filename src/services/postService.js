import {apiService} from "./apiService";
import {urls} from "../constants/urls";

const postService ={
    getAll: () => apiService.get(urls.posts.base),
    getByUserId: (userId) => apiService.get(urls.posts.byUserId(userId))
}
export {postService}