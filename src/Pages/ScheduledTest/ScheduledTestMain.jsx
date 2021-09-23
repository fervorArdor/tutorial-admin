import React from 'react'
import { Grid, Typography } from '@mui/material'
import { FilledButton, OutLinedButton } from '../../CustomizeComponent'

function createData(date, topic, exam, batch, completion_date) {
  return { date, topic, exam, batch, completion_date };
}

const rows = [
  createData('12/06/2021', 'Permutation & Combination, Probability, Complex Number', 'IITJEE', 'Class- X Session- 2020-21', '15/06/2021'),
  createData('13/06/2021', 'Permutation & Combination, Probability, Complex Number', 'IITJEE', 'Class- X Session- 2020-21', '15/06/2021'),
  createData('14/06/2021', 'Permutation & Combination, Probability, Complex Number', 'IITJEE', 'Class- X Session- 2020-21', '15/06/2021'),
  createData('15/06/2021', 'Permutation & Combination, Probability, Complex Number', 'IITJEE', 'Class- X Session- 2020-21', '15/06/2021'),
  createData('16/06/2021', 'Permutation & Combination, Probability, Complex Number', 'IITJEE', 'Class- X Session- 2020-21', '15/06/2021'),
];

const ScheduledTestMain = () => {
    return (
      <div>
        <Grid container spacing={10}>
          <Grid item>
            <Typography variant='subtitle1'>#</Typography>
          </Grid>
          <Grid item xs={1}>
            <Typography variant='subtitle1'>Date</Typography>
          </Grid>
          <Grid item sm={3}>
            <Typography variant='subtitle1'>Topic / Subject</Typography>
          </Grid>
          <Grid item xs={1}>
            <Typography variant='subtitle1'>Exam</Typography>
          </Grid>
          <Grid item xs={1}>
            <Typography variant='subtitle1'>Batch</Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography variant='subtitle1'>Completion date</Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography variant='subtitle1'>Action</Typography>
          </Grid>
        </Grid>

        {rows.map((row, index) => (
          <Grid container spacing={10}>
            <Grid item>
              <Typography variant='caption'>{index+1}</Typography>
            </Grid>
            <Grid item xs={1}>
              <Typography variant='caption'>{row.date}</Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography variant='caption'>{row.topic}</Typography>
            </Grid>
            <Grid item xs={1}>
              <Typography variant='caption'>{row.exam}</Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography variant='caption'>{row.batch}</Typography>
            </Grid>
            <Grid item xs={1}>
              <Typography variant='caption'>{row.completion_date}</Typography>
            </Grid>
            <Grid item xs={3} style={{display: 'flex'}}>
              <OutLinedButton style={{margin: '16px'}}>Edit</OutLinedButton>
              <OutLinedButton style={{margin: '16px'}}>Cancel</OutLinedButton>
            </Grid>
          </Grid>
        ))}
        </div>
    )
}

export default ScheduledTestMain
