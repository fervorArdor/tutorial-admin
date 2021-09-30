import React, { useState } from 'react'
import { styled } from '@mui/styles'
import { Card, CardActions, Collapse, CardContent, Toolbar, IconButton, Typography, TextField } from '@mui/material'

import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import CancelIcon from '@mui/icons-material/Cancel'
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


const DescriptionSection = () => {    
    const classes = useStyles()
    const [expanded, setExpanded] = useState(false)
    const handleExpandClick = () => {
        setExpanded(!expanded)
    }
    return (
        <div>
            <Card>
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
                <Typography variant='subtitle2' fontWeight='bold' color='primary'>Description</Typography>
                </Toolbar>
            </CardActions>

            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent style={{paddingLeft:"50px"}}>
                    <div className={classes.flex}>
                        <TextField
                            multiline
                            rows={3}
                            variant="outlined"
                            size='small'
                            fullWidth
                        />
                        <CancelIcon style={{color: '#FA4141', marginLeft: '10px'}} />
                    </div>
                </CardContent>
            </Collapse>

            </Card>
        </div>
    )
}

export default DescriptionSection
