import { CardActions, IconButton } from '@mui/material'

import FavoriteIcon from '@mui/icons-material/Favorite';
import { addAndRemoveFavorite } from '../model/addFavoriteHelpers';
import type { IFilms } from '../../../shared/types';
import { useFavoriteFilms } from '../model/useAddFavoriteSelector';

type AddToFavoritePropsType = {
  film: IFilms
}

export const AddToFavorite = ({ film } : AddToFavoritePropsType) => {

  const favoriteFilms = useFavoriteFilms()

  const favorite = favoriteFilms.find((ff) => ff.id === film.id)

  return (
    <CardActions disableSpacing>
      <IconButton aria-label="add to favorites">
        <FavoriteIcon
          sx={{ color: favorite && 'red' }}
          onClick={() => addAndRemoveFavorite(film)} />
      </IconButton>
    </ CardActions>
  )
}
