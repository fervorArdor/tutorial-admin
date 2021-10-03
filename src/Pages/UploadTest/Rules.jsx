import React, { useEffect, useState } from 'react';
import { TableContainer, TableHead, TableRow, TableCell, TableBody, Table, Paper, Select, MenuItem, TextField, Box, Typography, Radio } from '@mui/material'
import { OutLinedButton } from '../../CustomizeComponent'
import AddIcon from '@mui/icons-material/Add'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import useStyles from './styles'

function Rules(props) {
    const classes = useStyles()

    function createData(id, negMarking, calories, fat, carbs, protein) {
        return { id, negMarking, calories, fat, carbs, protein };
    }
    
    const rows = [
        createData(1, 'yes', 159, 6.0, 24, 4.0),
        createData(2, 'no', 237, 9.0, 37, 4.3),
        createData(3, 'yes', 262, 16.0, 24, 6.0),
        createData(4, 'yes', 305, 3.7, 67, 4.3),
        createData(5, 'no', 356, 16.0, 49, 3.9),
    ];

    const [selectedValue, setSelectedValue] = useState(null)

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    }    

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
                            <Radio
                                checked={selectedValue == row.id}
                                onChange={handleChange}
                                value={row.id}
                                name="radio-buttons"
                                checkedIcon={<CheckCircleIcon />}
                                inputProps={{ 'aria-label': 'A' }}
                            />
                            <Typography className={classes.caption} color='secondary.light'>Yes</Typography>
                            <Radio
                                checked={selectedValue == row.id+99}
                                onChange={handleChange}
                                value={row.id+99}
                                name="radio-buttons"
                                checkedIcon={<CheckCircleIcon />}
                                inputProps={{ 'aria-label': 'B' }}
                            />
                            <Typography className={classes.caption} color='secondary.light'>No</Typography>
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