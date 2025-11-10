import { useQuery } from "@tanstack/react-query"
import { searchApi } from "../../api/searchApi"

const useSearchFilm = (text : string) => {
    const {data, isPending, refetch} = useQuery({
        queryKey : ['search-film', text],
        queryFn : () =>  searchApi.getSearch(text),
        // hle der parz chi
        enabled : false,
        select : (result) => result.results
    })

    return {searchFilms : data, isPending, refetch}
}

export {useSearchFilm}