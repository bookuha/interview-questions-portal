import axios from "axios";
import {AxiosResponse, AxiosError} from "axios"

export default axios.create({
    baseURL: "https://localhost:44317/api/",
    headers: {
        "Content-type": "application/json",
        "Authorization": "Bearer " + localStorage.getItem("_auth")
    }
})

export type {AxiosResponse, AxiosError}