
import { Skeleton } from '@mui/material'

export const GenreButtonSkeleton = () => {
    return (
        <Skeleton
            variant="rounded"
            width={300}
            height={36}
            sx={{ flex: '0 0 auto', borderRadius: '4px' }}
        />
    )
}
