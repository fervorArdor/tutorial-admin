import React from 'react'
import { Table, TableContainer, TableHead, TableRow, TableCell, TableBody, Paper, Typography } from '@mui/material'
import ModalTestComponent from './ModalTestComponent'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
    caption: {
        fontSize: '13px',
        lineHeight: '19px',
    },
})

const TestRepositoryTable = ({ rows }) => {
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
                            <Typography className={classes.caption} color='secondary.light'>Name of the tests</Typography>
                        </TableCell>
                        <TableCell align="center">
                            <Typography className={classes.caption} color='secondary.light'>Exam</Typography>
                        </TableCell>
                        <TableCell align="center">
                            <Typography className={classes.caption} color='secondary.light'>Topic /Subject</Typography>
                        </TableCell>
                        <TableCell align="center">
                            <Typography className={classes.caption} color='secondary.light'>
                                Date
                            </Typography>
                        </TableCell>
                        <TableCell align="center">
                            <Typography className={classes.caption} color='secondary.light'>
                                Questions
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
                        <TableCell align="center" style={{minWidth: '230px'}}>
                            <Typography className={classes.caption}>{row.batch}</Typography>
                        </TableCell>
                        <TableCell align="center">
                            <Typography className={classes.caption}>{row.exam}</Typography>
                        </TableCell>
                        <TableCell align="center">
                            <Typography className={classes.caption}>{row.topic}</Typography>
                        </TableCell>
                        <TableCell align="center">
                            <Typography className={classes.caption}>{row.date}</Typography>
                        </TableCell>
                        <TableCell align="center">
                            <Typography className={classes.caption}>
                                {row.questions}
                            </Typography>
                        </TableCell>
                        <TableCell style={{minWidth: '230px'}} align="center">
                            <ModalTestComponent />
                        </TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default TestRepositoryTable
