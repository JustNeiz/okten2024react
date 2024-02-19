import {apiService} from "./apiService";
import {urls} from "../constants/urls";

const commentsService = {
    getByPostId: (postId) => apiService.get(urls.comments.getByPostId(postId))
}
export {commentsService}