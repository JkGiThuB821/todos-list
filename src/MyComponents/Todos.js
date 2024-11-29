import React from 'react'
import Todo from './Todo'

const Todos = (props) => {
  return (
    <div className="container">
      <h3>Todos List</h3>
      <Todo todo = {props.todos[0]}/>
      {/* {props.todos} */}
    </div>
  )
}

export default Todos
