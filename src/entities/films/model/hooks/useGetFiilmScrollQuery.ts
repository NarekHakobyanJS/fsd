import { useInfiniteQuery } from "@tanstack/react-query"
import { filmsAPI } from "../../api/filmsApi"

const useGetFilmScrollQuery = () => {

    const {data, fetchNextPage, hasNextPage, isFetchingNextPage} = useInfiniteQuery({
        queryKey : ['films'],
        queryFn : (meta) =>  filmsAPI.getFilms(meta.pageParam),
        initialPageParam : 1,
        getNextPageParam : (result) => result.page + 1,
        select : (result) => result.pages.map((el) => el.results).flat()
    })

    return {data, fetchNextPage, hasNextPage, isFetchingNextPage}
    
}

export {useGetFilmScrollQuery}