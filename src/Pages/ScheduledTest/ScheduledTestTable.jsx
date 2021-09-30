import React from 'react'
import { Table, TableContainer, TableHead, TableRow, TableCell, TableBody, Paper, Typography } from '@mui/material'
import ModalComponent from './ModalComponent'
import useStyles from './styles'

const ScheduledTestTable = ({ rows }) => {
    const classes = useStyles()

    return (
        <TableContainer component={Paper}>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>
                            <Typography className={classes.caption} color='secondary.light'>#</Typography>
                        </TableCell>
                        <TableCell align="center">
                            <Typography className={classes.caption} color='secondary.light'>Date</Typography>
                        </TableCell>
                        <TableCell align="center">
                            <Typography className={classes.caption} color='secondary.light'>Topic / Subject</Typography>
                        </TableCell>
                        <TableCell align="center">
                            <Typography className={classes.caption} color='secondary.light'>Exam</Typography>
                        </TableCell>
                        <TableCell align="center">
                            <Typography className={classes.caption} color='secondary.light'>
                                Batch
                            </Typography>
                        </TableCell>
                        <TableCell align="center">
                            <Typography className={classes.caption} color='secondary.light'>
                                Completion date
                            </Typography>
                        </TableCell>
                        <TableCell align="center">
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
                        <TableCell component="th" scope="row">
                            {index+1}
                        </TableCell>
                        <TableCell align="center">
                            <Typography className={classes.caption}>{row.date}</Typography>
                        </TableCell>
                        <TableCell align="center">
                            <Typography className={classes.caption}>{row.topic}</Typography>
                        </TableCell>
                        <TableCell align="center">
                            <Typography className={classes.caption}>{row.exam}</Typography>
                        </TableCell>
                        <TableCell align="center">
                            <Typography className={classes.caption}>{row.batch}</Typography>
                        </TableCell>
                        <TableCell align="center">
                            <Typography className={classes.caption}>
                                {row.completion_date}
                            </Typography>
                        </TableCell>
                        <TableCell style={{minWidth: '240px'}} align="center">
                            <ModalComponent />
                        </TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default ScheduledTestTable
