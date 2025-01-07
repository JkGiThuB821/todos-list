import './App.css';
import Header from './MyComponents/Header';
import {Todos} from './MyComponents/Todos';
// import Todo from './MyComponents/Todo';
import {Footer} from './MyComponents/Footer';
import {AddTodo} from './MyComponents/AddTodo';
import React, { useState, useEffect } from 'react';
import { use } from 'react';
import { cleanup } from '@testing-library/react';


function App() {
  let initTodo;
  if (localStorage.getItem("todos")===null){
    initTodo = [];
  }else{
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (todo) => {
    console.log("I am on delete of todo", todo);
    //deleting in react cant happen this way biut can happen in angular
    // let index = todos.indexOf(todo);
    // todos.splice(index,1);

    setTodos(todos.filter((e) =>{
      return e!==todo;
    }))
    localStorage.setItem("todos", JSON.stringify(todos));

  }
  const addTodo = (title, desc) =>{
    console.log("I am adding this todo", title, desc)
    let sno;
    if (todos.length == 0){
      sno = 0;
    }
    else{
     sno = todos[todos.length-1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title:title,
      desc: desc
    }
    setTodos([...todos, myTodo])
    console.log(myTodo);
    
  }
  const [todos, setTodos] = useState([initTodo]);
  useEffect(()=>{
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])
  //create an array of todos
 // Declare a new state variable, which we'll call "count"
  
  return (
    <>
    <Header title = "My Todos List" searchBar = {true}/>
    <AddTodo addTodo= {addTodo}/>
    <Todos todos={todos} onDelete = {onDelete}/>
    <Footer/>
    </>
  );
}

export default App;
