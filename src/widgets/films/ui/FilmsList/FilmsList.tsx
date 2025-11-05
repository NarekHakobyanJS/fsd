import { Box, Button, Card } from '@mui/material'
import React from 'react'
import { FilmCard, useGetFilmsQuery } from '../../../../entities/films'
import { AddToFavorite } from '../../../../features/AddToFavorite/ui/AddToFavorite'
import { useFavoriteFilms } from '../../../../features/AddToFavorite'
import { useGetFilmScrollQuery } from '../../../../entities/films/model/hooks/useGetFiilmScrollQuery'

export const FilmsList = () => {
    // const { films, isPending } = useGetFilmsQuery()

    const {data : films, fetchNextPage} = useGetFilmScrollQuery()

    
    // const favFilms = useFavoriteFilms()

    
    return (
        <Box>

            <Box
              sx={{
                display : 'flex',
                justifyContent : 'space-between',
                alignItems : 'center',
                gap : '20px',
                flexWrap : 'wrap'
              }}  
            >
                {
                    films?.map((film) => (
                        <Card sx={{ maxWidth: 345 }} key={film.id}>
                            <FilmCard film={film}/>
                            <AddToFavorite film={film}/>
                        </Card>
                    ))
                }
            </Box>
            <button onClick={() => fetchNextPage()}>Next</button>

        </Box>
    )
}
