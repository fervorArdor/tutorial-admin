import React from 'react'
import { Grid, Typography, Paper, IconButton, Box } from '@mui/material'
import { AiOutlineFileText } from 'react-icons/ai'
import { BsCalendar } from 'react-icons/bs'
import { AiOutlineUser } from 'react-icons/ai'
import { FiBookOpen } from 'react-icons/fi'
import { FiCheckCircle } from 'react-icons/fi'
import useStyles from './styles'

const summaryData = [
    {icon: <AiOutlineUser />, total: 450, title: 'Students'},
    {icon: <FiBookOpen />, total: 2340, title: 'Test repository'},
    {icon: <FiCheckCircle />, total: 18, title: 'Scheduled Tests'},
]

const Summary = () => {
    const classes = useStyles()

    return (
        <>
        <Grid container>
            {summaryData.map((item, index) => (
                <Grid item xs={4}>
                    <Paper className={classes.paper1}>
                        <IconButton size="large" color="inherit" style={{color: '#E99C1D'}}>
                            {item.icon}
                        </IconButton>
                        <Typography variant='subtitle1' color='primary'>{item.total}</Typography>
                        <Typography variant='subtitle1'>{item.title}</Typography>
                    </Paper>
                </Grid>
            ))}
        </Grid>
        <Box m={2} />
        <Grid container spacing={2}>
            <Grid item xs={6}>
                <Paper className={classes.paper}>
                    <IconButton size="large" color="inherit">
                        <BsCalendar />
                    </IconButton>
                    <Typography variant='subtitle2'>Scheduled Test</Typography>
                </Paper>
            </Grid>
            <Grid item xs={6}>
                <Paper className={classes.paper}>
                    <IconButton size="large" color="inherit" style={{color: '#E99C1D'}}>
                        <AiOutlineFileText />
                    </IconButton>
                    <Typography variant='subtitle2'>Upload Test</Typography>
                </Paper>
            </Grid>
        </Grid>
        </>
    )
}

export default Summary
