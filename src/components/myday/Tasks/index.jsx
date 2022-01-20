import React, { useState, useEffect, useContext } from 'react'
import { Container, RighClickMenu } from './TaskStyle'
//ICONS
import { AiFillCheckCircle, AiOutlinePlus } from "react-icons/ai"
import { BsCircle, BsDot, BsSun } from "react-icons/bs"
import { IoStarOutline, IoStar, IoCalendarOutline } from "react-icons/io5"
import { VscCopy, VscTrash } from "react-icons/vsc"
import axios from '../../../utils/axios'
import { DrawerContext } from '../../../context/DrawerContext'
import { ReactComponent as Due } from "../../../assets/icons/duedate.svg";
import { ReactComponent as DueTomorrow } from "../../../assets/icons/dueTomorrow.svg";
import { ReactComponent as Move } from "../../../assets/icons/movetask.svg";
const Tasks = ({ value }) => {
    const { completed, important, id } = value;
    const [icon, setIcon] = useState(false)
    const [taskIsActive, setTaskIsActive] = useState(false);
    const [isImportant, setIsImportant] = useState(important);
    const [isCompleted, setIsCompleted] = useState(completed);
    const [drawerIsActive, setDrawerIsActive] = useContext(DrawerContext);
    const [client, setClient] = useState({
        clientX: null,
        clientY: null
    })
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

    const handleDrawerUtility = (e) => {
        // e.stopPropogation();
        setDrawerIsActive(prevState => ({ ...prevState, id: id, open: true }));
        setTaskIsActive(true);
    }

    const handleComplete = (e) => {

        setIsCompleted(!isCompleted)
    }

    const handleMousePosition = (e) => {
        setClient({
            clientX: e.clientX,
            clientY: e.clientY
        })
    }
    const { clientX, clientY } = client;
    return (
        <Container taskIsActive={taskIsActive} onMouseMove={handleMousePosition}>
            <RighClickMenu clientX={clientX} clientY={clientY}>
                <p className='align__center section '><BsSun className='icon' color='#34373d' style={{ marginRight: "10px" }} /> Add to My Day</p>
                <p className='align__center section '><IoStarOutline className='icon' color='#34373d' style={{ marginRight: "10px" }} /> Mark as important</p>
                <p className='align__center section ' ><BsCircle className='icon' color='#34373d' style={{ marginRight: "10px" }} /> Mark as not completed</p>
                <div style={{ borderBottom: "1px solid rgba(0,0,0,0.08)", marginBottom: "6px" }}></div>
                <p className='align__center section '><Due className='icon' style={{ marginRight: "10px" }} /> Due today</p>
                <p className='align__center section '><DueTomorrow className='icon' style={{ marginRight: "10px" }} /> Due tomorrow</p>
                <p className='align__center section '><IoCalendarOutline className='icon' color='#34373d' style={{ marginRight: "10px" }} /> Remove due date</p>
                <div style={{ borderBottom: "1px solid rgba(0,0,0,0.08)", marginBottom: "6px" }}></div>
                <p className='align__center section '><AiOutlinePlus className='icon' color='#34373d' style={{ marginRight: "10px" }} /> Create new list from this task</p>
                <p className='align__center section '><Move className='icon' color='#34373d' style={{ marginRight: "10px" }} /> Move task to...</p>
                <p className='align__center section ' ><VscCopy className='icon' color='#34373d' style={{ marginRight: "10px" }} /> Copy task to...</p>
                <div style={{ borderBottom: "1px solid rgba(0,0,0,0.08)", marginBottom: "6px" }}></div>
                <p className='align__center section ' ><VscTrash className='icon' color='#34373d' style={{ marginRight: "10px" }} />Delete task</p>
            </RighClickMenu>

            <div className='align__center' style={{ width: "100%" }}>
                <div
                    // onMouseEnter={() => setIcon(true)}
                    // onMouseLeave={() => setIcon(false)}
                    onClick={handleComplete}
                >
                    {(icon || isCompleted) ?
                        <AiFillCheckCircle className='icon ' color="#6e8eeb" size={21} title='Mark as complete!' />
                        : <BsCircle className='icon center' color="#6e8eeb" size={18} />
                    }
                </div>
                <div onClick={handleDrawerUtility} style={{ width: "100%" }}>
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
