
//import logo from './logo.svg';
import './App.css';

import Header from "./MyComponents/Header";
//import Todos from "./MyComponents/Todos";
import Footer from "./MyComponents/Footer";
import React, { useEffect, useState } from 'react';
import { AddTodo } from './MyComponents/AddTodo';
import { About } from './MyComponents/About';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (todo) => {
    console.log("i am ondelete of todo,", todo);
    setTodos(todos.filter((e) => {
      return e !== todo;
    }));
    localStorage.setItem("todos", JSON.stringify(todos)); // Fixing: localStorage.setItem
  }

  const addTodo = (title, desc) => {
    console.log("i am adding this todo", title, desc);
    let sno;
    if (todos.length === 0) {
      sno = 0;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo);
  }

  const [todos, setTodos] = useState(initTodo);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Router>
        <Header title="My TODO List" searchBar={false} />
        <div style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={
              <>
                <AddTodo addTodo={addTodo} todos={todos} onDelete={onDelete} />
              </>
            }
            />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>

        <Footer />
      </Router>
    </div>
  );
}

export default App;



