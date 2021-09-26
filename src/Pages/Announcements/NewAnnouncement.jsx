import React from 'react'
import { Typography, Box, Button, TextField, InputAdornment } from '@mui/material'
import { CustomTextInput, FilledButton, OutLinedButton } from '../../CustomizeComponent'
import SearchIcon from '@mui/icons-material/Search';
import FileUploadIcon from '@mui/icons-material/FileUpload';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 700,
    bgcolor: 'background.paper',
    boxShadow: 24,
    borderRadius: '8px',
    p: 4,
};

const NewAnnouncement = () => {
    return (
        <Box sx={style}>
            <Typography variant='h6' color='primary' fontWeight='bold' gutterBottom>
                New Announcement
            </Typography>
            <Typography variant='subtitle2' color='primary' gutterBottom>
                Announcement title
            </Typography>
            <CustomTextInput  defaultValue="" id="name-test">
                Title
            </CustomTextInput>
            <Box m={2} />
            <Typography variant='subtitle2' color='primary' gutterBottom>
                Add description
            </Typography>
            <TextField
                id="outlined-multiline-static"
                label="Description"
                multiline
                rows={3}
                variant="outlined"
                style={{minWidth: '600px', borderColor: '#ced4da'}}
            />
            <Box m={2} />
            <Typography variant='subtitle2' color='primary' gutterBottom>
                Send to
            </Typography>
            <TextField
                variant='outlined'
                size='small'
                label='Student/Batch' 
                InputProps={{
                    endAdornment: <InputAdornment position="end">
                        <SearchIcon color='primary' />
                    </InputAdornment>,
                }}
            />
            <Box m={2} />
            <Typography variant='subtitle2' color='primary' gutterBottom>
                Upload documents
            </Typography>
            <input
                accept="image/*"
                
                style={{ display: 'none' }}
                id="raised-button-file"
                multiple
                type="file"
            />
            <label htmlFor="raised-button-file">
                <Button variant="raised" component="span" style={{border: '1px solid #ced4da'}}>
                    Upload documents
                    <FileUploadIcon style={{color: '#005688', marginLeft: '50px'}} />
                </Button>
            </label> 
            <Box m={2} />
            <FilledButton style={{marginRight: '10px'}}>Live</FilledButton>
            <OutLinedButton>Cancel</OutLinedButton>
        </Box>
    )
}

export default NewAnnouncement
