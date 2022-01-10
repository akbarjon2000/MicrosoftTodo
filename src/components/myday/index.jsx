import React from 'react'
import Navbar from './nav';
import { Container } from './style';
import Tasks from './Tasks';


const MyDay = () => {
    return (
        <Container>

            <Navbar />
            <Tasks />
            {/* <div className='underlines'></div> */}
        </Container>
    )
}

export default MyDay;
