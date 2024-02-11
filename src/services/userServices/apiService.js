import axios from "axios";
import {baseURL} from "../../constants/userUrls/url";


const apiService = axios.create({baseURL});
export {apiService}