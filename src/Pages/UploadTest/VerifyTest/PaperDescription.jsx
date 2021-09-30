import React from 'react'
import { Typography } from '@mui/material'
import useStyles from './styles'

const database = [
    {label: 'Level', text: 'Difficult'},
    {label: 'Topic', text: 'Lorem ipsum'},
    {label: 'Expected time', text: '120 Sec'},
    {label: 'Exam', text: 'IITJEE'},
]

const QuestionDescription = () => {
    const classes = useStyles()
    
    return (
        <div className={classes.flex} style={{background: '#F8FAFC', marginLeft: '40px', padding: '15px'}}>
            {database.map((data, index) => (
                <>
                <Typography variant='subtitle2'>{data.label}: </Typography>
                <Typography variant='subtitle2' fontWeight='bold'>{data.text}</Typography>
                </>
            ))}
        </div>
    )
}

export default QuestionDescription
