import React from 'react'
import Navbar from './nav';
import { Container } from './style';

const MyDay = () => {
    return (
        <Container>
            <div style={{ position: "relative" }}>

                <Navbar />
            </div>
            <div className='underlines'></div>
        </Container>
    )
}

export default MyDay;
