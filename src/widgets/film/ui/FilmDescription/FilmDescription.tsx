import { Box, Button, Card } from '@mui/material'
import { FilmContent, FilmMedia } from '../../../../entities/filmById'
import type { IFilms } from '../../../../shared/types'
import { ViewTrailer } from '../../../../features/ViewTrailer/ui/ViewTrailer'


const imgUrl = "https://image.tmdb.org/t/p/w500/"


type FilmDescriptionPropsType = {
    film : IFilms | undefined
}

export const FilmDescription = ({film} : FilmDescriptionPropsType) => {
  return (
    <Card
    sx={{ display: 'flex', justifyContent: 'space-around', gap: '30px' }}
  >

    <FilmMedia poster={imgUrl + film?.poster_path} />

    <Box
      sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', gap: '40px' }}
    >

      <FilmContent film={film} />
      <ViewTrailer />
    </Box>
  </Card>
  )
}
