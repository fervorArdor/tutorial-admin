import React, { useState } from 'react'
import { Typography, TextField, InputAdornment } from '@mui/material'
import AddPhotoAlternateOutlinedIcon from '@mui/icons-material/AddPhotoAlternateOutlined'
import CancelIcon from '@mui/icons-material/Cancel'
import useStyles from './styles'

const TypeQuestionComponent = () => {
    const classes = useStyles()
    const [quesImage, setQuesImage] = useState(null)

    const onQuesImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            setQuesImage(URL.createObjectURL(event.target.files[0]))
        }
    }

    const cancelQuesImage = (event) => {
        setQuesImage(null)
    }

    return (
        <div className={classes.flex}>
            <Typography variant='subtitle2' fontWeight='bold'>01</Typography>
            <input
                accept="image/*"
                style={{ display: 'none' }}
                id="raised-question-file"
                multiple
                type="file"
                onChange={onQuesImageChange}
            />
            <label htmlFor="raised-question-file" style={{flexGrow: 1}}>
                {quesImage ? (
                    <img src={quesImage} alt="" />
                ) : (
                    <TextField
                        variant='outlined'
                        size='small'
                        label='Type question' 
                        style={{width: '100%'}}
                        InputProps={{
                            endAdornment: <InputAdornment position="end">
                                <AddPhotoAlternateOutlinedIcon variant='raised' color='primary' cursor='pointer' />
                            </InputAdornment>,
                        }}
                    />
                )}
            </label> 
            <CancelIcon style={{color: '#FA4141', marginLeft: '10px'}} onClick={cancelQuesImage} />
        </div> 
    )
}

export default TypeQuestionComponent
