import axios from "axios";
import {baseURL} from "../postConstants/mainUrls";

const axiosServiceMain = axios.create({baseURL});
export {axiosServiceMain};