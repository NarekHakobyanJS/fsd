import { Box, Card } from '@mui/material'
import React from 'react'
import { FilmCard, useGetFilmsQuery } from '../../../../entities/films'
import { AddToFavorite } from '../../../../features/AddToFavorite/ui/AddToFavorite'

export const FilmsList = () => {
    const { films, isPending } = useGetFilmsQuery()

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

        </Box>
    )
}
