import {userService} from "./userService";

const loaders = {
    getAll: () => userService.getAll()
}



export {loaders}