import { axiosConfig } from "../../../shared/api/axiosConfig";
const apiKey = "f36f23edf6e10fd2ddcf939916b1f67a"

export const genresAPI = {
    async getGenres(){
        const response = await  axiosConfig.get(`/genre/movie/list?api_key=${apiKey}&language=en-US`)
        
        return response.data
    }
}