import React, { useState, useEffect, useContext } from 'react'
import { Container } from './style';
import axios from '../../utils/axios';
import Drawer from '../../generic/drawer/Drawer';
import Tasks from "../../generic/Tasks";
import { nanoid } from 'nanoid';
import { Colors } from '../../constants/constants';
import { pxToRem } from '../../utils/pxToRem';
import { IoMenuOutline } from "react-icons/io5"
import { SearchContext } from "../../context/SearchContext";
import { MenuContext } from '../../context/menubarContext';
import colRef from '../../constants/firebase';
import { getDocs } from 'firebase/firestore';
const SearchBar = () => {
    const [searchText, setSearchText] = useContext(SearchContext);
    const [hide, setHide] = useContext(MenuContext);
    const [todos, setTodos] = useState([]);
    // const fetchTodo = async () => {
    //     try {
    //         const { data } = await axios.get(`/todos?filters[text][$contains]=${searchText}`);
    //         const { data: todo } = data;
    //         setTodos(todo)
    //     } catch (error) {
    //         console.log(error)
    //     }

    // }

    const fetchTodo = async () => {
        getDocs(colRef)
            .then((snapshot) => {
                let todo = [];
                snapshot.docs.forEach((doc) => {
                    if (doc.data().user == localStorage.getItem("user") && doc.data().title.includes(searchText)) {
                        todo.push({ ...doc.data(), id: doc.id })
                    }
                })
                setTodos(todo);
            })
            .catch((er) => {
                console.log(er)
            })
    }
    useEffect(() => {
        fetchTodo();
    }, [searchText])
    return (
        <Container hide={hide}>
            <div style={{ width: "100%", height: "100vh" }}>
                <div style={{ display: "flex", margin: "25px" }}>
                    <button className='menuIcon ' onClick={() => setHide(false)}>
                        <IoMenuOutline size={20} className='icon' style={{ position: `${hide ? "relative" : ""}`, top: `${hide ? "-0.5rem" : ""}` }} />
                    </button>
                    <p classcName='searchHead' style={{ color: `${Colors.blue}`, fontSize: `${pxToRem(25)}` }}>Searching for "{searchText}"</p>
                </div>
                <div style={{ width: "100%", display: "flex", flexDirection: "column", overflow: "scroll", height: "100vh" }}>
                    {todos.map(({ id, title, content, is_completed, is_important, due_date, reminder, repeat, user, ownerID }) => (
                        <Tasks value={{ id, title, content, is_completed, is_important, due_date, reminder, repeat, user, ownerID }} key={nanoid(4)} fetchTodo={fetchTodo} />
                    ))}
                    <div className='underlines'></div>
                </div>
            </div>
            <Drawer todos={todos} fetchTodo={fetchTodo} />
        </Container>
    )
}

export default SearchBar;
