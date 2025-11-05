import { CardActions, IconButton } from '@mui/material'

import FavoriteIcon from '@mui/icons-material/Favorite';

export const AddToFavorite = () => {
  return (
    <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
       </ CardActions>
  )
}
