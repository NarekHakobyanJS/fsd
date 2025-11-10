import { axiosConfig } from "../../../shared/api/axiosConfig";
import type { IGetFilmsResponseType } from "../../../shared/types";


const apiKey = "f36f23edf6e10fd2ddcf939916b1f67a"

const searchApi = {
    async getSearch(text : string){
        const response = await axiosConfig.get<IGetFilmsResponseType>(`search/movie?api_key=${apiKey}&query=${text}`)

        return response.data
    }
}

export {searchApi}