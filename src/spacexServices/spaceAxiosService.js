import {baseURL} from "../spasexConstants/spaceUrl";
import axios from "axios";

const spaceAxiosService = axios.create({baseURL});

export {spaceAxiosService};