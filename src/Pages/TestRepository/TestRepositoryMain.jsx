import React from 'react'
import Main from '../Main'

function createData(date, topic, exam, batch, questions) {
    return { date, topic, exam, batch, questions };
}

const test_repository = [
    createData('12/06/2021', 'Permutation & Combination, Probability, Complex Number', 'IITJEE', 'Class- X Session- 2020-21', '30 questions'),
    createData('13/06/2021', 'Permutation & Combination, Probability, Complex Number', 'IITJEE', 'Class- X Session- 2020-21', '30 questions'),
    createData('14/06/2021', 'Permutation & Combination, Probability, Complex Number', 'IITJEE', 'Class- X Session- 2020-21', '30 questions'),
    createData('15/06/2021', 'Permutation & Combination, Probability, Complex Number', 'IITJEE', 'Class- X Session- 2020-21', '30 questions'),
    createData('16/06/2021', 'Permutation & Combination, Probability, Complex Number', 'IITJEE', 'Class- X Session- 2020-21', '30 questions'),
];

const TestRepositoryMain = () => {
    return (
        <div>
            <Main rows={test_repository} pageName='test_repository' />
        </div>
    )
}

export default TestRepositoryMain