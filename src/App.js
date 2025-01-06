import './App.css';
import Header from './MyComponents/Header';
import {Todos} from './MyComponents/Todos';
// import Todo from './MyComponents/Todo';
import {Footer} from './MyComponents/Footer';
import React, { useState } from 'react';


function App() {

  const onDelete = (todo) => {
    console.log("I am on delete of todo", todo);
    //deleting in react cant happen this way biut can happen in angular
    // let index = todos.indexOf(todo);
    // todos.splice(index,1);

    setTodos(todos.filter((e) =>{
      return e!==todo;
    }))


  }
  //create an array of todos
 // Declare a new state variable, which we'll call "count"
  const [todos, setTodos] = useState([
    {sno:1,
      title: "Go to place1",
      desc: "Get the work done"
    },
    {sno:2,
      title: "Go to place2",
      desc: "Get the work done2"
    },
    {sno:3,
      title: "Go to place3",
      desc: "Get the work done3"
    }
  ]);
  return (
    <>
    <Header title = "My Todos List" searchBar = {true}/>
    <Todos todos={todos} onDelete = {onDelete}/>
    <Footer/>
    </>
  );
}

export default App;
