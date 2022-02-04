import React, { useContext, useEffect, useState } from 'react'
import { AddMyDay, AddStep, Container, Steps, Remind, DueDate, Repeat, Category, AddFile, Editor, Close, Modal1, Modal2, Modal3 } from './DraweraStyle'
import axios from '../../../utils/axios'
import { DrawerContext } from '../../../context/DrawerContext'
import Swal from "sweetalert2";
import { pxToRem } from '../../../utils/pxToRem';
import { Colors } from '../../../constants/constants';
//ICONS:

import { BiStar, BiExit } from "react-icons/bi"
import { BsSun, BsArrowRepeat, BsCalendar2Date } from "react-icons/bs"
import { IoMdClose, IoIosAttach, IoIosArrowForward } from "react-icons/io"
import { IoCalendarOutline, IoPricetagOutline, IoStar, IoCalendarClearOutline, IoTodayOutline } from "react-icons/io5"
import { VscBell, VscTrash } from "react-icons/vsc"
import { AiFillCheckCircle } from "react-icons/ai"
import { BsCircle } from "react-icons/bs"
import { ReactComponent as Daily } from "../../../assets/icons/daily.svg"
import { ReactComponent as Weekdays } from "../../../assets/icons/weekdays.svg"
import { ReactComponent as Weekly } from "../../../assets/icons/weekly.svg"
import { ReactComponent as Monthly } from "../../../assets/icons/monthly.svg"
import { ReactComponent as Yearly } from "../../../assets/icons/yearly.svg"
import { ReactComponent as Clock } from "../../../assets/icons/clockWithArrow.svg"
import { ReactComponent as CircleArrow } from "../../../assets/icons/circleArrow.svg"
import { ReactComponent as CircleDoubleArrow } from "../../../assets/icons/circleDoubleArrow.svg"


const Drawer = ({ todos, fetchTodo }) => {
    const [active, setActive] = useState(false)
    const [drawerIsActive, setDrawerIsActive] = useContext(DrawerContext);
    const [closeDisplay, setCloseDisplay] = useState({
        close1: false,
        close2: false,
        close3: false,
        close4: false,
    })
    const [modals, setModals] = useState({
        listOptions: false,
        modal1: false,
        modal2: false,
        modal3: false
    })
    const [task, setTask] = useState({});
    const [important, setImportant] = useState(null);
    const [completed, setCompleted] = useState(task.completed);
    const [myday, setMyDay] = useState(true)

    useEffect(() => {
        fetchTodo();
        let todo = todos.filter((value) => value.id === drawerIsActive.id)
        todo.map((value) => {
            return setTask(value.attributes)
        })

    }, [drawerIsActive.id])

    const updateImportance = async () => {
        try {
            const { data } = await axios.put(`/todos/${drawerIsActive.id}`, { data: { important: important } });
            fetchTodo();
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

            fetchTodo();
        } catch (error) {
            console.log(error);
        }
    }


    useEffect(() => {
        updateCompleted();
    }, [completed]);

    const handleInputChange = ({ target }) => {
        setTask(prevState => ({ ...prevState, text: target.value }));
        const { data } = axios.put(`/todos/${drawerIsActive.id}`, { data: { text: target.value } })
        fetchTodo();
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
        fetchTodo();
    }, [myday])

    const handleCloseDisplay = (e) => {
        const { id } = e.target;
        setCloseDisplay(prevState => ({ ...prevState, [id]: true }));

    }

    const handleCloseDisappear = (e) => {
        const { id } = e.target;
        setCloseDisplay(prevState => ({ ...prevState, [id]: false }));
    }

    const handleDelete = async () => {
        try {
            Swal.fire({
                icon: "warning",
                title: `${task.text} will be permanently deleted.`,
                text: "you won't be able to undo this action.",
                showCancelButton: true
            }).then(async (value) => {
                if (value.isConfirmed) {
                    const { data } = await axios.delete(`/todos/${drawerIsActive.id}`);
                    setDrawerIsActive(prevState => ({ ...prevState, open: false }));
                    fetchTodo();
                }
            })
        } catch (error) {
            console.log(error);
        }
    }

    const handleCloseClick = async (key) => {
        try {
            const { data } = await axios.put(`/todos/${drawerIsActive.id}`, { data: { [key]: "" } });
            fetchTodo();
        } catch (error) {
            console.log(error);
        }
    }

    const handleUpdateDate = async (value) => {
        try {
            const { data } = await axios.put(`/todos/${drawerIsActive.id}`, { data: { date: value } });
            fetchTodo();
        } catch (error) {
            console.log(error)
        }
    }
    const handleUpdateReminder = async (value) => {
        try {
            const { data } = await axios.put(`/todos/${drawerIsActive.id}`, { data: { reminder: value } });
            fetchTodo();
        } catch (error) {
            console.log(error)
        }
    }

    const handleUpdateRepeat = async (value) => {
        try {
            const { data } = await axios.put(`/todos/${drawerIsActive.id}`, { data: { repeat: value } });
            fetchTodo();
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <Container drawerIsActive={drawerIsActive.open}>
            <AddStep>
                <div className='align__center' style={{ height: "100%", justifyContent: "space-between" }}>
                    {/* <div className='circle center'><TiTick color='#6e8eeb' /></div> */}
                    <div onClick={() => setCompleted(!completed)} style={{ cursor: "pointer" }}>
                        {task.completed ? <AiFillCheckCircle className='icon' color="#6e8eeb" size={21} /> : <BsCircle className='icon' color="#6e8eeb" size={19} />}
                    </div>
                    <input value={task.text} className="input" onChange={handleInputChange} />
                    <div onClick={() => setImportant(!important)} style={{ cursor: "pointer" }} >
                        {task.important ? <IoStar className='icon' color="#6e8eeb" /> : <BiStar className='icon' />}
                    </div>
                </div>
            </AddStep>
            <Steps active={active}>
                <div className='innerDiv'>
                    <div className='circle center'></div>
                    <input placeholder='Add step' className="input" onFocus={() => setActive(true)} onBlur={() => setActive(false)} />
                    <p className='add'>Add</p>
                </div>
            </Steps>
            <AddMyDay myDay={myday} onMouseEnter={handleCloseDisplay} onMouseLeave={handleCloseDisappear} id="close1">
                <div className='align__center' style={{ width: "100%" }}>
                    <BsSun className='icon' style={{ color: `${task.category === "My Day" ? Colors.blue : ""}` }} />
                    {/* <p style={{ marginLeft: "20px" }}>{task.category === "My Day" ? "Added to My Day" : "Add to My Day"}</p> */}
                    <div>{task.category === "My Day" ?
                        <div >
                            <p style={{ color: `${Colors.blue}`, marginLeft: `${pxToRem(15)}` }} className='align__center'>Added to {task.category}</p>
                        </div>
                        : <p style={{ marginLeft: `${pxToRem(15)}` }}>Add to My Day</p>
                    }</div>
                </div>
                <IoMdClose style={{ display: `${(task.category && closeDisplay.close1) ? "" : "none"}`, cursor: "pointer" }} className='icon' onClick={() => setMyDay(false)} />
            </AddMyDay>
            <div style={{ border: "1px solid rgb(230, 230, 230)", width: "95%" }}>
                <Remind onClick={() => setModals({ modal1: false, modal2: !modals.modal2, modal3: false, listOptions: false })} style={{ justifyContent: "space-between" }} onMouseEnter={handleCloseDisplay} onMouseLeave={handleCloseDisappear} id="close2">
                    <div className="align__center" >
                        <span className='iconContainer center'> <VscBell className='icon' style={{ color: task.reminder && `${Colors.blue}` }} /></span>
                        <div style={{ display: "flex", flexDirection: "column", }} className='text'>
                            <div>{task.reminder ?
                                <div>
                                    <p style={{ color: `${Colors.blue}` }} className='align__center'>Remind me <br /> {task.reminder}</p>

                                </div>

                                : <p>Remind me</p>
                            }</div>
                            {/* <p>Fri, February 11</p> */}
                        </div>
                    </div>
                    <IoMdClose onClick={() => handleCloseClick("reminder")} style={{ display: `${(task.reminder && closeDisplay.close2) ? "" : "none"}`, cursor: "pointer" }} className='close' />
                </Remind>
                <Modal2 modal2={modals.modal2} className='modal' onClick={() => setModals({ modal2: false })} >
                    <p className='center title'>Reminder</p>
                    <div className='align__center dateInfo' onClick={() => handleUpdateReminder("Later today")} style={{ color: `${Colors.greyTextColor}` }} >
                        <div className='align__center'><Clock style={{ fill: "#7e7e80" }} className='icon' /> <p style={{ marginLeft: "10px" }}>Later today</p></div>
                        <span >{(new Date()).toDateString().slice(0, 3)}</span>
                    </div>
                    <div className='align__center dateInfo' onClick={() => handleUpdateReminder("Tomorrow")} style={{ color: `${Colors.greyTextColor}` }} >
                        <div className='align__center'><CircleArrow style={{ fill: "#7e7e80" }} size={21} className='icon' /> <p style={{ marginLeft: "10px" }}>Tomorrow</p></div>
                        <span >{(new Date()).toDateString().slice(0, 3)}</span>
                    </div>
                    <div className='align__center dateInfo' onClick={() => handleUpdateReminder("Next week")} style={{ color: `${Colors.greyTextColor}`, borderBottom: "1px solid rgba(200, 200, 200)" }} >
                        <div className='align__center'><CircleDoubleArrow style={{ fill: "#7e7e80" }} className='icon' size={12} /> <p style={{ marginLeft: "10px" }}>Next week</p></div>
                        <span >{(new Date()).toDateString().slice(0, 3)}</span>
                    </div>
                    <div className='align__center dateInfo' style={{ color: `${Colors.greyTextColor}`, height: `${pxToRem(50)}` }} >
                        <div className='align__center'><BsCalendar2Date className='icon' /> <p style={{ marginLeft: "10px", fontSize: "14px" }}>Pick a date & time</p></div>
                        <span ><IoIosArrowForward /></span>
                    </div>
                    {task.reminder &&
                        <div className='align__center removeDate' onClick={() => handleUpdateReminder("")} >
                            <VscTrash className='icon' color='red' />
                            <p style={{ color: "red", marginLeft: "10px" }}>Remove reminder</p>
                        </div>
                    }
                </Modal2>
                <DueDate onClick={() => setModals({ modal1: !modals.modal1, modal2: false, modal3: false, listOptions: false })} style={{ justifyContent: "space-between" }} onMouseEnter={handleCloseDisplay} onMouseLeave={handleCloseDisappear} id="close3">
                    <div className="align__center" >
                        <span className='iconContainer center'> <IoCalendarOutline className='icon' style={{ color: task.date && `${Colors.blue}` }} /></span>
                        <div style={{ display: "flex", flexDirection: "column", }} className='text'>
                            <div>{task.date ?
                                <div>
                                    <p style={{ color: `${Colors.blue}` }} className='align__center'>{task.date}</p>

                                </div>

                                : <p>Add a due date</p>
                            }</div>
                        </div>
                    </div>
                    <IoMdClose onClick={() => handleCloseClick("date")} className='close' style={{ display: `${(task.date && closeDisplay.close3) ? "" : "none"}`, cursor: "pointer" }} />
                </DueDate>
                <Modal1 modal1={modals.modal1} className='modal' onClick={() => setModals({ modal1: false })} >
                    <p className='center title'>Due</p>
                    <div className='align__center dateInfo' onClick={() => handleUpdateDate("Today")} style={{ color: `${Colors.greyTextColor}` }} >
                        <div className='align__center'><IoTodayOutline className='icon' /> <p style={{ marginLeft: "10px" }}>Today</p></div>
                        <span >{(new Date()).toDateString().slice(0, 3)}</span>
                    </div>
                    <div className='align__center dateInfo' onClick={() => handleUpdateDate("Tomorrow")} style={{ color: `${Colors.greyTextColor}` }} >
                        <div className='align__center'><IoCalendarClearOutline className='icon' /> <p style={{ marginLeft: "10px" }}>Tomorrow</p></div>
                        <span >{(new Date()).toDateString().slice(0, 3)}</span>
                    </div>
                    <div className='align__center dateInfo' onClick={() => handleUpdateDate("Next week")} style={{ color: `${Colors.greyTextColor}`, borderBottom: "1px solid rgba(200, 200, 200)" }} >
                        <div className='align__center'><IoTodayOutline className='icon' /> <p style={{ marginLeft: "10px" }}>Next week</p></div>
                        <span >{(new Date()).toDateString().slice(0, 3)}</span>
                    </div>
                    <div className='align__center dateInfo' style={{ color: `${Colors.greyTextColor}`, height: `${pxToRem(50)}` }} >
                        <div className='align__center'><BsCalendar2Date className='icon' /> <p style={{ marginLeft: "10px" }}>Pick a date</p></div>
                        <span ><IoIosArrowForward /></span>
                    </div>
                    {task.date &&
                        <div className='align__center removeDate' onClick={() => handleUpdateDate("")}>
                            <VscTrash className='icon' color='red' />
                            <p style={{ color: "red", marginLeft: "10px" }}>Remove due date</p>
                        </div>
                    }
                </Modal1>
                <Repeat onClick={() => setModals({ modal1: false, modal2: false, modal3: !modals.modal3, listOptions: false })} style={{ justifyContent: "space-between" }} onMouseOver={handleCloseDisplay} onMouseOut={handleCloseDisappear} id="close4">
                    <div className="align__center" >
                        <span className='iconContainer center'> <BsArrowRepeat className='icon' style={{ color: task.date && `${Colors.blue}` }} /></span>

                        <div style={{ display: "flex", flexDirection: "column", }} className='text'>
                            <div>{task.repeat ?
                                <div>
                                    <p style={{ color: `${Colors.blue}` }} className='align__center'>{task.repeat}</p>
                                </div>
                                : <p>Repeat</p>
                            }</div>
                        </div>
                    </div>
                    <IoMdClose onClick={() => handleCloseClick("repeat")} className='close' style={{ display: `${(task.repeat && closeDisplay.close4) ? "" : "none"}`, cursor: "pointer" }} />
                </Repeat>
                <Modal3 modal3={modals.modal3} className='modal' onClick={() => setModals({ modal3: false })} >
                    <p className='center title'>Repeat</p>
                    <div className='align__center dateInfo' onClick={() => handleUpdateRepeat("Daily")} style={{ color: `${Colors.greyTextColor}` }} >
                        <div className='align__center'><Daily className='icon' style={{ fill: "#7e7e80" }} /> <p style={{ marginLeft: "10px" }}>Daily</p></div>
                        <span >{(new Date()).toDateString().slice(0, 3)}</span>
                    </div>
                    <div className='align__center dateInfo' onClick={() => handleUpdateRepeat("Weekdays")} style={{ color: `${Colors.greyTextColor}` }} >
                        <div className='align__center'><Weekdays style={{ fill: "#7e7e80" }} className='icon' /> <p style={{ marginLeft: "10px" }}>Weekdays</p></div>
                        <span >{(new Date()).toDateString().slice(0, 3)}</span>
                    </div>
                    <div className='align__center dateInfo' onClick={() => handleUpdateRepeat("Weekly")} style={{ color: `${Colors.greyTextColor}` }} >
                        <div className='align__center'><Weekly style={{ fill: "#7e7e80" }} className='icon' /> <p style={{ marginLeft: "10px" }}>Weekly</p></div>
                        <span >{(new Date()).toDateString().slice(0, 3)}</span>
                    </div>
                    <div className='align__center dateInfo' onClick={() => handleUpdateRepeat("Monthly")} style={{ color: `${Colors.greyTextColor}` }} >
                        <div className='align__center'><Monthly style={{ fill: "#7e7e80" }} className='icon' /> <p style={{ marginLeft: "10px" }}>Monthly</p></div>
                        <span >{(new Date()).toDateString().slice(0, 3)}</span>
                    </div>
                    <div className='align__center dateInfo' onClick={() => handleUpdateRepeat("Yearly")} style={{ color: `${Colors.greyTextColor}`, borderBottom: "1px solid rgba(200, 200, 200)" }} >
                        <div className='align__center'><Yearly style={{ fill: "#7e7e80" }} className='icon' /> <p style={{ marginLeft: "10px" }}>Yearly</p></div>
                        <span >{(new Date()).toDateString().slice(0, 3)}</span>
                    </div>
                    <div className='align__center dateInfo' style={{ color: `${Colors.greyTextColor}`, height: `${pxToRem(50)}` }} >
                        <div className='align__center'><BsCalendar2Date className='icon' /> <p style={{ marginLeft: "10px" }}>Custom</p></div>
                        <span ><IoIosArrowForward /></span>
                    </div>
                    {task.repeat &&
                        <div className='align__center removeDate' onClick={() => handleUpdateRepeat("")}>
                            <VscTrash className='icon' color='red' />
                            <p style={{ color: "red", marginLeft: "10px" }}>Never repeat</p>
                        </div>
                    }
                </Modal3>
            </div >

            <Category style={{ justifyContent: "space-between" }}>
                <div className="align__center" >
                    <span className='iconContainer center'> <IoPricetagOutline className='icon' /></span>
                    <div style={{ display: "flex", flexDirection: "column", }} className='text'>
                        <input type="text" placeholder="Pick a category" list="categoryList" className='categoryInput' />
                        <datalist id='categoryList' className='dataList'>
                            <option>Yellov category</option>
                            <option>Red category</option>
                            <option>Green category</option>
                            <option>Orange category</option>
                            <option>Purple category</option>
                        </datalist>
                        {/* <p>Fri, February 11</p> */}
                    </div>
                </div>
            </Category>
            <AddFile style={{ justifyContent: "space-between" }}>
                <div className="align__center" style={{ width: "100%" }} >
                    <span className='iconContainer center'> <IoIosAttach className='icon' /></span>
                    <div style={{ display: "flex", flexDirection: "column", width: "100%" }} className='text'>
                        <label htmlFor='file' style={{ width: "100%" }}>Add a file</label>
                        <input type="file" id='file' name='file' style={{ display: "none" }} />
                    </div>
                </div>
            </AddFile>
            <Editor>
                <input type="text" placeholder="Add note" className='textArea' />
            </Editor>
            <Close>
                <div className='close center' >
                    <BiExit className='icon' onClick={() => setDrawerIsActive({ open: false })} />
                </div>
                <p className='text'>Created Today   </p>
                <div className='delete center' onClick={handleDelete} >
                    <VscTrash className=' icon' />
                </div>

            </Close>
        </Container >
    )
}

export default Drawer
