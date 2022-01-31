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
import Swal from 'sweetalert2'

const Tasks = ({ value, fetchTodo }) => {
    const { completed, important, id } = value;
    const [icon, setIcon] = useState(false)
    const [taskIsActive, setTaskIsActive] = useState(false);
    const [isImportant, setIsImportant] = useState(important);
    const [isCompleted, setIsCompleted] = useState(completed);
    const [drawerIsActive, setDrawerIsActive] = useContext(DrawerContext);
    const [showContextMenu, setShowContextMenu] = useState(false);
    const [client, setClient] = useState({
        clientX: null,
        clientY: null,
        xTranslate: null,
        yTranslate: null,
        x: null,
        y: null
    })

    const handleImportant = async () => {
        try {
            const { data } = await axios.put(`/todos/${id}`, { data: { important: isImportant } });
            fetchTodo();
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
    useEffect(() => {
        if (isImportant !== important) {
            handleImportant();
            fetchTodo();
        }
    }, [isImportant]);

    useEffect(() => {

        handleCompleted();

    }, [isCompleted]);

    const handleDrawerUtility = (e) => {
        // e.stopPropogation();
        setDrawerIsActive(prevState => ({ ...prevState, id: id, open: true }));
        setTaskIsActive(true);
    }

    const handleComplete = (e) => {

        setIsCompleted(!isCompleted)
    }



    const handleContextMenu = (e) => {
        e.preventDefault();
        setClient(prevState => (
            {
                ...prevState,
                clientX: e.clientX,
                clientY: e.clientY,
                xTranslate: (e.clientX * 100) / window.innerWidth,
                yTranslate: window.innerHeight,
            })
        )

        if (client.clientX > window.innerWidth / 2) {
            setClient(prevState => ({ ...prevState, x: "-100%" }));
        }
        if (client.clientY > window.innerHeight / 2.5) {
            setClient(prevState => ({ ...prevState, y: "-50%" }));

        }
        setShowContextMenu(true);
        // console.log("clientX: ", e.clientX)
        // console.log("state clientX: ", client.clientX)
        // console.log("clientY: ", client.clientY)
        // console.log("innerWidth:", window.innerWidth)
        // console.log("innerHeight:", window.innerHeight)
        // console.log("x: ", client.x)
        // console.log("y: ", client.y)
    }

    const deleteTask = async () => {
        try {
            Swal.fire({
                icon: "warning",
                title: `${value.text} will be permanently deleted.`,
                text: "You won't be able to undo this action.",
                showCancelButton: true,
            }).then(async (data) => {
                if (data.isConfirmed) {
                    const { data } = await axios.delete(`/todos/${id}`);
                    fetchTodo();
                }
            }
            )
        } catch (error) {
            console.log(error);
        }
    }

    const { clientX, clientY, xTranslate, yTranslate, x, y } = client;


    return (
        <Container taskIsActive={taskIsActive} onContextMenu={handleContextMenu}  >
            <RighClickMenu clientX={clientX} clientY={clientY} x={x} y={y} onMouseLeave={() => setShowContextMenu(false)} showContextMenu={showContextMenu} >
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
                <p onClick={deleteTask} className='align__center section ' style={{ color: "red" }}><VscTrash className='icon' color='red' style={{ marginRight: "10px" }} />Delete task</p>
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
