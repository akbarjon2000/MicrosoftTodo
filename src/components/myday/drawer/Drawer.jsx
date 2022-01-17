import React, { useContext, useDebugValue, useEffect, useState } from 'react'
import { AddMyDay, AddStep, Container, Steps, Remind, DueDate, Repeat, Category, AddFile, Editor } from './style'
import axios from '../../../utils/axios'
import { DrawerContext } from '../../../context/DrawerContext'
//ICONS:
import { TiTick } from "react-icons/ti"
import { BiStar } from "react-icons/bi"
import { BsSun, BsArrowRepeat } from "react-icons/bs"
import { IoMdClose, IoIosAttach } from "react-icons/io"
import { IoCalendarOutline, IoPricetagOutline, } from "react-icons/io5"
import { Colors } from '../../../constants/constants'
import { VscBell } from "react-icons/vsc"


const Drawer = () => {
    const [active, setActive] = useState(false)
    const [myday, setMyDay] = useState(false)
    const [task, setTask] = useState(null);
    const [text, setText] = useState("Hello world")
    const [drawerIsActive, setDrawerIsActive] = useContext(DrawerContext);
    // console.log(text)
    // const fetchTask = async () => {
    //     try {
    //         const { data } = await axios.get("/todos");
    //         console.log("Data from Drawer", data.data);
    //         const tasks = await data.data.filter((value) => value.id === drawerIsActive.id).map((value) => value.attributes);
    //         setTask(tasks);


    //     } catch (error) {
    //         console.log(error)
    //     }
    // }
    const updateTitle = async () => {
        try {
            const { data } = await axios.put(`/todos/${drawerIsActive.id}`, { data: { text: text } })
        } catch (error) {
            console.log(error)
        }
    }

    // useEffect(() => {
    //     fetchTask();
    //     updateTitle();
    // }, [drawerIsActive])

    useEffect(() => {
        updateTitle();
    }, [text])

    const handleInputChange = ({ target }) => {
        setText(target.value)
    }
    return (
        <Container drawerIsActive={drawerIsActive.open}>
            <AddStep>
                <div className='align__center' style={{ height: "100%", justifyContent: "space-between" }}>
                    <div className='circle center'><TiTick color='#6e8eeb' /></div>
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

        </Container >
    )
}

export default Drawer
