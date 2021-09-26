import React from 'react'
import { Typography, Box, InputAdornment, Table, TableContainer, Paper, TableHead, TableCell, TableBody, TableRow, TextField, Link } from '@mui/material'
import { FilledButton } from '../../CustomizeComponent';
import SearchIcon from '@mui/icons-material/Search'
import useStyles from './styles'

function createData(announcements, date) {
    return { announcements, date };
}

const rows = [
    createData('IITJEE Maths', '27/01/20'),
    createData('IITJEE Maths', '27/01/20'),
    createData('IITJEE Maths', '27/01/20'),
    createData('IITJEE Science', '27/01/20'),
    createData('IITJEE Maths', '27/01/20'),
];

const AnnouncementsMain = () => {
    const classes = useStyles()

    return (
        <div>
        <Typography variant='h5' fontWeight='bold'>Announcements</Typography>
        <Box m={2} />
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <FilledButton>
                <Typography variant='subtitle2'>New Announcement</Typography>
            </FilledButton>
            <TextField
                variant='outlined'
                label='Search' 
                size='small'
                InputProps={{
                    endAdornment: <InputAdornment position="end">
                        <SearchIcon color='primary' />
                    </InputAdornment>,
                }}
            />
        </div>
        <Box m={2} />
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
                <TableRow>
                <TableCell>
                    <Typography className={classes.caption} color='secondary.light'>Announcements</Typography>
                </TableCell>
                <TableCell align="right">
                    <Typography className={classes.caption} color='secondary.light'>Date</Typography>
                </TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {rows.map((row) => (
                <TableRow
                    key={row.date}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                    <TableCell component="th" color='primary' scope="row">
                    <Link href="#" underline="always" className={classes.caption}>
                        {row.announcements}
                    </Link>
                    </TableCell>
                    <TableCell align="right" className={classes.caption}>{row.date}</TableCell>
                </TableRow>
                ))}
            </TableBody>
            </Table>
        </TableContainer>
      </div>
    );
}

export default AnnouncementsMain
