import React from 'react'
import { Table, TableContainer, TableHead, TableRow, TableCell, TableBody, Paper, Typography } from '@mui/material'
import { OutLinedButton } from '../../../CustomizeComponent'

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
    return (
        <TableContainer component={Paper}>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align="center">Date</TableCell>
                        <TableCell align="center">Topic / SUbject</TableCell>
                        <TableCell align="center">Exam</TableCell>
                        <TableCell align="center">Class</TableCell>
                        <TableCell align="center">Action</TableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                {rows.map((row, index) => (
                    <TableRow
                    key={index}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                        <TableCell align="center">
                            <Typography variant='caption'>{row.date}</Typography>
                        </TableCell>
                        <TableCell align="center">
                            <Typography variant='caption'>{row.topic}</Typography>
                        </TableCell>
                        <TableCell align="center">
                            <Typography variant='caption'>{row.exam}</Typography>
                        </TableCell>
                        <TableCell align="center">
                            <Typography variant='caption'>{row.batch}</Typography>
                        </TableCell>
                        <TableCell style={{minWidth: '240px'}} align="center">
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
