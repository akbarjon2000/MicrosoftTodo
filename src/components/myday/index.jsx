import React, { useState, useEffect, useContext } from 'react'
import Navbar from '../../generic/nav';
import { Container } from './style';
import Drawer from '../../generic/drawer/Drawer';
import { UserIdContext } from '../../context/UserIdContext';
import { getDocs } from "firebase/firestore"
import colRef from '../../constants/firebase';

const MyDay = () => {
    const [todos, setTodos] = useState([]);
    const user = useContext(UserIdContext);

    const fetchTodo = async () => {
        getDocs(colRef)
            .then((snapshot) => {
                let todo = [];
                snapshot.docs.forEach((doc) => {
                    if (doc.data().user == localStorage.getItem("user")) {
                        todo.push({ ...doc.data(), id: doc.id })
                    }
                })
                setTodos(todo);
                console.log(todo);
            })
            .catch((er) => {
                console.log(er)
            })

        // onSnapshot(colRef, (snapshot) => {
        //     let todo = [];
        //     snapshot.docs.forEach((doc) => {
        //         todo.push({ ...doc.data(), id: doc.id })
        //         setTodos(todo);

        //     })
        // })
        // const { data } = await axios.get(`/todos/?filters[user][$eq]=${user}`);
        // const { data: todo } = data;

    }
    useEffect(() => {
        fetchTodo();
    }, [])
    return (
        <Container>

            <div style={{ width: "100%", display: "flex", flexDirection: "column", overflow: "scroll" }}>
                <Navbar category="My Day" todos={todos} fetchTodo={fetchTodo} />
                <div className='underlines'></div>
            </div>
            <Drawer todos={todos} fetchTodo={fetchTodo} />
        </Container>
    )
}

export default MyDay;
