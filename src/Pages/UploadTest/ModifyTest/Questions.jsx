import React, { useState } from 'react'
import { styled } from '@mui/styles'
import { Card, CardActions, Collapse, CardContent, Toolbar, IconButton, Typography, Box, Select, MenuItem } from '@mui/material'
import { OutLinedButton, FilledButton } from '../../../CustomizeComponent'

import PaperDescription from './PaperDescription'
import TypeQuestionComponent from './TypeQuestionComponent'
import SelectAnswerTypeComponent from './SelectAnswerTypeComponent'
// import MatchColumnComponent from './MatchColumnComponent'

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import AddIcon from '@mui/icons-material/Add'

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(90deg)',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}))


const Questions = () => {    
    const [expanded, setExpanded] = useState(false)

    const handleExpandClick = () => {
        setExpanded(!expanded)
    }

    return (
        <div>
            <Card elevation={0}>
            <CardActions>
                <Toolbar>
                <ExpandMore
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
                >
                    <KeyboardArrowRightIcon />
                </ExpandMore>
                <Typography variant='subtitle2' fontWeight='bold' color='primary'>Questions</Typography>
                </Toolbar>
            </CardActions>

            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent style={{paddingLeft:"50px"}}>
                    <TypeQuestionComponent />
                    <PaperDescription />
                    <Box ml={3}>
                        <Box mb={2}>
                            <Typography variant='subtitle2' color='primary'>Select answer type</Typography>
                            <Box m={1} />
                            <Select
                            value={1}
                            size='small'
                            displayEmpty
                            IconComponent={() => (
                                <KeyboardArrowDownIcon color='primary' />
                            )}
                            inputProps={{ 'aria-label': 'Without label' }}
                            >
                                <MenuItem value={1}>
                                    <Typography variant='subtitle2'>Select answer type</Typography>
                                </MenuItem>
                                <MenuItem value={2}>Default</MenuItem>
                            </Select>
                        </Box>
                        <SelectAnswerTypeComponent />
                        {/* <MatchColumnComponent /> */}
                        <OutLinedButton>
                            <AddIcon style={{marginRight: '3px'}} />
                            <Typography variant='subtitle2'>Add new</Typography> 
                        </OutLinedButton>
                    </Box>
                    <Box m={2} />
                    <FilledButton>
                        <AddIcon style={{marginRight: '3px'}} />
                        <Typography variant='subtitle2'>Add new question</Typography> 
                    </FilledButton>
                </CardContent>
            </Collapse>

            </Card>
        </div>
    )
}

export default Questions
