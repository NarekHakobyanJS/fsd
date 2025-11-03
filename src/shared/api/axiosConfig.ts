import axios from "axios";

export const axiosConfig = axios.create({
    baseURL : 'https://api.themoviedb.org/3'
})

