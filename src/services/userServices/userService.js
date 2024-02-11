import {apiService} from "./apiService";
import {users} from "../../constants/userUrls/url";

const userService = {
    getAll: ()=> apiService.get(users.base),
    add: ()=> apiService.post(users.base),
    addComment: () => apiService.post(users.comments.base)
}
export {userService}