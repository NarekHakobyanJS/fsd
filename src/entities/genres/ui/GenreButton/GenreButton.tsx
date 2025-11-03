import React from 'react'
import type { IGenre } from '../../../../shared/types'
import { Button } from '@mui/material'

type GenreButtonPropsType = {
  genre : IGenre
}
export const GenreButton = ({genre} : GenreButtonPropsType) => {
  return (
    <Button
      variant='contained'
    >{genre?.name}</Button>
  )
}
