import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { FilmContent, FilmMedia, useGetFilmById } from '../../entities/filmById'
import { useParams } from 'react-router-dom'
import { Box, Container } from '@mui/material';
import { FilmDescription } from '../../widgets/film/ui';
import { ViewTrailerModal } from '../../widgets/modal/ui/ViewTrailerModal/ViewTrailerModal';
import { useIsOpenAndCloseModal } from '../../features/ViewTrailer/model/viewTrailerSelector';





export const FilmPage = () => {
  const { id } = useParams()
  const { film, isPending } = useGetFilmById(id)

  const isModal = useIsOpenAndCloseModal()
//ViewTrailerModal

  return (
    <Container maxWidth='xl' fixed={true}>
     <FilmDescription film={film}/>
     {
      isModal && <ViewTrailerModal isModal={isModal}/>
     }
    </Container>

  )
}



