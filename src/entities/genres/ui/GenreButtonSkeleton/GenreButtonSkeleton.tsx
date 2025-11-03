
import { Button, Skeleton } from '@mui/material'

export const GenreButtonSkeleton = () => {
    return (
        <Button
            variant='contained'

        >
            <Skeleton variant="rectangular" width={210} height={30} />
        </Button>
    )
}
