import React, { useState, useEffect } from 'react'
import { Container } from './TaskStyle'
//ICONS
import { AiOutlineCheckCircle } from "react-icons/ai"
import { BsCircle, BsDot } from "react-icons/bs"
import { IoStarOutline, IoStar } from "react-icons/io5"
import axios from '../../../utils/axios'




const Tasks = ({ value }) => {
    const [icon, setIcon] = useState(false)
    const { completed, important, id } = value;
    const [isImportant, setIsImportant] = useState(value.important);
    const [isCompleted, setIsCompleted] = useState(value.completed);

    useEffect(() => {
        if (isImportant !== important) {
            handleImportant();
        }
    }, [isImportant]);

    useEffect(() => {
        if (isCompleted !== completed) {
            handleCompleted();
        }
    }, [isCompleted]);

    const handleImportant = async () => {
        try {
            const { data } = await axios.put(`/todos/${id}`, { data: { important: isImportant } });
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }
    const handleCompleted = async () => {
        try {
            const { data } = await axios.put(`/todos/${id}`, { data: { completed: isCompleted } })
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <Container >

            <div className='align__center'>
                <div onMouseEnter={() => setIcon(true)} onMouseLeave={() => setIcon(false)} onClick={() => setIsCompleted(!isCompleted)} >
                    {(icon || isCompleted) ?
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
            <div onClick={() => setIsImportant(!isImportant)}>
                {
                    isImportant ? <IoStar className='icon' fill='#6e8eeb' color='#6e8eeb' />
                        : <IoStarOutline className='icon' fill='#6e8eeb' color='#6e8eeb' />
                }
            </div>
        </Container >


    )
}

export default Tasks
