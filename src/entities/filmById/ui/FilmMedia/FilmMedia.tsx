import { CardMedia } from '@mui/material'
import React from 'react'

type FilmMediaPropsType = {
    poster : undefined | string
}
export const FilmMedia = ({poster} : FilmMediaPropsType) => {
  return (
    <CardMedia
          sx={{ width: '300px' }}
          component="img"
          image={poster}
        />
  )
}
