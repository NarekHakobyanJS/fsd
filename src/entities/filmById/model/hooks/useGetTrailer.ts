import { useQuery } from "@tanstack/react-query"
import { filmByIdApi } from "../../api/filmByIdApi"

const useGetTrailer = (id : string | undefined, iframe : any) => {
    const {data} = useQuery({
        queryKey : ['viewTrailer', id],
        queryFn : () =>  filmByIdApi.getTrailer(id),
        select : (result) => result.results
    })


    data?.forEach((elm: any) => {
        if (elm.name === "Official Trailer") {
            iframe?.current?.setAttribute(
                "src",
                `https://www.youtube.com/embed/${elm.key}`
            );
        } else {
            iframe?.current?.setAttribute(
                "src",
                `https://www.youtube.com/embed/${elm.key}`
            );
        }
    })

    return {data}
}

export {useGetTrailer}