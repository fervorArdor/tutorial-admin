import React, { useState } from 'react'
import { Modal, Typography } from '@mui/material'
import { OutLinedButton } from '../../CustomizeComponent'
import EditOrScheduledTest from './EditOrScheduledTest'
import CancelTest from './CancelTest'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
    caption: {
        fontSize: '13px',
        lineHeight: '19px',
        color: '#5C656A',
    },
})

const ModalComponent = () => {
    const classes = useStyles()

    const [edit, setEdit] = useState(false)
    const handleEdit = () => setEdit(true)
    const handleEditClose = () => setEdit(false)

    const [cancel, setCancel] = useState(false)
    const handleOpenCancel = () => setCancel(true)
    const handleCloseCancel = () => setCancel(false)

    return (
        <div>
            <OutLinedButton style={{marginRight: '10px'}} onClick={handleEdit}>
                <Typography className={classes.caption}>Edit</Typography>
            </OutLinedButton>
            <OutLinedButton onClick={handleOpenCancel}>
                <Typography className={classes.caption}>Cancel</Typography>   
            </OutLinedButton>
            <Modal
                open={edit}
                onClose={handleEditClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <EditOrScheduledTest edit='yes' handleClose={handleEditClose} />
            </Modal>
            <Modal
                open={cancel}
                onClose={handleCloseCancel}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <CancelTest handleClose={handleCloseCancel} />
            </Modal>
        </div>
    )
}

export default ModalComponent
