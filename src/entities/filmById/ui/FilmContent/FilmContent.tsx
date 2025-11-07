import { CardContent, Typography } from '@mui/material'
import type { IFilms } from '../../../../shared/types'

type FilmContentPropsType = {
    film : IFilms | undefined
}

export const FilmContent = ({film} : FilmContentPropsType) => {
  return (
    <CardContent>
          <Typography
          align='center'
          gutterBottom variant="h5" component="div">
            {film?.title}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {film?.overview}
          </Typography>
        </CardContent>
  )
}
