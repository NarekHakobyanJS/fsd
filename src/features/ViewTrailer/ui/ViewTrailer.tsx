import { Button } from '@mui/material'
import { viewAndHideTrailerModal } from '../model/viewTrailerHelpers'
import { useIsOpenAndCloseModal } from '../model/viewTrailerSelector'


export const ViewTrailer = () => {

  const open = useIsOpenAndCloseModal()

  // console.log(open);

  return (
    <Button
      onClick={() => viewAndHideTrailerModal(true)}
      sx={{ width: '350px' }}
      variant={'contained'}>View Trailer</Button>
  )
}
