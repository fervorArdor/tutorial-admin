import React from 'react'
import { Table, TableContainer, TableHead, TableRow, TableCell, TableBody, Paper, Typography } from '@mui/material'
import { OutLinedButton } from '../CustomizeComponent'

const DataTable = ({ rows, pageName }) => {
    return (
        <TableContainer component={Paper}>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>
                            <Typography variant='captio' color='#8A8F93'>#</Typography>
                        </TableCell>
                        <TableCell align="center">
                            <Typography variant='caption' color='#8A8F93'>Date</Typography>
                        </TableCell>
                        <TableCell align="center">
                            <Typography variant='caption' color='#8A8F93'>Topic / Subject</Typography>
                        </TableCell>
                        <TableCell align="center">
                            <Typography variant='caption' color='#8A8F93'>Exam</Typography>
                        </TableCell>
                        <TableCell align="center">
                            <Typography variant='caption' color='#8A8F93'>
                                {pageName === 'test_repository' ? 'Name of the tests' : 'Batch'}
                            </Typography>
                        </TableCell>
                        <TableCell align="center">
                            <Typography variant='caption' color='#8A8F93'>
                                {pageName === 'test_repository' ? 'Questions' : 'Completion date'}
                            </Typography>
                        </TableCell>
                        <TableCell align="center">
                            <Typography variant='caption' color='#8A8F93'>Action</Typography>
                        </TableCell>
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
                        <TableCell align="center">
                            <Typography variant='caption'>
                                {pageName === 'test_repository' ? row.questions : row.completion_date }
                            </Typography>
                        </TableCell>
                        <TableCell style={{minWidth: '260px'}} align="center">
                            <OutLinedButton style={{marginRight: '10px'}}>
                                {pageName === 'test_repository' ? 'Schedule Test' : 'Edit'}
                            </OutLinedButton>
                            <OutLinedButton>
                                {pageName === 'test_repository' ? 'Edit' : 'Cancel'}
                            </OutLinedButton>
                        </TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default DataTable
