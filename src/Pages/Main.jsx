import React from 'react'
import { Grid, Typography, Select, MenuItem, InputAdornment, TextField, Box } from '@mui/material'
import DataTable from './DataTable'
import SearchIcon from '@mui/icons-material/Search'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'

const Main = ({ rows, pageName }) => {
    return (
      <div>
        <Typography variant='h5' fontWeight='bolder' gutterBottom>
            {pageName === 'test_repository' ? 'Test Repository' : 'Scheduled Test'}
        </Typography>
        <Box m={3} />
        <Grid container spacing={10}>
          <Grid item xs={3}>
            <Typography variant='subtitle2' color='primary' fontWeight='bold'>Exam type</Typography>
            <Select
              value={1}
              size='small'
              displayEmpty
              IconComponent={() => (
                <KeyboardArrowDownIcon color='primary' style={{marginLeft: '100px'}} />
              )}
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
                        <SearchIcon color='primary' />
                    </InputAdornment>,
                }}
            />
          </Grid>
          <Grid style={{ display: "flex", justifyContent: "flex-end", alignItems: 'flex-end' }} item xs={6}>
            <Select
              value={1}
              size='small'
              displayEmpty
              IconComponent={() => (
                <KeyboardArrowDownIcon color='primary' />
              )}
              inputProps={{ 'aria-label': 'Without label' }}
              >
                  <MenuItem value={1}>Recent</MenuItem>
                  <MenuItem value={2}>Default</MenuItem>
            </Select>
          </Grid>
        </Grid>
        <Box m={2} />

        <DataTable rows={rows} pageName={pageName} />
      </div>
    )
}

export default Main
