import React from 'react'
import { GenreButton, GenreButtonSkeleton, useGetGenresQuery } from '../../../../entities/genres'
import { AppBar, Box, Container, Toolbar } from '@mui/material'

export const Header = () => {
  const { genres, isPending } = useGetGenresQuery()

  return (
    <AppBar>
      <Container maxWidth="xl">
        <Toolbar disableGutters>

          <Box>
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
        </Toolbar>
      </Container>
    </AppBar>
  )
}
