import React, { useState } from 'react'
import { styled } from '@mui/styles'
import { Card, CardActions, Collapse, CardContent, Toolbar, IconButton, Typography, Divider, Grid } from '@mui/material'
import PaperDescription from './PaperDescription'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import { questions } from './questions'
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


const QuestionsComponent = () => {    
    const classes = useStyles()
    const [expanded, setExpanded] = useState(false)
    const handleExpandClick = () => {
        setExpanded(!expanded)
    }
    return (
        <div>
            <Card elevation={0}>
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
                <Typography variant='subtitle2' fontWeight='bold' color='primary'>Questions</Typography>
                </Toolbar>
            </CardActions>

            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent style={{paddingLeft:"50px"}}>
                    {questions.map((question, index) => (
                        <>
                            <div className={classes.displayFlex}>
                                <Typography variant='subtitle2' fontWeight='bold'>
                                    {question.quesNum}
                                </Typography>
                                <Typography variant='subtitle2' fontWeight='bold'>
                                    {question.ques}
                                </Typography>
                            </div> 
                            <PaperDescription />
                            <div className={classes.flex}>
                                <Typography variant='subtitle2'>
                                    Answer Type:
                                </Typography>
                                <Typography variant='subtitle2' fontWeight='bold'>
                                    {question.ansType}
                                </Typography>
                            </div>
                            {question.ansType !== 'Match the column' ? (
                                question.ansOptions.map((option, idx) => (
                                    <div className={classes.displayFlex}>
                                        <Typography variant='subtitle2' style={{marginRight: '10px'}}>
                                            {String.fromCharCode(idx+65)}
                                        </Typography>
                                        {option.match(/[^/]+(jpg|png|jpeg)$/) ? 
                                            <img src={option} alt="" /> : 
                                            <Typography variant='subtitle2' style={{marginBottom: '10px'}}>
                                                {option}
                                            </Typography>
                                        }
                                    </div>
                                ))
                            ) : (
                                <Grid conatiner spacing={2} style={{display: 'flex'}}>
                                    <Grid item xs={2}>
                                        <Typography variant='subtitle2' color='secondary.light' style={{marginBottom: '10px'}}>
                                            Questions
                                        </Typography>
                                        {question.ansOptions.map((obj, idx) => (
                                            <div className={classes.displayFlex}>
                                                <Typography variant='subtitle2' style={{marginRight: '10px'}}>
                                                    {String.fromCharCode(idx+65)}
                                                </Typography>
                                                <Typography variant='subtitle2' style={{marginBottom: '10px'}}>
                                                    {obj.question}
                                                </Typography>
                                            </div>
                                        ))}
                                    </Grid>
                                    <Grid item xs={2}>
                                        <Typography variant='subtitle2' color='secondary.light' style={{marginBottom: '10px'}}>
                                            Options
                                        </Typography>
                                        {question.ansOptions.map((obj, idx) => (
                                            <div className={classes.displayFlex}>
                                                <Typography variant='subtitle2' style={{marginRight: '10px'}}>
                                                    {idx+1}
                                                </Typography>
                                                <Typography variant='subtitle2' style={{marginBottom: '10px'}}>
                                                    {obj.option}
                                                </Typography>
                                            </div>
                                        ))}
                                    </Grid>
                                </Grid>
                            )}
                            <Divider style={{marginBottom: '20px'}} />
                        </>
                    ))}
                </CardContent>
            </Collapse>

            </Card>
        </div>
    )
}

export default QuestionsComponent
