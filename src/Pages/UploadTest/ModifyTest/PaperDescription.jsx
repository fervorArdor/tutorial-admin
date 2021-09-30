import React from 'react'
import { Typography, Select, MenuItem, TextField, InputAdornment } from '@mui/material'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import useStyles from './styles'

const QuestionDescription = () => {
    const classes = useStyles()
    
    return (
        <div className={classes.flex} style={{background: '#F8FAFC', marginLeft: '40px', padding: '15px'}}>
            <Typography variant='subtitle2'>Level: </Typography>
            <Select
            value={1}
            size='small'
            displayEmpty
            IconComponent={() => (
                <KeyboardArrowDownIcon color='primary' />
            )}
            inputProps={{ 'aria-label': 'Without label' }}
            >
                <MenuItem value={1}>
                    <Typography variant='subtitle2'>Difficult</Typography>
                </MenuItem>
                <MenuItem value={2}>Default</MenuItem>
            </Select>
            <Typography variant='subtitle2'>Topic: </Typography>
            <Select
            value={1}
            size='small'
            displayEmpty
            IconComponent={() => (
                <KeyboardArrowDownIcon color='primary'  style={{marginLeft: '50px'}} />
            )}
            inputProps={{ 'aria-label': 'Without label' }}
            >
                <MenuItem value={1}>
                    <Typography variant='subtitle2'>Select</Typography>
                </MenuItem>
                <MenuItem value={2}>Default</MenuItem>
            </Select>
            <Typography variant='subtitle2'>Expected time:</Typography>
            <TextField
                label='00'
                variant="outlined"
                size='small'
                endAdornment={<InputAdornment position="end">sec</InputAdornment>}
                // style={{width: '82px'}}
            />
            <Typography variant='subtitle2'>Exam: </Typography>
            <Select
            value={1}
            size='small'
            displayEmpty
            IconComponent={() => (
                <KeyboardArrowDownIcon color='primary' style={{marginLeft: '50px'}} />
            )}
            inputProps={{ 'aria-label': 'Without label' }}
            >
                <MenuItem value={1}>
                    <Typography variant='subtitle2'>Select</Typography>
                </MenuItem>
                <MenuItem value={2}>Default</MenuItem>
            </Select>
        </div>
    )
}

export default QuestionDescription
