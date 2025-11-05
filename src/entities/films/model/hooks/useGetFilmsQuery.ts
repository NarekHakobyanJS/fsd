import { useQuery } from "@tanstack/react-query"
import { filmsAPI } from "../../api/filmsApi"

const useGetFilmsQuery = () => {
    const {data, isPending} = useQuery({
        queryKey : ['films'],
        queryFn : filmsAPI.getFilms
    })

    const films = data?.results

    return {films, isPending}

}

export {useGetFilmsQuery}