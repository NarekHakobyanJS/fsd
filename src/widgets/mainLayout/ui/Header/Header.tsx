
import { GenreButton, GenreButtonSkeleton, useGetGenresQuery } from '../../../../entities/genres'
import { AppBar, Box, Container, Toolbar, Typography } from '@mui/material'
import { SearchBlock } from '../SearchBlock/SearchBlock'

export const Header = () => {
  const { genres, isPending } = useGetGenresQuery()

  return (
    <AppBar position='sticky' sx={{mb : '30px'}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ display: "flex", justifyContent: 'space-between', alignItems: 'center', gap : '30px' }}>
        <Typography
            variant="h5"
          >
            FilmsAPP
          </Typography>
          <Box
           sx={{
            display: 'flex',
            gap: '10px',
            width: '1000px',
            overflowX: 'auto',
            alignItems: 'center'
           }}
          >
            {
              isPending
                ?
                Array(20).fill(null).map((_, i) => {
                  return <GenreButtonSkeleton key={i}/>
                })

                :
                genres?.map((genre) => {
                  return <GenreButton key={genre.id} genre={genre} />
                })
            }
          </Box>

          <Box>
          < SearchBlock />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
