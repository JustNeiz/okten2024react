import {spaceAxiosService} from "./spaceAxiosService";
import {launch} from "../spasexConstants/spaceUrl";

const launchServices = {
    getBase: () => spaceAxiosService(launch.getBase)
}

export {launchServices};