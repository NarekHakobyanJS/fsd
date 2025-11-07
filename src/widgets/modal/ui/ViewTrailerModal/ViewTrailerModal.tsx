import React, {useRef} from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { viewAndHideTrailerModal } from '../../../../features/ViewTrailer/model/viewTrailerHelpers';
import { useGetTrailer } from '../../../../entities/filmById';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

type ViewTrailerModalPropsType = {
    isModal : boolean
    id : string | undefined
}

// isModal
export function ViewTrailerModal({isModal, id} : ViewTrailerModalPropsType) {
    const iframeRef = useRef(null)

    useGetTrailer(id, iframeRef)
  return (
    <div>
      <Modal
        open={isModal}
        onClose={() => viewAndHideTrailerModal(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <iframe ref={iframeRef}/>
        </Box>
      </Modal>
    </div>
  );
}
