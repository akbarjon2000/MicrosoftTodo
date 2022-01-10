import React from 'react'
import { AddStep, Container } from './style'
import { TiTick } from "react-icons/ti"
const Drawer = () => {
    return (
        <Container>
            <AddStep>
                <div>
                    <div className='circle center'><TiTick color='#6e8eeb' /></div>
                </div>
            </AddStep>
        </Container>
    )
}

export default Drawer
