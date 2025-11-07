import { axiosConfig } from "../../../shared/api/axiosConfig";
import type { IFilms } from "../../../shared/types";
const apiKey = "f36f23edf6e10fd2ddcf939916b1f67a"

const filmByIdApi = {
    async getFilmById(id : string | undefined){
        const resposne = await axiosConfig.get<IFilms>(`/movie/${id}?api_key=${apiKey}&language=en-US`)

        return resposne.data
    }
}

export {filmByIdApi}