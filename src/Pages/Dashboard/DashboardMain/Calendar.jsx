import React from 'react'
import { TextField } from '@mui/material'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import { LocalizationProvider, StaticDatePicker }  from '@mui/lab'

const Calendar = () => {
    const [value, setValue] = React.useState(new Date())

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
        <StaticDatePicker
            displayStaticWrapperAs="desktop"
            label="Week picker"
            value={value}
            onChange={(newValue) => {
                setValue(newValue);
            }}
            renderInput={(params) => <TextField {...params} />}
            inputFormat="'Week of' MMM d"
        />
        </LocalizationProvider>
    )
}

export default Calendar
