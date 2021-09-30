import React from 'react';
import { TableContainer, TableHead, TableRow, TableCell, TableBody, Table, Paper, Select, MenuItem, TextField, Box, Typography } from '@mui/material'
import { OutLinedButton } from '../../CustomizeComponent'
import AddIcon from '@mui/icons-material/Add'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined'
import useStyles from './styles'

function Rules(props) {
    const classes = useStyles()

    function createData(negMarking, calories, fat, carbs, protein) {
        return { negMarking, calories, fat, carbs, protein };
    }

    const rows = [
        createData('yes', 159, 6.0, 24, 4.0),
        createData('no', 237, 9.0, 37, 4.3),
        createData('yes', 262, 16.0, 24, 6.0),
        createData('yes', 305, 3.7, 67, 4.3),
        createData('no', 356, 16.0, 49, 3.9),
    ];

    return (
        <div>
        <TableContainer component={Paper}>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>
                            <Typography className={classes.caption} color='secondary.light'>#</Typography>
                        </TableCell>
                        <TableCell align="center">
                            <Typography className={classes.caption} color='secondary.light'>Select section</Typography>
                        </TableCell>
                        <TableCell align="center">
                            <Typography className={classes.caption} color='secondary.light'>Questions</Typography>
                        </TableCell>
                        <TableCell align="center">
                            <Typography className={classes.caption} color='secondary.light'>Marks per question</Typography>
                        </TableCell>
                        <TableCell align="center">
                            <Typography className={classes.caption} color='secondary.light'>Negative Marking</Typography>
                        </TableCell>
                        <TableCell align="center">
                            <Typography className={classes.caption} color='secondary.light'>Negative Marks per question</Typography>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell></TableCell>
                        <TableCell align="center"></TableCell>
                        <TableCell align="center"></TableCell>
                        <TableCell align="center">
                            <TextField size='small' />
                        </TableCell>
                        <TableCell align="center">
                            <Select
                            value={1}
                            size='small'
                            displayEmpty
                            IconComponent={() => (
                                <KeyboardArrowDownIcon color='primary' style={{paddingRight: '8px'}} />
                            )}
                            inputProps={{ 'aria-label': 'Without label' }}
                            >
                            
                                <MenuItem value={1}>Customize</MenuItem>
                                <MenuItem value={2}>Default</MenuItem>
                            </Select>
                        </TableCell>
                        <TableCell align="center">
                            <TextField size='small' />
                        </TableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                {rows.map((row, index) => (
                    <TableRow
                    key={row.name}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                    <TableCell component="th" scope="row">
                        {index+1}
                    </TableCell>
                    <TableCell align="center">
                        <Select
                            value={1}
                            size='small'
                            displayEmpty
                            IconComponent={() => (
                                <KeyboardArrowDownIcon color='primary' style={{paddingRight: '8px'}} />
                            )}
                            inputProps={{ 'aria-label': 'Without label' }}
                            >
                                <MenuItem value={1}>
                                    <Typography variant='subtitle2'>Comprehension #1</Typography> 
                                </MenuItem>
                                <MenuItem value={2}>Default</MenuItem>
                        </Select>
                    </TableCell>
                    <TableCell align="center" style={{minWidth: '270px'}}>
                        <div className={classes.displayFlex}>
                            <Typography variant='subtitle2'>From</Typography>
                            <Select
                                value={1}
                                size='small'
                                displayEmpty
                                style={{margin: '0px 10px'}}
                                IconComponent={() => (
                                    <KeyboardArrowDownIcon color='primary' style={{paddingRight: '8px'}}/>
                                )}
                                inputProps={{ 'aria-label': 'Without label' }}
                                >
                                    <MenuItem value={1}>
                                        <Typography variant='subtitle2'>1</Typography> 
                                    </MenuItem>
                                    <MenuItem value={2}>2</MenuItem>
                            </Select>
                            <Typography variant='subtitle2'>To</Typography>
                            <Select
                                value={1}
                                size='small'
                                displayEmpty
                                IconComponent={() => (
                                    <KeyboardArrowDownIcon color='primary' style={{paddingRight: '8px'}}/>
                                )}
                                inputProps={{ 'aria-label': 'Without label' }}
                                >
                                    <MenuItem value={1}>
                                        <Typography variant='subtitle2'>3</Typography> 
                                    </MenuItem>
                                    <MenuItem value={2}>4</MenuItem>
                            </Select>
                        </div>
                    </TableCell>
                    <TableCell align="center">
                        <TextField inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} size='small' />
                    </TableCell>
                    <TableCell align="center" style={{minWidth: '167px'}}>
                        <div className={classes.displayFlex}>
                            {row.negMarking === 'yes' ? <CheckCircleIcon color='primary' /> :  <CircleOutlinedIcon color='primary' /> }
                            <Typography variant='subtitle2'>Yes</Typography>
                            {row.negMarking === 'no' ? <CheckCircleIcon color='primary' /> :  <CircleOutlinedIcon color='primary' /> }
                            <Typography variant='subtitle2'>No</Typography>
                        </div>
                    </TableCell>
                    <TableCell align="center">
                        <TextField size='small' />
                    </TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
            <OutLinedButton style={{margin: '16px'}}>
                <AddIcon style={{marginRight: '4px'}} />
                <Typography variant='subtitle2'>Add row</Typography> 
            </OutLinedButton>
            <Box m={3} />
        </TableContainer>
        </div>
    );
}

export default Rules;