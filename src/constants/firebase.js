
import { getFirestore, collection } from "firebase/firestore"
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyDJxs-B5MkfTvuYU1m94b28ibevrMA57DE",
    authDomain: "todo-1416b.firebaseapp.com",
    projectId: "todo-1416b",
    storageBucket: "todo-1416b.appspot.com",
    messagingSenderId: "207546512803",
    appId: "1:207546512803:web:ecf6d52fff5895d3551616"
};

// Initialize Firebase  
var app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const colRef = collection(db, "todo")
export default colRef; 