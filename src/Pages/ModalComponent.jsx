import React, { useState } from 'react'
import { Modal, Typography } from '@mui/material'
import { OutLinedButton } from '../CustomizeComponent'
import EditScheduledTest from './ScheduledTest/EditScheduledTest'
import CancelTest from './ScheduledTest/CancelTest'
import NewAnnouncement from './Announcements/NewAnnouncement'
import useStyles from './styles'

const ModalComponent = () => {
    const classes = useStyles()

    const pageName = 'test_repository'

    const [open, setOpen] = useState(false)
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)

    return (
        <div>
            <OutLinedButton style={{marginRight: '10px'}} onClick={handleOpen}>
                <Typography className={classes.caption}>
                    {pageName === 'test_repository' ? 'Edit' : 'Schedule test'}
                </Typography>
            </OutLinedButton>
            <OutLinedButton>
                <Typography className={classes.caption}>
                    {pageName === 'test_repository' ? 'Cancel' : 'Edit'}
                </Typography>    
            </OutLinedButton>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                {/* <EditScheduledTest /> */}
                {/* <CancelTest /> */}
                <NewAnnouncement />
            </Modal>
        </div>
    )
}

export default ModalComponent
