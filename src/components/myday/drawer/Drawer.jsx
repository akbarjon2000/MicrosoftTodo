import React, { useContext, useEffect, useState } from 'react'
import { AddMyDay, AddStep, Container, Steps, Remind, DueDate, Repeat, Category, AddFile, Editor, Close } from './DraweraStyle'
import axios from '../../../utils/axios'
import { DrawerContext } from '../../../context/DrawerContext'
//ICONS:

import { BiStar, BiExit } from "react-icons/bi"
import { BsSun, BsArrowRepeat } from "react-icons/bs"
import { IoMdClose, IoIosAttach } from "react-icons/io"
import { IoCalendarOutline, IoPricetagOutline, } from "react-icons/io5"
import { Colors } from '../../../constants/constants'
import { VscBell, VscTrash } from "react-icons/vsc"
import { AiFillCheckCircle } from "react-icons/ai"
import { BsCircle } from "react-icons/bs"


const Drawer = () => {
    const [active, setActive] = useState(false)
    const [myday, setMyDay] = useState(true)
    const [drawerIsActive, setDrawerIsActive] = useContext(DrawerContext);
    const [text, setText] = useState('')
    const [important, setImportant] = useState(null);
    const [completed, setCompleted] = useState(null);
    const [task, setTask] = useState({
        category: "My Day",
        text: "",
        content: "",
        steps: [],
        completed: false,
        important: false,
        date: "",

    });
    const fetchTask = async () => {
        try {
            const { data } = await axios.get("/todos");
            console.log("Data from Drawer", data.data);
            const tasks = await data.data.filter((value) => value.id === drawerIsActive.id).map((value) => value.attributes);
            console.log(tasks.map((value) => value.text))
            setText(tasks.map((value) => value.text));
            setImportant(tasks.map((value) => value.important));
            setCompleted(tasks.map((value) => value.completed));
            console.log(completed)
            // tasks.map((value) => {
            //     const { text, category, content, steps, completed, important, date } = value;
            //     setTask(prevState => ({
            //         ...prevState,
            //         text: text,
            //         category: category,
            //         content: content,
            //         steps: steps,
            //         completed: completed,
            //         important: important,
            //         date: date
            //     }))
            // })
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchTask();
        // updateTitle();
    }, [drawerIsActive])

    const updateTitle = async () => {
        try {
            const { data } = await axios.put(`/todos/${drawerIsActive.id}`, { data: { text: text } })
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        updateTitle();
    }, [text])

    const updateImportance = async () => {
        try {
            const { data } = await axios.put(`/todos/${drawerIsActive.id}`, { data: { important: important } });
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        updateImportance();
    }, [important]);

    const updateCompleted = async () => {
        try {
            const { data } = await axios.put(`/todos/${drawerIsActive.id}`, { data: { completed: completed } });
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        updateCompleted();
    }, [completed]);

    const handleInputChange = ({ target }) => {
        // setTask(prevState => ({ ...prevState, text: target.value }))
        setText(target.value)
    }
    const updateCategory = async () => {
        if (myday === true) {
            try {
                const { data } = await axios.put(`/todos/${drawerIsActive.id}`, { data: { category: "My Day" } });
            } catch (error) {
                console.log(error);
            }
        } else {
            try {
                const { data } = await axios.put(`/todos/${drawerIsActive.id}`, { data: { category: "Tasks" } });
            } catch (error) {
                console.log(error);
            }
        }

    }

    useEffect(() => {
        updateCategory();
    }, [myday])
    return (
        <Container drawerIsActive={drawerIsActive.open}>
            <AddStep>
                <div className='align__center' style={{ height: "100%", justifyContent: "space-between" }}>
                    {/* <div className='circle center'><TiTick color='#6e8eeb' /></div> */}
                    <div onClick={() => setCompleted(!completed)}>
                        {completed ? <AiFillCheckCircle className='icon' color="#6e8eeb" size={21} /> : <BsCircle className='icon' color="#6e8eeb" size={19} />}
                    </div>
                    <input value={text} className="input" onChange={handleInputChange} />
                    <BiStar className='icon' />
                </div>
            </AddStep>
            <Steps active={active}>
                <div className='innerDiv'>
                    <div className='circle center'></div>
                    <input placeholder='Add step' className="input" onFocus={() => setActive(true)} onBlur={() => setActive(false)} />
                    <p className='add'>Add</p>
                </div>
            </Steps>
            <AddMyDay myDay={myday}>
                <div className='align__center' onClick={() => setMyDay(true)} style={{ width: "100%" }}>
                    <BsSun className='icon' style={{ color: `${myday ? Colors.blue : ""}` }} />
                    <p style={{ marginLeft: "20px" }}>{myday ? "Added to My Day" : "Add to My Day"}</p>
                </div>
                <IoMdClose style={{ display: `${myday ? "" : "none"}` }} className='icon' onClick={() => setMyDay(false)} />
            </AddMyDay>
            <div style={{ border: "1px solid rgb(230, 230, 230)", width: "95%" }}>
                <Remind style={{ justifyContent: "space-between" }}>
                    <div className="align__center" >
                        <span className='iconContainer center'> <VscBell className='icon' /></span>
                        <div style={{ display: "flex", flexDirection: "column", }} className='text'>
                            <p>Remind me</p>
                            {/* <p>Fri, February 11</p> */}
                        </div>
                    </div>
                    <IoMdClose className='close' />
                </Remind>
                <DueDate style={{ justifyContent: "space-between" }}>
                    <div className="align__center" >
                        <span className='iconContainer center'> <IoCalendarOutline className='icon' /></span>
                        <div style={{ display: "flex", flexDirection: "column", }} className='text'>
                            <p>Add a due date</p>
                            {/* <p>Fri, February 11</p> */}
                        </div>
                    </div>
                    <IoMdClose className='close' />
                </DueDate>
                <Repeat style={{ justifyContent: "space-between" }}>
                    <div className="align__center" >
                        <span className='iconContainer center'> <BsArrowRepeat className='icon' /></span>
                        <div style={{ display: "flex", flexDirection: "column", }} className='text'>
                            <p>Repeat</p>
                            {/* <p>Fri, February 11</p> */}
                        </div>
                    </div>
                    <IoMdClose className='close' />
                </Repeat>

            </div>

            <Category style={{ justifyContent: "space-between" }}>
                <div className="align__center" >
                    <span className='iconContainer center'> <IoPricetagOutline className='icon' /></span>
                    <div style={{ display: "flex", flexDirection: "column", }} className='text'>
                        <p>Pick a category</p>
                        {/* <p>Fri, February 11</p> */}
                    </div>
                </div>
                <IoMdClose className='close' />
            </Category>
            <AddFile style={{ justifyContent: "space-between" }}>
                <div className="align__center" style={{ width: "100%" }} >
                    <span className='iconContainer center'> <IoIosAttach className='icon' /></span>
                    <div style={{ display: "flex", flexDirection: "column", width: "100%" }} className='text'>
                        <label htmlFor='file' style={{ width: "100%" }}>Add a file</label>
                        <input type="file" id='file' name='file' style={{ display: "none" }} />
                    </div>
                </div>
                <IoMdClose className='close' />
            </AddFile>
            <Editor>
                <input type="text" placeholder="Add note" className='textArea' />
            </Editor>
            <Close>
                <div className='close center' >
                    <BiExit className='icon' onClick={() => setDrawerIsActive({ open: false })} />
                </div>
                <p className='text'>Created Today</p>
                <div className='delete center'>
                    <VscTrash className=' icon' />
                </div>

            </Close>
        </Container >
    )
}

export default Drawer
