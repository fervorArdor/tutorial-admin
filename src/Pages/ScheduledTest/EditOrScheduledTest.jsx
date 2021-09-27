import React, { useState } from 'react'
import { Box, Typography, TextField, Select, MenuItem, InputAdornment, Stack, Chip } from '@mui/material'
import { OutLinedButton, FilledButton } from '../../CustomizeComponent'
import SearchIcon from '@mui/icons-material/Search';
import CancelIcon from '@mui/icons-material/Cancel'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import DesktopDatePicker from '@mui/lab/DesktopDatePicker'
import useStyles from './styles'

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
}

const EditOrScheduledTest = ({ edit, handleClose }) => {
    const [value, setValue] = useState(new Date('2021-09-27T21:11:54'))
    const classes = useStyles()

    const handleChange = (newValue) => {
        setValue(newValue);
    }
    return (
        <Box sx={style}>
            <Typography variant="h6" fontWeight='bold' color='primary'>
                {edit === 'yes' ? 'Edit Scheduled Test' : 'Scheduled Test'}
            </Typography>
            <Box m={2} />
            <Box  sx={{ mb: 1 }}>
                <Typography variant='subtitle2'>
                    Name of the tests
                </Typography>
                <Typography variant="subtitle1" fontWeight='bold' color='primary'>
                    Class- X Session-2020-21
                </Typography>
            </Box>
            <Box  sx={{ mb: 1 }}>
                <Typography variant='subtitle2'>
                    Exam
                </Typography>
                <Typography variant="subtitle1" fontWeight='bold' color='primary'>
                    IITJEE
                </Typography>
            </Box>
            <Box  sx={{ mb: 2 }}>
                <Typography variant='subtitle2'>
                    Topic / Subject
                </Typography>
                <Typography variant="subtitle1" fontWeight='bold' color='primary'>
                    Permutation & Combination, Probability, Complex Number
                </Typography>
            </Box>
            <Box sx={{ mb: 2 }}>
                <Typography variant='subtitle2' color='primary'>
                    Batch
                </Typography>
                <Box mb={1} />
                <Select
                value={1}
                size='small'
                displayEmpty
                IconComponent={() => (
                    <KeyboardArrowDownIcon color='primary' style={{marginLeft: '100px'}} />
                )}
                inputProps={{ 'aria-label': 'Without label' }}
                >
                    <MenuItem value={1}>IITJEE Mathematics</MenuItem>
                    <MenuItem value={2}>Default</MenuItem>
                </Select>
            </Box>
            <Box sx={{ mb: 1 }}>
                <Typography variant='subtitle2' color='primary'>
                    Invite Attendees
                </Typography>
                <Box  mb={1} />
                <TextField
                    variant='outlined'
                    size='small'
                    label='Student/Batch' 
                    InputProps={{
                        endAdornment: <InputAdornment position="end">
                            <SearchIcon style={{color: '#005688'}}/>
                        </InputAdornment>,
                    }}
                />
            </Box>
            <Stack direction="row" spacing={1}>
                {['Kiran Patil', 'Vimala Chaudhari', 'Mukti Mital'].map((attendee, index) => (
                    <Chip
                        label={attendee}
                        size="small"
                        onClick={() => {}}
                        onDelete={() => {}}
                        deleteIcon={<CancelIcon style={{color: '#005688'}} />}
                    />
                ))}
            </Stack>
            <Box m={2} />

            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <div className={classes.displayFlex}>
                    <div>
                        <Typography variant="subtitle1" fontWeight='bold' color='primary'>
                            Date for the test
                        </Typography>
                        <DesktopDatePicker
                            inputFormat="MM/dd/yyyy"
                            value={value}
                            onChange={handleChange}
                            renderInput={(params) => <TextField size='small' {...params} />}
                        />
                    </div>
                    <div>
                        <Typography variant="subtitle1" fontWeight='bold' color='primary'>
                            Set Completion date
                        </Typography>
                        <DesktopDatePicker
                            inputFormat="MM/dd/yyyy"
                            value={value}
                            onChange={handleChange}
                            renderInput={(params) => <TextField size='small' {...params} />}
                        />
                    </div>
                </div>
            </LocalizationProvider>

            <FilledButton style={{marginRight: '10px'}}>
                {edit === 'yes' ? 'Update' : 'Scheduled Test'}
            </FilledButton>
            <OutLinedButton onClick={handleClose}>Cancel</OutLinedButton>
        </Box>
    )
}

export default EditOrScheduledTest
