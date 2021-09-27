import { makeStyles } from '@mui/styles'

export default makeStyles({
    paper: {
        height: '159px',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        background: '#005688',
        color: 'white',
        boxShadow: '0px 6px 18px rgba(0, 0, 0, 0.06)'
    },
    flexColumn: {
        height: '135px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        boxShadow: '0px 6px 18px rgba(0, 0, 0, 0.06)'
    },
    caption: {
        fontSize: '13px',
        lineHeight: '19px',
    },
    caption1: {
        fontSize: '11px',
    },
    body1: {
        fontSize: '18px',
    },
    td: {
        borderBottom: '10px solid #F8FAFC',
    },
})