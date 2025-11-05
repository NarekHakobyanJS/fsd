import { CardActions, IconButton } from '@mui/material'

import FavoriteIcon from '@mui/icons-material/Favorite';
import { addAndRemoveFavorite } from '../model/addFavoriteHelpers';
import type { IFilms } from '../../../shared/types';

type AddToFavoritePropsType = {
    film : IFilms
}
export const AddToFavorite = ({film} : AddToFavoritePropsType) => {
  return (
    <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon onClick={() => addAndRemoveFavorite(film )}/>
        </IconButton>
       </ CardActions>
  )
}
