import { Box, Button, Card } from '@mui/material'
import { FilmCard, useInterSection } from '../../../../entities/films'
import { AddToFavorite } from '../../../../features/AddToFavorite/ui/AddToFavorite'
import { useGetFilmScrollQuery } from '../../../../entities/films/model/hooks/useGetFiilmScrollQuery'

export const FilmsList = () => {
    const {data : films, fetchNextPage, hasNextPage, isFetchingNextPage} = useGetFilmScrollQuery()

    ///Config Hook from entites
    const cursorRef = useInterSection(() => {
        fetchNextPage()
    })
     
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
            <Button 
            variant='contained'
            ref={cursorRef}
            sx={{width : '100%', height : '70px', color : 'black'}}
            >{isFetchingNextPage && 'Loading ...'}</Button>

        </Box>
    )
}
