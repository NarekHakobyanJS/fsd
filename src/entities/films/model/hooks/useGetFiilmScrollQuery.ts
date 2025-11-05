import { useInfiniteQuery } from "@tanstack/react-query"
import { filmsAPI } from "../../api/filmsApi"

const useGetFilmScrollQuery = () => {

    // {pageParams : [1], pages : [reqData]}
    const {data, fetchNextPage} = useInfiniteQuery({
        queryKey : ['films'],
        queryFn : (meta) =>  filmsAPI.getFilms(meta.pageParam),
        initialPageParam : 1,
        getNextPageParam : (result) => result.page + 1,
        select : (result) => result.pages.map((el) => el.results).flat()
    })

    return {data, fetchNextPage}
    
}

export {useGetFilmScrollQuery}