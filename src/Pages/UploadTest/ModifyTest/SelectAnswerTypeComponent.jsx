import React, { useState } from 'react'
import { Typography, TextField, InputAdornment } from '@mui/material'
import AddPhotoAlternateOutlinedIcon from '@mui/icons-material/AddPhotoAlternateOutlined'
import CancelIcon from '@mui/icons-material/Cancel'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined'
import useStyles from './styles'

const SelectAnswerTypeComponent = () => {
    const classes = useStyles()
    const [ansImage, setAnsImage] = useState(null)
    const [isChecked, setIsChecked] = useState(false)

    const onAnsImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            setAnsImage(URL.createObjectURL(event.target.files[0]))
        }
    }
    const cancelAnsImage = (event) => {
        setAnsImage(null)
    }

    const toggleCheckbox = () => {
        setIsChecked(!isChecked)
    }

    return (
        <div className={classes.flex}>
            <Typography variant='subtitle2' fontWeight='bold'>A</Typography>
            <input
                accept="image/*"
                style={{ display: 'none' }}
                id="raised-question-file2"
                multiple
                type="file"
                onChange={onAnsImageChange}
            />
            <label htmlFor="raised-question-file2" style={{flexGrow: 1}}>
                {ansImage ? (
                    <img src={ansImage} alt="" />
                ) : (
                    <TextField
                        variant='outlined'
                        size='small'
                        label='Type answer option' 
                        style={{width: '100%'}}
                        InputProps={{
                            endAdornment: <InputAdornment position="end">
                                <AddPhotoAlternateOutlinedIcon variant='raised' color='primary' cursor='pointer' />
                            </InputAdornment>,
                        }}
                    />
                )}
            </label> 
            {isChecked ? (
                <CheckCircleIcon color='primary' style={{marginLeft: '10px'}} onClick={toggleCheckbox} />
            ) : (
                <CircleOutlinedIcon color='primary' style={{marginLeft: '10px'}} onClick={toggleCheckbox}/>
            )}
            <CancelIcon style={{color: '#FA4141', marginLeft: '10px'}} onClick={cancelAnsImage}/>
        </div>
    )
}

export default SelectAnswerTypeComponent