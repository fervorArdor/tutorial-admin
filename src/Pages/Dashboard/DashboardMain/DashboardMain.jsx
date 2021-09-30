import React from 'react';
import { Typography, Grid, Box } from '@mui/material'
import Summary from './Summary'
import ScheduledTestDetails from './ScheduledTestDetails'
import Calendar from './Calendar'
import UpcomingTests from './UpcomingTests'
  
const DashboardMain = () => {
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
                    <UpcomingTests />
                </Grid>
            </Grid>
        </div>
    )
}

export default DashboardMain;
