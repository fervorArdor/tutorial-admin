import React from 'react'
import Main from '../Main'

function createData(date, topic, exam, batch, completion_date) {
    return { date, topic, exam, batch, completion_date };
}

const scheduled_test = [
    createData('12/06/2021', 'Permutation & Combination, Probability, Complex Number', 'IITJEE', 'Class- X Session- 2020-21', '15/06/2021'),
    createData('13/06/2021', 'Permutation & Combination, Probability, Complex Number', 'IITJEE', 'Class- X Session- 2020-21', '15/06/2021'),
    createData('14/06/2021', 'Permutation & Combination, Probability, Complex Number', 'IITJEE', 'Class- X Session- 2020-21', '15/06/2021'),
    createData('15/06/2021', 'Permutation & Combination, Probability, Complex Number', 'IITJEE', 'Class- X Session- 2020-21', '15/06/2021'),
    createData('16/06/2021', 'Permutation & Combination, Probability, Complex Number', 'IITJEE', 'Class- X Session- 2020-21', '15/06/2021'),
];

const ScheduledTestMain = () => {
    return (
        <div>
            <Main rows={scheduled_test} pageName='scheduled_test' />
        </div>
    )
}

export default ScheduledTestMain
