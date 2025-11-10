import { axiosConfig } from "../../../shared/api/axiosConfig";
import type {IGetFilmsResponseType} from '../../../shared/types'


const apiKey = "f36f23edf6e10fd2ddcf939916b1f67a"

const filmsAPI = {
    async getFilms(page : number){
        const response = await axiosConfig.get<IGetFilmsResponseType>(`discover/movie?api_key=${apiKey}&language=en-US&page=${page}`)
        return response.data
    }
}

export {filmsAPI}