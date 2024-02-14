import {apiService} from "./apiService";
import {url} from "../constants/urls";

const albumsService = {
    getAll: () => apiService.get(url.albums.base)
}

export {albumsService}