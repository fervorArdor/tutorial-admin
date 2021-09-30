import React, { useState } from 'react'
import { styled } from '@mui/styles'
import { Box, Card, CardActions, Collapse, CardContent, Toolbar, IconButton, Typography } from '@mui/material'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
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


const Instructions = () => {    
    const classes = useStyles()
    const [expanded, setExpanded] = useState(false)
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
                <Typography variant='subtitle2' style={{fontWeight: 'bold'}}>Instructions</Typography>
                </Toolbar>
            </CardActions>

            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent style={{paddingLeft:"50px"}}>
                    <div className={classes.flex}>
                        <Typography variant='subtitle2'>Maximum Marks</Typography>
                        <Typography variant='subtitle2' fontWeight='bold'>100</Typography>
                    </div>
                    <div className={classes.flex}>
                        <Typography variant='subtitle2'>Per section contains</Typography>
                        <Typography variant='subtitle2' fontWeight='bold'>5</Typography>
                        <Typography variant='subtitle2'>questions. The answer to each question is a</Typography>
                        <Typography variant='subtitle2' fontWeight='bold'>Numerical value</Typography>
                    </div>
                    <Typography variant='subtitle2'>
                        For each question, enter the correct numerical value of the answer using the mouse and the on-screen virtual numeric keypad in the place designated to enter the answer, 
                    </Typography>
                    <Box m={2} />
                    <div className={classes.flex}>
                        <Typography variant='subtitle2'>
                            If the numerical value has more than two decimal places, truncate/round-off the value to
                        </Typography>
                        <Typography variant='subtitle2' fontWeight='bold'>Two</Typography>
                        <Typography variant='subtitle2'>decimal places.</Typography>
                    </div>
                    <Typography variant='subtitle2'>
                        Answer to each question will be evaluated according to the following marking scheme:
                    </Typography>
                    <Box m={1} />
                    <div className={classes.flex}>
                        <Typography variant='subtitle2'>
                            Full Marks:
                        </Typography>
                        <Typography variant='subtitle2' fontWeight='bold'>+3</Typography>
                        <Typography variant='subtitle2'>If only the correct numerical value is entered;</Typography>
                    </div>
                    <div className={classes.flex}>
                        <Typography variant='subtitle2'>
                            Zero Marks:
                        </Typography>
                        <Typography variant='subtitle2' fontWeight='bold'>0</Typography>
                        <Typography variant='subtitle2'>In all other cases.</Typography>
                    </div>
                </CardContent>
            </Collapse>

            </Card>
        </div>
    )
}

export default Instructions
