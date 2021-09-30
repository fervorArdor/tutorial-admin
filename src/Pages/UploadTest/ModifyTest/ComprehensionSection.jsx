import React, { useState } from 'react'
import { styled } from '@mui/styles'
import { Card, CardActions, Collapse, CardContent, Toolbar, IconButton, Typography, Box, TextField } from '@mui/material'
import { FilledButton, OutLinedButton } from '../../../CustomizeComponent'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import AddPhotoAlternateOutlinedIcon from '@mui/icons-material/AddPhotoAlternateOutlined'
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined'
import CancelIcon from '@mui/icons-material/Cancel'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined'
import DescriptionSection from './DescriptionSection'
import Questions from './Questions'
import PaperDescription from './PaperDescription'
import useStyles from './styles'

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(90deg)',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}))


const ComprehensionSection = () => {    
    const classes = useStyles()
    const [expanded, setExpanded] = useState(false)
    const [image, setImage] = useState(null)
    const [changeImage, setChangeImage] = useState(false)

    const onImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            setImage(URL.createObjectURL(event.target.files[0]))
            setChangeImage(true)
        }
    }

    const cancelImage = (event) => {
        setImage(null)
        setChangeImage(false)
    }

    const handleExpandClick = () => {
        setExpanded(!expanded)
    }
    return (
        <div>
            <Card style={{marginBottom: '21px'}}>
            <CardActions>
                <Toolbar>
                <ExpandMore
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
                >
                    <KeyboardArrowRightIcon />
                </ExpandMore>
                <TextField
                    label='Type Heading'
                    variant="outlined"
                    size='small'
                    InputProps={{classes: {input: classes.inputFont}}} 
                    InputLabelProps={
                        {
                            style: {fontSize: '14px', fontWeight: 'bold', color: '#242526'},
                        }
                    } 
                />
                <RemoveRedEyeOutlinedIcon color='primary' style={{marginLeft: '10px'}} />
                <DeleteOutlineOutlinedIcon style={{color: '#FA4141', marginLeft: '10px'}} />
                </Toolbar>
            </CardActions>

            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <PaperDescription />
                    <Box m={4} />
                    <div className={classes.flex} style={{paddingLeft: '40px'}}>
                        <input
                            accept="image/*"
                            style={{ display: 'none' }}
                            id="raised-button-file1"
                            multiple
                            type="file"
                            onChange={onImageChange}
                        />
                        <label htmlFor="raised-button-file1">
                            <FilledButton variant="raised" component="span" style={{marginRight: '10px'}}>
                                <AddPhotoAlternateOutlinedIcon style={{paddingRight: '5px'}} />Add media
                            </FilledButton>
                        </label> 
                        <Typography variant='subtitle2' color='secondary.light'>
                            Add Image, doc or pdf
                        </Typography>
                    </div>
                    
                    {image && (
                        <div style={{display: 'flex'}}>
                            <img src={image} alt="" style={{paddingLeft: '50px'}} />
                            <CancelIcon className={classes.cancelImage} onClick={cancelImage} />
                        </div>
                    )}
                    <Box m={2} />
                    {changeImage && (
                        <>
                        <input
                            accept="image/*"
                            style={{ display: 'none' }}
                            id="raised-button-file2"
                            multiple
                            type="file"
                            onChange={onImageChange}
                        />
                        <label htmlFor="raised-button-file2">
                            <OutLinedButton variant="raised" component="span" style={{marginLeft: '50px'}}>
                                Change Image
                            </OutLinedButton>
                        </label>
                        </>
                    )}
                    <DescriptionSection />
                    <Questions />
                </CardContent>
            </Collapse>

            </Card>
        </div>
    )
}

export default ComprehensionSection
