import React from 'react'
import { Table, TableContainer, TableHead, TableRow, TableCell, TableBody, Paper, Typography } from '@mui/material'
import { OutLinedButton } from '../../CustomizeComponent'

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

const ScheduledTestDataTable = () => {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 850 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>#</TableCell>
                        <TableCell align="center">Date</TableCell>
                        <TableCell align="center">Topic / SUbject</TableCell>
                        <TableCell align="center">Exam</TableCell>
                        <TableCell align="center">Batch</TableCell>
                        <TableCell align="center">Completion date</TableCell>
                        <TableCell align="center">Action</TableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                {rows.map((row, index) => (
                    <TableRow
                    key={index}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                        <TableCell component="th" scope="row">
                            {index+1}
                        </TableCell>
                        <TableCell align="center">
                            <Typography variant='body2'>{row.date}</Typography>
                        </TableCell>
                        <TableCell align="center">
                            <Typography variant='body2'>{row.topic}</Typography>
                        </TableCell>
                        <TableCell align="center">
                            <Typography variant='body2'>{row.exam}</Typography>
                        </TableCell>
                        <TableCell align="center">
                            <Typography variant='body2'>{row.batch}</Typography>
                        </TableCell>
                        <TableCell align="center">
                            <Typography variant='body2'>{row.completion_date}</Typography>
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

export default ScheduledTestDataTable
