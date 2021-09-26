import React, { Component } from 'react';
import { Typography, Grid, Paper, Table, TableContainer, TableBody, TableRow, TableCell, Box } from '@mui/material'
import Summary from './Summary'
import ScheduledTestDetails from './ScheduledTestDetails'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
// import Calendar from "react-material-ui-calendar"
import Calendar from "react-calendar"
import 'react-calendar/dist/Calendar.css'
import useStyles from './styles'

function createData(testNumber, testName, scheduledOn) {
    return { testNumber, testName, scheduledOn };
}

const rows = [
    createData('T1', 'Limits', '12 June'),
    createData('T2', 'Maths', '12 June 2021'),
    createData('T3', 'Maths', '12 June 2021'),
    createData('T4', 'Maths', '12 June 2021'),,
]
  
const DashboardMain = () => {
    const classes = useStyles()

    return (
        <div>
            <Typography variant='h5' fontWeight='bold' gutterBottom>
                Summary
            </Typography>
            <Grid container spacing={2}>
                <Grid item xs={9}>
                    <Summary />
                </Grid>
                <Grid item xs={3}>
                    <Calendar />
                </Grid>
                <Grid item xs={9}>
                    <Box mt={1} />
                        <Typography variant='subtitle1' color='primary' fontWeight='bold'>Scheduled Test</Typography>
                    <Box mb={2} />
                    <ScheduledTestDetails />
                </Grid>
                <Box sx={{flexGrow: 1}} />
                <Grid item xs={3}>
                    <TableContainer sx={{width: 250}} component={Paper}>
                        <Table aria-label="simple table">
                            <TableBody>
                            {rows.map((row, index) => (
                                <TableRow
                                key={index}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        <Typography fontWeight='bold' variant='subtitle2'>{row.testNumber}</Typography>
                                    </TableCell>
                                    <TableCell align="left">
                                        <Typography fontWeight='bold' variant='subtitle2'>{row.testName}</Typography>
                                        <Box />
                                        <Typography className={classes.caption1} style={{display: 'inline-block', marginRight: '2px'}}>
                                            Scheduled:
                                        </Typography>
                                        <Typography style={{display: 'inline-block'}} className={classes.caption1}  color='primary'>
                                            {row.scheduledOn}
                                        </Typography>
                                    </TableCell>
                                    <TableCell align="center">
                                        <KeyboardArrowRightIcon color='primary' />
                                    </TableCell>
                                </TableRow>
                            ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
            </Grid>
        </div>
    )
}

export default DashboardMain;
