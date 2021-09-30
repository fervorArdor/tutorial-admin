import React, { useState } from 'react'
import { styled } from '@mui/styles'
import { Box, Select, MenuItem, Card, CardActions, Collapse, CardContent, Toolbar, IconButton, Typography, TextField } from '@mui/material'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
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
                        <TextField
                            variant="outlined"
                            size='small'
                            style={{width: '62px'}}
                        />
                    </div>
                    <div className={classes.flex}>
                        <Typography variant='subtitle2'>Per section contains</Typography>
                        <TextField
                            variant="outlined"
                            size='small'
                            style={{width: '62px'}}
                        />
                        <Typography variant='subtitle2'>questions. The answer to each question is a</Typography>
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
                                <Typography variant='subtitle2'>Numerical value</Typography>
                            </MenuItem>
                            <MenuItem value={2}>Default</MenuItem>
                        </Select>
                    </div>
                    <Typography variant='subtitle2'>
                        For each question, enter the correct numerical value of the answer using the mouse and the on-screen virtual numeric keypad in the place designated to enter the answer, 
                    </Typography>
                    <Box m={2} />
                    <div className={classes.flex}>
                        <Typography variant='subtitle2'>
                            If the numerical value has more than two decimal places, truncate/round-off the value to
                        </Typography>
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
                                <Typography variant='subtitle2'>Two</Typography>
                            </MenuItem>
                            <MenuItem value={2}>Default</MenuItem>
                        </Select>
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
                        <TextField
                            variant="outlined"
                            size='small'
                            style={{width: '62px'}}
                        />
                        <Typography variant='subtitle2'>If only the correct numerical value is entered;</Typography>
                    </div>
                    <div className={classes.flex}>
                        <Typography variant='subtitle2'>
                            Zero Marks:
                        </Typography>
                        <TextField
                            variant="outlined"
                            size='small'
                            style={{width: '62px'}}
                        />
                        <Typography variant='subtitle2'>In all other cases.</Typography>
                    </div>
                </CardContent>
            </Collapse>

            </Card>
        </div>
    )
}

export default Instructions
