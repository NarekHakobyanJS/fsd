import { useQuery } from "@tanstack/react-query"
import { filmByIdApi } from "../../api/filmByIdApi"

const useGetFilmById = (id : string | undefined) => {
    const {data, isPending} = useQuery({
        queryKey : ['film-by-id', id],
        queryFn : () =>  filmByIdApi.getFilmById(id),
    })

    return {film : data, isPending}
}

export {useGetFilmById}