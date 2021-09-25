import React from 'react'
import { Grid, Typography, Select, MenuItem, InputAdornment, TextField, Box } from '@mui/material'
// import ScheduledTestDataTable from './ScheduledTestDataTable'
import DataTable from './DataTable'
import { GrSearch } from 'react-icons/gr'

const Main = ({ rows, pageName }) => {
    return (
      <div>
        <Typography variant='h6' fontWeight='bold' gutterBottom>
            {pageName === 'test_repository' ? 'Test Repository' : 'Scheduled Test'}
        </Typography>
        <Grid container spacing={10}>
          <Grid item xs={3}>
            <Typography variant='subtitle2' color='primary' fontWeight='bold'>Exam type</Typography>
            <Select
              value={1}
              size='small'
              displayEmpty
              inputProps={{ 'aria-label': 'Without label' }}
              >
                  <MenuItem value={1}>Select</MenuItem>
                  <MenuItem value={2}>Default</MenuItem>
            </Select>
          </Grid>
          <Grid item sm={3}>
            <Typography variant='subtitle2' color='primary' fontWeight='bold'>Search Test</Typography>
            <TextField
                variant='outlined'
                size='small'
                label='Test' 
                InputProps={{
                    endAdornment: <InputAdornment position="end">
                        <GrSearch />
                    </InputAdornment>,
                }}
            />
          </Grid>
          <Grid style={{ display: "flex", justifyContent: "flex-end", alignItems: 'flex-end' }} item xs={6}>
            <Select
              value={1}
              size='small'
              displayEmpty
              inputProps={{ 'aria-label': 'Without label' }}
              >
                  <MenuItem value={1}>Recent</MenuItem>
                  <MenuItem value={2}>Default</MenuItem>
            </Select>
          </Grid>
        </Grid>
        <Box m={4} />

        <DataTable rows={rows} pageName={pageName} />
      </div>
    )
}

export default Main
