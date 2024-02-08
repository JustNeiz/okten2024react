import {axiosServiceMain} from "./axiosServiceMain";
import {url} from "../postConstants/mainUrls";

const postServiceMain = {
    getBase: () => axiosServiceMain(url.posts.base)

}

export {postServiceMain}