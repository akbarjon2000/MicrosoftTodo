import React, { useState, useContext } from 'react'
import { Container } from './TaskStyle'
import { nanoid } from "nanoid"
//ICONS
import { AiOutlineCheckCircle } from "react-icons/ai"
import { BsCircle } from "react-icons/bs"
import { IoStarOutline } from "react-icons/io5"
import { MyTaskContext } from '../../../context/tasksContext'

//CONTEXT


const Tasks = () => {
    const [icon, setIcon] = useState(false)
    const [marked, setMarked] = useState(false)
    const [data, setData] = useContext(MyTaskContext);
    // const taskObj = [
    //     {
    //         id: `${nanoid(3)}`,
    //         text: `${data.text}`,
    //         date: `${data.date}`,
    //         reminder: `${data.reminder}`,
    //         repeat: `${data.repeat}`,
    //         add: `${data.add}`

    //     }
    // ]
    const taskObj = [JSON.parse(localStorage.getItem("localData"))];

    return (
        <>
            {
                taskObj.map((value) => (
                    <Container marked={marked} key={nanoid(3)}>

                        <div className='align__center'>
                            <div onMouseEnter={() => setIcon(true)} onMouseLeave={() => setIcon(false)} onClick={() => setMarked(true)} >
                                {(icon || marked) ?
                                    <AiOutlineCheckCircle className='icon star' color="#6e8eeb" size={21} title='Mark as complete!' />
                                    : <BsCircle className='icon' color="#6e8eeb" size={18} />
                                }
                            </div>
                            <div>
                                <p style={{ marginLeft: "10px" }}>{value.text}</p>
                                <div>
                                    <p className='text align__center' style={{ marginLeft: "10px" }}>Tasks</p>

                                    {value.date && <p className='text align__center'><span>.</span> {value.date}</p>}

                                    {value.reminder && <p className='text align__center'><span>.</span> {value.reminder}</p>}

                                    {value.repeat && <p className='text align__center'><span>.</span> {value.repeat}</p>}
                                </div>
                            </div>
                        </div>
                        <IoStarOutline className='icon' fill='#6e8eeb' color='#6e8eeb' />

                    </Container>
                ))
            }

        </>
    )
}

export default Tasks
