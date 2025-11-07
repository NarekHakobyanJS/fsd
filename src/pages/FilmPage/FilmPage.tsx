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



const imgUrl = "https://image.tmdb.org/t/p/w500/"




export const FilmPage = () => {
  const { id } = useParams()
  const { film, isPending } = useGetFilmById(id)

  console.log(film);

  return (
    <Container maxWidth='xl' fixed={true}>

      {/* Widgets */}
      <Card
        sx={{ display: 'flex', justifyContent: 'space-around', gap: '30px' }}
      >

        <FilmMedia poster={imgUrl + film?.poster_path} />

        <Box
          sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', gap: '40px' }}
        >

          <FilmContent film={film} />
          <Button sx={{ width: '350px' }} variant={'contained'}>View Trailer</Button>
        </Box>
      </Card>
    </Container>

  )
}



