import React, { useState } from 'react'
import { Container } from './TaskStyle'
import { nanoid } from "nanoid"
//ICONS
import { AiOutlineCheckCircle } from "react-icons/ai"
import { BsCircle, BsDot } from "react-icons/bs"
import { IoStarOutline } from "react-icons/io5"



const Tasks = ({ value }) => {
    const [icon, setIcon] = useState(false)
    const [marked, setMarked] = useState(false)


    return (


        <Container marked={marked}>

            <div className='align__center'>
                <div onMouseEnter={() => setIcon(true)} onMouseLeave={() => setIcon(false)} onClick={() => setMarked(true)} >
                    {(icon || marked) ?
                        <AiOutlineCheckCircle className='icon star' color="#6e8eeb" size={21} title='Mark as complete!' />
                        : <BsCircle className='icon center' color="#6e8eeb" size={18} />
                    }
                </div>
                <div>
                    <p style={{ marginLeft: "10px" }}>{value.text}</p>
                    <div className='align__center'>
                        <p className='text align__center' style={{ marginLeft: "10px" }}>Tasks</p>

                        {value.date && <p className='text align__center'>
                            <BsDot className='align__center' /> {value.date}
                        </p>}

                        {value.reminder && <p className='text align__center'>
                            <BsDot className='align__center' /> {value.reminder}
                        </p>}
                        {value.repeat && <p className='text align__center'>
                            <BsDot className='align__center' /> {value.repeat}
                        </p>}
                    </div>
                </div>
            </div>
            <IoStarOutline className='icon' fill='#6e8eeb' color='#6e8eeb' />

        </Container >



    )
}

export default Tasks
