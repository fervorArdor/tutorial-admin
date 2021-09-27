import React from 'react'
import { Typography, Paper, Table, TableContainer, TableBody, TableRow, TableCell, Box } from '@mui/material'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import useStyles from './styles'


function createData(testNumber, testName, scheduledOn) {
    return { testNumber, testName, scheduledOn };
}

const rows = [
    createData('T1', 'Limits', '12 June'),
    createData('T2', 'Maths', '12 June 2021'),
    createData('T3', 'Maths', '12 June 2021'),
    createData('T4', 'Maths', '12 June 2021'),
]

const UpcomingTests = () => {
    const classes = useStyles()

    return (
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
    )
}

export default UpcomingTests
