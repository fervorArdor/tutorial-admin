import React, { Component } from 'react';
import { Typography, Grid, Paper, Table, TableContainer, TableBody, TableRow, TableCell, Box } from '@mui/material'
import Summary from './Summary'
import ScheduledTestDetails from './ScheduledTestDetails'
import { MdKeyboardArrowRight } from 'react-icons/md'
// import Calendar from "react-material-ui-calendar"
import Calendar from "react-calendar"
import 'react-calendar/dist/Calendar.css'

function createData(testNumber, testName, scheduledOn) {
    return { testNumber, testName, scheduledOn };
}

const rows = [
    createData('T1', 'Limits', '12 June'),
    createData('T2', 'Maths', '12 June 2021'),
    createData('T3', 'Maths', '12 June 2021'),
    createData('T4', 'Maths', '12 June 2021'),,
]
  
class DashboardMain extends Component {
    render() {
        return (
            <div>
                <Typography variant='h6' fontWeight='bold' gutterBottom>
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
                        <ScheduledTestDetails />
                    </Grid>
                    <Grid item xs={3}>
                        <TableContainer component={Paper}>
                            <Table aria-label="simple table">
                                <TableBody>
                                {rows.map((row, index) => (
                                    <TableRow
                                    key={index}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row">
                                            {row.testNumber}
                                        </TableCell>
                                        <TableCell align="left">
                                            <Typography fontWeight='bold' variant='caption'>{row.testName}</Typography>
                                            <Box />
                                            <Typography variant='caption'style={{display: 'inline-block'}}>
                                                Scheduled:
                                            </Typography>
                                            <Typography style={{display: 'inline-block'}} variant='caption' color='primary'>
                                                {row.scheduledOn}
                                            </Typography>
                                        </TableCell>
                                        <TableCell align="center">
                                            <MdKeyboardArrowRight />
                                        </TableCell>
                                    </TableRow>
                                ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default DashboardMain;
