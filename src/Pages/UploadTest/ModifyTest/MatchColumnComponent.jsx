import React, { useState } from 'react'
import { Grid, Typography, TextField, InputAdornment } from '@mui/material'
import AddPhotoAlternateOutlinedIcon from '@mui/icons-material/AddPhotoAlternateOutlined'
import CancelIcon from '@mui/icons-material/Cancel'
import useStyles from './styles'

const MatchColumnComponent = () => {
    const classes = useStyles()
    const [quesImage, setQuesImage] = useState(null)
    const [ansImage, setAnsImage] = useState(null)

    const onQuesImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            setQuesImage(URL.createObjectURL(event.target.files[0]))
        }
    }
    const onAnsImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            setAnsImage(URL.createObjectURL(event.target.files[0]))
        }
    }

    const cancelQuesImage = (event) => {
        setQuesImage(null)
    }
    const cancelAnsImage = (event) => {
        setAnsImage(null)
    }

    return (
        <Grid conatiner spacing={4} style={{display: 'flex', gap: '20px'}}>
            <Grid item xs={3}>
                <Typography variant='subtitle2' color='secondary.light' style={{marginBottom: '10px'}}>
                    Questions
                </Typography>
                <div className={classes.flex}>
                    <Typography variant='subtitle2' fontWeight='bold'>A</Typography>
                    <input
                        accept="image/*"
                        style={{ display: 'none' }}
                        id="raised-question-column"
                        multiple
                        type="file"
                        onChange={onQuesImageChange}
                    />
                    <label htmlFor="raised-question-column">
                        {quesImage ? (
                            <img src={quesImage} alt="" />
                        ) : (
                            <TextField
                                variant='outlined'
                                size='small'
                                InputProps={{
                                    endAdornment: <InputAdornment position="end">
                                        <AddPhotoAlternateOutlinedIcon variant='raised' color='primary' cursor='pointer' />
                                    </InputAdornment>,
                                }}
                            />
                        )}
                    </label> 
                    <CancelIcon style={{color: '#FA4141'}} onClick={cancelQuesImage} />
                </div> 
            </Grid>
            <Grid item xs={3}>
                <Typography variant='subtitle2' color='secondary.light' style={{marginBottom: '10px'}}>
                    Options
                </Typography>
                <div className={classes.flex}>
                    <Typography variant='subtitle2' fontWeight='bold'>1</Typography>
                    <input
                        accept="image/*"
                        style={{ display: 'none' }}
                        id="raised-answer-column"
                        multiple
                        type="file"
                        onChange={onAnsImageChange}
                    />
                    <label htmlFor="raised-answer-column">
                        {ansImage ? (
                            <img src={ansImage} alt="" />
                        ) : (
                            <TextField
                                variant='outlined'
                                size='small'
                                InputProps={{
                                    endAdornment: <InputAdornment position="end">
                                        <AddPhotoAlternateOutlinedIcon variant='raised' color='primary' cursor='pointer' />
                                    </InputAdornment>,
                                }}
                            />
                        )}
                    </label> 
                    <CancelIcon style={{color: '#FA4141'}} onClick={cancelAnsImage}/>
                </div>
            </Grid>
            <Grid item xs={3}>
                <Typography variant='subtitle2' color='secondary.light' style={{marginBottom: '10px'}}>
                    Answer
                </Typography>
                <div className={classes.flex}>
                    <Typography variant='subtitle2' fontWeight='bold'>A</Typography>
                    <TextField
                        variant='outlined'
                        size='small'
                    />
                </div>
            </Grid>
        </Grid>
    )
}

export default MatchColumnComponent