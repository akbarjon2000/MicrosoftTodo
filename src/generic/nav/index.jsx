import React, { useContext, useState, useRef } from 'react'
import ReactToPrint from "react-to-print"
import { AddMenu, Container, ListOptionsModal, Modal1, Modal2, Modal3, UnderLine } from './style'
import { nanoid } from 'nanoid';
import { pxToRem } from '../../utils/pxToRem';
import { Colors } from '../../constants/constants';
import Tasks from '../Tasks';
import { addDoc } from "firebase/firestore"
import colRef from '../../constants/firebase';
//ICONS
import { BsThreeDots, BsCircle, BsArrowRepeat, BsCalendar2Date, BsPrinter } from "react-icons/bs";
import { IoMenuOutline, IoTodayOutline, IoCalendarOutline, IoCalendarClearOutline } from "react-icons/io5"
import { IoIosArrowForward } from "react-icons/io"
import { VscArrowSwap, VscBell, VscTrash } from "react-icons/vsc"
import { GoLightBulb } from "react-icons/go"
import { AiOutlinePlus } from "react-icons/ai"
import { ReactComponent as Daily } from "../../assets/icons/daily.svg"
import { ReactComponent as Weekdays } from "../../assets/icons/weekdays.svg"
import { ReactComponent as Weekly } from "../../assets/icons/weekly.svg"
import { ReactComponent as Monthly } from "../../assets/icons/monthly.svg"
import { ReactComponent as Yearly } from "../../assets/icons/yearly.svg"
import { ReactComponent as Clock } from "../../assets/icons/clockWithArrow.svg"
import { ReactComponent as CircleArrow } from "../../assets/icons/circleArrow.svg"
import { ReactComponent as CircleDoubleArrow } from "../../assets/icons/circleDoubleArrow.svg"

//CONTEXT
import { MenuContext } from '../../context/menubarContext';
import Loader from '../../components/Loader/Loader';
import { UserIdContext } from '../../context/UserIdContext';

const Navbar = ({ category, todos, fetchTodo }) => {
    // const app = initializeApp(firebaseConfig);
    const componentRef = useRef();
    const categoryPlaceholder = () => {
        if (category === "My Day" || category === "Tasks") {
            return "Add a task";
        } else if (category === "Important") {
            return "Add an important task"
        } else if (category === "Planned") {
            return "Add a task due today"
        }
    }
    const [loading, setLoading] = useState(false);
    const [todo, setTodo] = useState({
        category,
        title: "",
        content: "",
        is_completed: false,
        is_important: category == "Important" ? true : false,
        due_date: (category == "Planned" || category === "Tasks") ? "Today" : new Date().toISOString(),
        reminder: "",
        repeat: "",
        user: null,
        ownerID: 1
    })

    const [modals, setModals] = useState({
        listOptions: false,
        modal1: false,
        modal2: false,
        modal3: false
    })

    const [hide, setHide] = useContext(MenuContext);
    const user = useContext(UserIdContext);
    const [active, setActive] = useState(false);

    const handleChange = (e) => {
        setTodo(prevState => ({ ...prevState, title: e.target.value }));
    }

    const updateUser = { ...todo, user: user };
    const Add = async () => {
        if (todo.title !== "") {
            console.log(updateUser)
            try {
                setLoading(true)
                addDoc(colRef, updateUser)
                await fetchTodo();
                setLoading(false);
                setTodo(prevState => ({
                    ...prevState, title: "", due_date: "", reminder: "", repeat: ""
                }));
            } catch (error) {
                console.log(error);
            }
        }

    }

    return (
        <div style={{ display: "flex", width: "100%" }}>
            <div style={{ width: "100%" }}>

                <Container category={category} hide={hide} ref={componentRef}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>

                        <div className='header' style={{ display: "flex", justifyContent: "flex-start" }}>
                            <div >
                                <button className='menuIcon ' onClick={() => setHide(false)}>
                                    <IoMenuOutline size={20} className='icon' style={{ position: `${hide ? "relative" : ""}`, top: `${hide ? "-0.5rem" : ""}` }} />
                                </button>
                            </div>
                            <div>
                                <div className=' nav align__center' >
                                    <h3>{category}</h3>
                                    <div className='dotsCon center' title='list opntions' onClick={() => setModals({ modal1: false, modal2: false, modal3: false, listOptions: !modals.listOptions })}>
                                        <BsThreeDots className='icon' style={{ color: `${(category !== "My Day" && category !== "Tasks") ? Colors.blue : category == "Tasks" ? "#7A45BF" : Colors.textcolor} ` }} />
                                    </div>
                                    <ListOptionsModal listOptions={modals.listOptions} className='modal' onClick={() => setModals({ listOptions: false })} >
                                        <p className='center title'>List options</p>
                                        <ReactToPrint
                                            trigger={() => <div className='align__center printList '><BsPrinter className='icon' /> <p style={{ marginLeft: "10px" }}>Print list</p></div>}
                                            content={() => componentRef.current}
                                            className='align__center ' onClick={() =>
                                                setTodo(previewState => ({ ...previewState, date: "Today" }))}
                                            style={{ color: `${Colors.greyTextColor}` }} >
                                            <div className='align__center'><BsPrinter className='icon' /> <p style={{ marginLeft: "10px" }}>Print list</p></div>
                                        </ReactToPrint>
                                    </ListOptionsModal>
                                </div>
                                {category == "My Day" ?
                                    <p>{(new Date()).toDateString().slice(0, -5)}</p>
                                    : null}
                            </div>
                        </div>
                        {category == "My Day" ?
                            <div style={{ display: "flex" }} className='align__center' title='Sort'>
                                <span className='arrows center'><VscArrowSwap style={{ transform: "rotate(90deg)" }} className='icon' /><p className='navText'>Sort</p> </span>
                                <span className='suggestions center'><GoLightBulb className='icon' /><p className='navText'>Suggestions</p> </span>
                            </div>
                            : null
                        }
                    </div>
                    <AddMenu category={category} active={active} >
                        <div className='align__center' onClick={() => setActive(true)}>
                            {active ?
                                <BsCircle className='icon' ></BsCircle>
                                : <AiOutlinePlus className='icon' style={{ cursor: "pointer", color: `${(category !== "My Day" && category !== "Tasks") ? Colors.blue : category == "Tasks" ? "#7A45BF" : Colors.textcolor} ` }} />
                            }
                            <input type="text" placeholder={categoryPlaceholder()} className='input' value={todo.title} onChange={(e) => handleChange(e)} />
                        </div>
                        {active &&
                            <div className='align__center alarm'>
                                <div className="align__center">
                                    <button className={`${todo.due_date ? "modalSelector" : "modalIcon"}`}>
                                        <IoCalendarOutline onClick={() => setModals({ modal1: !modals.modal1, modal2: false, modal3: false, listOptions: false })} className='icon' style={{}} />
                                        <p style={{ color: `${Colors.greyTextColor}` }}>{todo.due_date && todo.due_date}</p>
                                    </button>
                                    <Modal1 modal1={modals.modal1} className='modal' onClick={() => setModals({ modal1: false })} >
                                        <p className='center title'>Due</p>
                                        <div className='align__center dateInfo' onClick={() => setTodo(previewState => ({ ...previewState, due_date: "Today" }))} style={{ color: `${Colors.greyTextColor}` }} >
                                            <div className='align__center'><IoTodayOutline className='icon' /> <p style={{ marginLeft: "10px" }}>Today</p></div>
                                            <span >{(new Date()).toDateString().slice(0, 3)}</span>
                                        </div>
                                        <div className='align__center dateInfo' onClick={() => setTodo(previewState => ({ ...previewState, due_date: "Tomorrow" }))} style={{ color: `${Colors.greyTextColor}` }} >
                                            <div className='align__center'><IoCalendarClearOutline className='icon' /> <p style={{ marginLeft: "10px" }}>Tomorrow</p></div>
                                            <span >{(new Date()).toDateString().slice(0, 3)}</span>
                                        </div>
                                        <div className='align__center dateInfo' onClick={() => setTodo(previewState => ({ ...previewState, due_date: "Next week" }))} style={{ color: `${Colors.greyTextColor}`, borderBottom: "1px solid rgba(200, 200, 200)" }} >
                                            <div className='align__center'><IoTodayOutline className='icon' /> <p style={{ marginLeft: "10px" }}>Next week</p></div>
                                            <span >{(new Date()).toDateString().slice(0, 3)}</span>
                                        </div>
                                        <div className='align__center dateInfo' style={{ color: `${Colors.greyTextColor}`, height: `${pxToRem(50)}` }} >
                                            <div className='align__center'><BsCalendar2Date className='icon' /> <p style={{ marginLeft: "10px" }}>Pick a date</p></div>
                                            <span ><IoIosArrowForward /></span>
                                        </div>
                                        {todo.due_date &&
                                            <div className='align__center removeDate' onClick={() => setTodo(previewState => ({ ...previewState, due_date: "" }))}>
                                                <VscTrash className='icon' color='red' />
                                                <p style={{ color: "red", marginLeft: "10px" }}>Remove due date</p>
                                            </div>
                                        }
                                    </Modal1>
                                    <button className={`${todo.reminder ? "modalSelector" : "modalIcon"}`}>
                                        <VscBell className='icon' style={{}} onClick={() => setModals({ modal1: false, modal2: !modals.modal2, modal3: false, listOptions: false })} />
                                        <p style={{ color: `${Colors.greyTextColor}` }}>{todo.reminder && todo.reminder}</p>
                                    </button>
                                    <Modal2 modal2={modals.modal2} className='modal' onClick={() => setModals({ modal2: false })} >
                                        <p className='center title'>Reminder</p>
                                        <div className='align__center dateInfo' onClick={() => setTodo(previewState => ({ ...previewState, reminder: "Later today" }))} style={{ color: `${Colors.greyTextColor}` }} >
                                            <div className='align__center'><Clock style={{ fill: "#7e7e80" }} className='icon' /> <p style={{ marginLeft: "10px" }}>Later today</p></div>
                                            <span >{(new Date()).toDateString().slice(0, 3)}</span>
                                        </div>
                                        <div className='align__center dateInfo' onClick={() => setTodo(previewState => ({ ...previewState, reminder: "Tomorrow" }))} style={{ color: `${Colors.greyTextColor}` }} >
                                            <div className='align__center'><CircleArrow style={{ fill: "#7e7e80" }} size={21} className='icon' /> <p style={{ marginLeft: "10px" }}>Tomorrow</p></div>
                                            <span >{(new Date()).toDateString().slice(0, 3)}</span>
                                        </div>
                                        <div className='align__center dateInfo' onClick={() => setTodo(previewState => ({ ...previewState, reminder: "Next week" }))} style={{ color: `${Colors.greyTextColor}`, borderBottom: "1px solid rgba(200, 200, 200)" }} >
                                            <div className='align__center'><CircleDoubleArrow style={{ fill: "#7e7e80" }} className='icon' size={12} /> <p style={{ marginLeft: "10px" }}>Next week</p></div>
                                            <span >{(new Date()).toDateString().slice(0, 3)}</span>
                                        </div>
                                        <div className='align__center dateInfo' style={{ color: `${Colors.greyTextColor}`, height: `${pxToRem(50)}` }} >
                                            <div className='align__center'><BsCalendar2Date className='icon' /> <p style={{ marginLeft: "10px", fontSize: "14px" }}>Pick a date & time</p></div>
                                            <span ><IoIosArrowForward /></span>
                                        </div>
                                        {todo.reminder &&
                                            <div className='align__center removeDate' onClick={() => setTodo(previewState => ({ ...previewState, reminder: "" }))}>
                                                <VscTrash className='icon' color='red' />
                                                <p style={{ color: "red", marginLeft: "10px" }}>Remove reminder</p>
                                            </div>
                                        }
                                    </Modal2>
                                    <button className={`${todo.repeat ? "modalSelector" : "modalIcon"}`}>
                                        <BsArrowRepeat onClick={() => setModals({ modal1: false, modal2: false, modal3: !modals.modal3, listOptions: false })} className='icon' style={{}} />
                                        <p style={{ color: `${Colors.greyTextColor}` }}>{todo.repeat && todo.repeat}</p>
                                    </button>
                                    <Modal3 modal3={modals.modal3} className='modal' onClick={() => setModals({ modal3: false })} >
                                        <p className='center title'>Repeat</p>
                                        <div className='align__center dateInfo' onClick={() => setTodo(previewState => ({ ...previewState, repeat: "Daily" }))} style={{ color: `${Colors.greyTextColor}` }} >
                                            <div className='align__center'><Daily className='icon' style={{ fill: "#7e7e80" }} /> <p style={{ marginLeft: "10px" }}>Daily</p></div>
                                            <span >{(new Date()).toDateString().slice(0, 3)}</span>
                                        </div>
                                        <div className='align__center dateInfo' onClick={() => setTodo(previewState => ({ ...previewState, repeat: "Weekdays" }))} style={{ color: `${Colors.greyTextColor}` }} >
                                            <div className='align__center'><Weekdays style={{ fill: "#7e7e80" }} className='icon' /> <p style={{ marginLeft: "10px" }}>Weekdays</p></div>
                                            <span >{(new Date()).toDateString().slice(0, 3)}</span>
                                        </div>
                                        <div className='align__center dateInfo' onClick={() => setTodo(previewState => ({ ...previewState, repeat: "Weekly" }))} style={{ color: `${Colors.greyTextColor}` }} >
                                            <div className='align__center'><Weekly style={{ fill: "#7e7e80" }} className='icon' /> <p style={{ marginLeft: "10px" }}>Weekly</p></div>
                                            <span >{(new Date()).toDateString().slice(0, 3)}</span>
                                        </div>
                                        <div className='align__center dateInfo' onClick={() => setTodo(previewState => ({ ...previewState, repeat: "Monthly" }))} style={{ color: `${Colors.greyTextColor}` }} >
                                            <div className='align__center'><Monthly style={{ fill: "#7e7e80" }} className='icon' /> <p style={{ marginLeft: "10px" }}>Monthly</p></div>
                                            <span >{(new Date()).toDateString().slice(0, 3)}</span>
                                        </div>
                                        <div className='align__center dateInfo' onClick={() => setTodo(previewState => ({ ...previewState, repeat: "Yearly" }))} style={{ color: `${Colors.greyTextColor}`, borderBottom: "1px solid rgba(200, 200, 200)" }} >
                                            <div className='align__center'><Yearly style={{ fill: "#7e7e80" }} className='icon' /> <p style={{ marginLeft: "10px" }}>Yearly</p></div>
                                            <span >{(new Date()).toDateString().slice(0, 3)}</span>
                                        </div>
                                        <div className='align__center dateInfo' style={{ color: `${Colors.greyTextColor}`, height: `${pxToRem(50)}` }} >
                                            <div className='align__center'><BsCalendar2Date className='icon' /> <p style={{ marginLeft: "10px" }}>Custom</p></div>
                                            <span ><IoIosArrowForward /></span>
                                        </div>
                                        {todo.repeat &&
                                            <div className='align__center removeDate' onClick={() => setTodo(previewState => ({ ...previewState, repeat: "" }))}>
                                                <VscTrash className='icon' color='red' />
                                                <p style={{ color: "red", marginLeft: "10px" }}>Never repeat</p>
                                            </div>
                                        }
                                    </Modal3>
                                </div>
                                <p className='add' onClick={Add}>Add</p>
                            </div>
                        }
                    </AddMenu>
                </Container >
                {loading ? <Loader />
                    : todos.map(({ id, title, content, is_completed, is_important, due_date, reminder, repeat, user, ownerID }) => (
                        <Tasks category={category} value={{ id, title, content, is_completed, is_important, due_date, reminder, repeat, user, ownerID }} key={nanoid(4)} fetchTodo={fetchTodo} />
                    ))}
                <UnderLine />
            </div>
        </div >
    )
}

export default Navbar
