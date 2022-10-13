import React, { useState, useEffect, useContext } from 'react'
import Navbar from '../../generic/nav';
import { Container } from './style';
import Drawer from '../../generic/drawer/Drawer';
import { UserIdContext } from "../../context/UserIdContext"
import colRef from '../../constants/firebase';
import { getDocs } from "firebase/firestore"


const Planned = () => {
    const [todos, setTodos] = useState([]);
    const userId = useContext(UserIdContext);

    const fetchTodo = async () => {
        getDocs(colRef)
            .then((snapshot) => {
                let todo = [];
                snapshot.docs.forEach((doc) => {
                    if (doc.data().user == localStorage.getItem("user") && doc.data().due_date === "Today") {
                        todo.push({ ...doc.data(), id: doc.id })
                    }
                })
                setTodos(todo);
                console.log(todo);
            })
            .catch((er) => {
                console.log(er)
            })
    }
    useEffect(() => {
        fetchTodo();
    }, [])
    return (
        <Container>

            <div style={{ width: "100%", display: "flex", flexDirection: "column", overflow: "scroll" }}>
                <Navbar category="Planned" todos={todos} fetchTodo={fetchTodo} />
                <div className='underlines'></div>
            </div>
            <Drawer todos={todos} fetchTodo={fetchTodo} />
        </Container>
    )
}

export default Planned;
