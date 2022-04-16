import React, { useState, useEffect, useContext } from 'react'
import Navbar from './nav';
import { Container } from './style';
import axios from '../../utils/axios';
import Drawer from './drawer/Drawer';
import { UserIdContext } from "../../context/UserIdContext";
import { getFirestore, collection, Firestore, onSnapshot, getDocs, query, where } from "firebase/firestore"
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyDJxs-B5MkfTvuYU1m94b28ibevrMA57DE",
    authDomain: "todo-1416b.firebaseapp.com",
    projectId: "todo-1416b",
    storageBucket: "todo-1416b.appspot.com",
    messagingSenderId: "207546512803",
    appId: "1:207546512803:web:ecf6d52fff5895d3551616"
};
const Important = () => {
    const [todos, setTodos] = useState([]);
    const user = useContext(UserIdContext);
    const db = getFirestore();
    const colRef = collection(db, "todo")
    const q = query(colRef, where("is_important", "==", "true"));
    // onSnapshot(q, (snapshot) => {
    //     let todo = [];
    //     snapshot.docs.forEach((doc) => {
    //         todo.push({ ...doc.data(), id: doc.id })
    //         setTodos(todo);

    //     })
    // })
    const fetchTodo = async () => {

        getDocs(q)
            .then((snapshot) => {
                let todo = [];
                snapshot.docs.forEach((doc) => [
                    todo.push({ ...doc.data(), id: doc.id })
                ])
                setTodos(todo);
                console.log(todo);
            })
            .catch((er) => {
                console.log(er)
            })

        // const { data } = await axios.get(`/todos/?filters[user][$eq]=${user}`);
        // const { data: todo } = data;

    }
    useEffect(() => {
        fetchTodo();
    }, [])
    return (
        <Container>

            <div style={{ width: "100%", display: "flex", flexDirection: "column", overflow: "scroll" }}>
                <Navbar todos={todos} fetchTodo={fetchTodo} />
                <div className='underlines'></div>
            </div>
            <Drawer todos={todos} fetchTodo={fetchTodo} />
        </Container>
    )
}

export default Important;
