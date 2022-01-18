import React, { useState, useEffect, useContext } from 'react'
import { Container } from './TaskStyle'
//ICONS
import { AiOutlineCheckCircle, AiFillCheckCircle } from "react-icons/ai"
import { BsCircle, BsDot } from "react-icons/bs"
import { IoStarOutline, IoStar } from "react-icons/io5"
import axios from '../../../utils/axios'
import { DrawerContext } from '../../../context/DrawerContext'




const Tasks = ({ value }) => {
    const [icon, setIcon] = useState(false)
    const [taskIsActive, setTaskIsActive] = useState(false);
    const { completed, important, id } = value;
    const [isImportant, setIsImportant] = useState(value.important);
    const [isCompleted, setIsCompleted] = useState(value.completed);
    const [drawerIsActive, setDrawerIsActive] = useContext(DrawerContext);
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

    const handleDrawerUtility = () => {
        // e.stopPropogation();
        setDrawerIsActive(prevState => ({ ...prevState, id: id, open: true }));
        setTaskIsActive(true);
    }

    return (
        <Container onClick={handleDrawerUtility} taskIsActive={taskIsActive}>

            <div className='align__center'>
                <div
                    // onMouseEnter={() => setIcon(true)}
                    // onMouseLeave={() => setIcon(false)}
                    onClick={() => setIsCompleted(!isCompleted)}
                >
                    {(icon || isCompleted) ?
                        <AiFillCheckCircle className='icon ' color="#6e8eeb" size={21} title='Mark as complete!' />
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
