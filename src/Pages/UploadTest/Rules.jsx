import React from 'react';
import { TableContainer, TableHead, TableRow, TableCell, TableBody, Table, Paper, Select, MenuItem, RadioGroup, FormControlLabel, Radio, TextField, Box } from '@mui/material'
import { FilledButton, OutLinedButton } from '../../CustomizeComponent'
import { AiOutlinePlus } from 'react-icons/ai'

function Rules(props) {
    function createData(name, calories, fat, carbs, protein) {
        return { name, calories, fat, carbs, protein };
    }

    const rows = [
        createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
        createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
        createData('Eclair', 262, 16.0, 24, 6.0),
        createData('Cupcake', 305, 3.7, 67, 4.3),
        createData('Gingerbread', 356, 16.0, 49, 3.9),
    ];

    return (
        <div>
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 850 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>#</TableCell>
                        <TableCell align="right">Select section</TableCell>
                        <TableCell align="right">Questions</TableCell>
                        <TableCell align="right">Marks per question</TableCell>
                        <TableCell align="right">Nagative Marking</TableCell>
                        <TableCell align="right">Nagative Marks per question</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell></TableCell>
                        <TableCell align="right"></TableCell>
                        <TableCell align="right"></TableCell>
                        <TableCell align="right">
                            <TextField size='small' />
                        </TableCell>
                        <TableCell align="right">
                            <Select
                            value={1}
                            size='small'
                            displayEmpty
                            inputProps={{ 'aria-label': 'Without label' }}
                            >
                            
                                <MenuItem value={1}>Customize</MenuItem>
                                <MenuItem value={2}>Default</MenuItem>
                            </Select>
                        </TableCell>
                        <TableCell align="right">
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
                    <TableCell align="right">
                        <Select
                            value={1}
                            size='small'
                            displayEmpty
                            inputProps={{ 'aria-label': 'Without label' }}
                            >
                                <MenuItem value={1}>Comprehension #1</MenuItem>
                                <MenuItem value={2}>Default</MenuItem>
                            </Select>
                    </TableCell>
                    <TableCell align="right" style={{minWidth: '190px'}}>
                        From 
                        <Select
                            value={1}
                            size='small'
                            displayEmpty
                            inputProps={{ 'aria-label': 'Without label' }}
                            >
                                <MenuItem value={1}>1</MenuItem>
                                <MenuItem value={2}>2</MenuItem>
                        </Select>
                        To 
                        <Select
                            value={1}
                            size='small'
                            displayEmpty
                            inputProps={{ 'aria-label': 'Without label' }}
                            >
                                <MenuItem value={1}>3</MenuItem>
                                <MenuItem value={2}>4</MenuItem>
                        </Select>
                    </TableCell>
                    <TableCell align="right">
                        <TextField inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} size='small' />
                    </TableCell>
                    <TableCell align="right" style={{minWidth: '167px'}}>
                    <RadioGroup row aria-label="" name="row-radio-buttons-group">
                        <FormControlLabel value="yes" control={<Radio size='small' />} label="Yes" />
                        <FormControlLabel value="no" control={<Radio size='small'/>} label="No" />
                    </RadioGroup>
                    </TableCell>
                    <TableCell align="right">
                        <TextField size='small' />
                    </TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
            <OutLinedButton style={{margin: '16px'}}>
                <AiOutlinePlus style={{marginRight: '4px'}} /> Add row
            </OutLinedButton>
            <Box m={3} />
        </TableContainer>

        <OutLinedButton style={{margin: '16px'}}>Back</OutLinedButton>
        <FilledButton style={{margin: '16px'}}>Next</FilledButton>
        </div>
    );
}

export default Rules;