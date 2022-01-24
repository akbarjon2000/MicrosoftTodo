import React, { useContext, useEffect, useState } from 'react'
import { AddMyDay, AddStep, Container, Steps, Remind, DueDate, Repeat, Category, AddFile, Editor, Close } from './DraweraStyle'
import axios from '../../../utils/axios'
import { DrawerContext } from '../../../context/DrawerContext'
import Swal from "sweetalert2";
//ICONS:

import { BiStar, BiExit } from "react-icons/bi"
import { BsSun, BsArrowRepeat } from "react-icons/bs"
import { IoMdClose, IoIosAttach } from "react-icons/io"
import { IoCalendarOutline, IoPricetagOutline, IoStar } from "react-icons/io5"
import { Colors } from '../../../constants/constants'
import { VscBell, VscTrash } from "react-icons/vsc"
import { AiFillCheckCircle } from "react-icons/ai"
import { BsCircle } from "react-icons/bs"


const Drawer = ({ todos, fetchTodo }) => {
    const [active, setActive] = useState(false)
    const [drawerIsActive, setDrawerIsActive] = useContext(DrawerContext);
    const [closeDisplay, setCloseDisplay] = useState({
        close1: false,
        close2: false,
        close3: false,
        close4: false,
        close5: false,
        close6: false,


    })
    const [text, setText] = useState('')
    const [task, setTask] = useState({});
    // console.log(task.completed)
    const [important, setImportant] = useState(null);
    const [completed, setCompleted] = useState(task.completed);
    const [myday, setMyDay] = useState(true)

    useEffect(() => {
        fetchTodo();
        let todo = todos.filter((value) => value.id === drawerIsActive.id)
        todo.map((value) => {
            setTask(value.attributes)
        })

    }, [drawerIsActive.id])

    // console.log(drawerIsActive.id)
    // console.log(todos)
    // console.log(task)
    // const fetchTask = async () => {
    //     try {
    //         const { data } = await axios.get("/todos");
    //         // console.log("Data from Drawer", data.data);
    //         const tasks = await data.data.filter((value) => value.id === drawerIsActive.id).map((value) => value.attributes);
    //        tasks.map((value) => {setTask(value.attributes)})
    //         // setText(tasks.map((value) => value.text));
    //         // setImportant(tasks.map((value) => value.important));
    //         // setCompleted(tasks.map((value) => value.completed));
    //         // console.log(completed)
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

    // useEffect(() => {
    //     fetchTask();
    //     // updateTitle();
    // }, [drawerIsActive])

    // const updateTitle = async () => {
    //     try {
    //         const { data } = await axios.put(`/todos/${drawerIsActive.id}`, { data: { text: text } })
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

    // useEffect(() => {
    //     updateTitle();
    // }, [text])

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

    return (
        <Container drawerIsActive={drawerIsActive.open}>
            <AddStep>
                <div className='align__center' style={{ height: "100%", justifyContent: "space-between" }}>
                    {/* <div className='circle center'><TiTick color='#6e8eeb' /></div> */}
                    <div onClick={() => setCompleted(!completed)}>
                        {task.completed ? <AiFillCheckCircle className='icon' color="#6e8eeb" size={21} /> : <BsCircle className='icon' color="#6e8eeb" size={19} />}
                    </div>
                    <input value={task.text} className="input" onChange={handleInputChange} />
                    <div onClick={() => setImportant(!important)}>
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
                        <div>
                            <p style={{ color: `${Colors.blue}` }} className='align__center'>Added to<br /> {task.cetegory}</p>
                        </div>
                        : <p>Add to My Day</p>
                    }</div>
                </div>

                <IoMdClose style={{ display: `${(task.category && closeDisplay.close1) ? "" : "none"}`, cursor: "pointer" }} className='icon' onClick={() => setMyDay(false)} />
            </AddMyDay>
            <div style={{ border: "1px solid rgb(230, 230, 230)", width: "95%" }}>
                <Remind style={{ justifyContent: "space-between" }} onMouseEnter={handleCloseDisplay} onMouseLeave={handleCloseDisappear} id="close2">
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
                <DueDate style={{ justifyContent: "space-between" }} onMouseEnter={handleCloseDisplay} onMouseLeave={handleCloseDisappear} id="close3">
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
                <Repeat style={{ justifyContent: "space-between" }} onMouseOver={handleCloseDisplay} onMouseOut={handleCloseDisappear} id="close4">
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
                <p className='text'>Created Today</p>
                <div className='delete center' onClick={handleDelete} >
                    <VscTrash className=' icon' />
                </div>

            </Close>
        </Container >
    )
}

export default Drawer
