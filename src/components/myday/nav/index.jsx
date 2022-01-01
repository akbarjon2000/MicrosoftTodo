import React from 'react'
import { Container } from './style'
import { ReactComponent as Dots } from "../../../assets/icons/three-dots.svg";

const Navbar = () => {
    return (
        <Container>
            <div className='header'>
                <div className='display__row'>
                    <p className='listTitle'>My Day</p>
                    <Dots className='icon' />
                </div>
            </div>
        </Container>
    )
}

export default Navbar
