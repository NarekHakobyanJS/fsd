
import { FilmContent, FilmMedia, useGetFilmById, useGetTrailer } from '../../entities/filmById'
import { useParams } from 'react-router-dom'
import { Box, Container } from '@mui/material';
import { FilmDescription } from '../../widgets/film/ui';
import { ViewTrailerModal } from '../../widgets/modal/ui/ViewTrailerModal/ViewTrailerModal';
import { useIsOpenAndCloseModal } from '../../features/ViewTrailer/model/viewTrailerSelector';
import { useEffect } from 'react';





export const FilmPage = () => {

  // useEffect(()=> {

  // })
  const { id } = useParams()
  console.log(id);
  
  const { film, isPending } = useGetFilmById(id)

  console.log(film);
  

  
  const isModal = useIsOpenAndCloseModal()


  return (
    <Container maxWidth='xl' fixed={true}>
     <FilmDescription film={film}/>

     {/* <iframe ref={iframeRef}/> */}
     {
      isModal && <ViewTrailerModal isModal={isModal} id={id}/>
     }
    </Container>

  )
}



