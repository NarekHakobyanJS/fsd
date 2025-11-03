import { useQuery } from "@tanstack/react-query"
import { genresAPI } from "../../api/genresApi"

export const useGetGenresQuery = () => {
    const {data, isPending} = useQuery({
        queryKey : ['genres'],
        queryFn : genresAPI.getGenres
    })

    const genres = data?.genres
    return {genres, isPending}
}

