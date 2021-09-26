import React from 'react'
import { Box, Typography, TextField } from '@mui/material'
import { FilledButton, OutLinedButton, StyledModal } from '../../CustomizeComponent'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    bgcolor: 'background.paper',
    boxShadow: 24,
    borderRadius: '8px',
    p: 4,
}

const CancelTest = () => {

    return (
        <Box sx={style}>
            <Typography variant='h6' color='primary' fontWeight='bold' gutterBottom>
                Do you want to cancel test?
            </Typography>
            <Box m={2} />
            <Typography variant='subtitle2' color='primary'>
                Add reason to cancel
            </Typography>
            <Box m={1} />
            <TextField
                id="outlined-multiline-static"
                label="Reason"
                multiline
                rows={3}
                variant="outlined"
                style={{minWidth: '600px'}}
            />
            <Box m={2} />
            <Typography variant='subtitle2'>
                Message will send to students / participants
            </Typography>
            <Box m={3} />
            <FilledButton style={{marginRight: '10px'}}>Send</FilledButton>
            <OutLinedButton>Cancel</OutLinedButton>
        </Box>
    )
}

export default CancelTest
