import React from 'react'
import { Table, TableContainer, TableHead, TableRow, TableCell, TableBody, Paper, Typography } from '@mui/material'
import { OutLinedButton } from '../../../CustomizeComponent'
import useStyles from './styles'

function createData(date, topic, exam, batch) {
    return { date, topic, exam, batch };
}
  
const rows = [
    createData('12/06/2021', 'Permutation & Combination, Probability, Complex Number', 'IITJEE', 'Class- X Session- 2020-21'),
    createData('13/06/2021', 'Permutation & Combination, Probability, Complex Number', 'IITJEE', 'Class- X Session- 2020-21'),
    createData('14/06/2021', 'Permutation & Combination, Probability, Complex Number', 'IITJEE', 'Class- X Session- 2020-21'),
    createData('15/06/2021', 'Permutation & Combination, Probability, Complex Number', 'IITJEE', 'Class- X Session- 2020-21'),
    createData('16/06/2021', 'Permutation & Combination, Probability, Complex Number', 'IITJEE', 'Class- X Session- 2020-21'),
];

const ScheduledTestDetails = () => {
    const classes = useStyles()

    return (
        <TableContainer component={Paper} elevation={0}>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align="center" className={classes.td}>
                            <Typography className={classes.caption} color='secondary.light'>Date</Typography>
                        </TableCell>
                        <TableCell align="center" className={classes.td}>
                            <Typography className={classes.caption} color='secondary.light'>Topic / Subject</Typography>
                        </TableCell>
                        <TableCell align="center" className={classes.td}>
                            <Typography className={classes.caption} color='secondary.light'>Exam</Typography>
                        </TableCell>
                        <TableCell align="center" className={classes.td}>
                            <Typography className={classes.caption} color='secondary.light'>Class</Typography>
                        </TableCell>
                        <TableCell align="center" className={classes.td}>
                            <Typography className={classes.caption} color='secondary.light'>Action</Typography>
                        </TableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                {rows.map((row, index) => (
                    <TableRow
                    key={index}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                        <TableCell align="center" className={classes.td}>
                            <Typography className={classes.caption}>{row.date}</Typography>
                        </TableCell>
                        <TableCell align="center" className={classes.td}>
                            <Typography className={classes.caption} color='primary' fontWeight='bold'>{row.topic}</Typography>
                        </TableCell>
                        <TableCell align="center" className={classes.td}>
                            <Typography className={classes.caption}>{row.exam}</Typography>
                        </TableCell>
                        <TableCell align="center" className={classes.td}>
                            <Typography className={classes.caption}>{row.batch}</Typography>
                        </TableCell>
                        <TableCell style={{minWidth: '200px'}} align="center" className={classes.td}>
                            <OutLinedButton style={{marginRight: '10px'}}>Edit</OutLinedButton>
                            <OutLinedButton>Cancel</OutLinedButton>
                        </TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default ScheduledTestDetails
