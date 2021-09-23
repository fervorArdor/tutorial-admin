import React from 'react'
import { Typography, Box, InputAdornment, Table, TableContainer, Paper, TableHead, TableCell, TableBody, TableRow, TextField, Link } from '@mui/material'
import { FilledButton } from '../../CustomizeComponent';
import { GrSearch } from 'react-icons/gr'

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
    return (
        <div>
        <Typography variant='h6' style={{fontWeight: 'bold'}}>Announcements</Typography>
        <Box m={3} />
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <FilledButton>New Announcements</FilledButton>
            <TextField
                variant='outlined'
                label='Search' 
                InputProps={{
                    endAdornment: <InputAdornment position="end">
                        <GrSearch />
                    </InputAdornment>,
                }}
            />
        </div>
        <Box m={4} />
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
                <TableRow>
                <TableCell>Announcements</TableCell>
                <TableCell align="right">Date</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {rows.map((row) => (
                <TableRow
                    key={row.date}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                    <TableCell component="th" color='primary' scope="row">
                    <Link href="#" underline="always">
                        {row.announcements}
                    </Link>
                    </TableCell>
                    <TableCell align="right">{row.date}</TableCell>
                </TableRow>
                ))}
            </TableBody>
            </Table>
        </TableContainer>
      </div>
    );
}

export default AnnouncementsMain
