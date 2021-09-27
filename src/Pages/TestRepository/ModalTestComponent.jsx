import React, { useState } from 'react'
import { Modal, Typography } from '@mui/material'
import { OutLinedButton } from '../../CustomizeComponent'
import EditOrScheduledTest from '../ScheduledTest/EditOrScheduledTest'
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
    const [scheduleTest, setScheduleTest] = useState(false)
    const handleOpenScheduleTest = () => setScheduleTest(true)
    const handleCloseScheduleTest = () => setScheduleTest(false)

    const [edit, setEdit] = useState(false)
    const handleEdit = () => setEdit(true)
    const handleEditClose = () => setEdit(false)


    return (
        <div>
            <OutLinedButton style={{marginRight: '10px'}} onClick={handleOpenScheduleTest}>
                <Typography className={classes.caption}>Schedule Test</Typography>
            </OutLinedButton>
            <OutLinedButton onClick={handleEdit}>
                <Typography className={classes.caption}>Edit</Typography>   
            </OutLinedButton>
            <Modal
                open={scheduleTest}
                onClose={handleCloseScheduleTest}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <EditOrScheduledTest edit='no' handleClose={handleCloseScheduleTest} />
            </Modal>
            <Modal
                open={edit}
                onClose={handleEditClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <EditOrScheduledTest edit='yes' handleClose={handleEditClose} />
            </Modal>
        </div>
    )
}

export default ModalComponent
