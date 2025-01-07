import { use } from "react"
import { useState } from "react"


export const AddTodo = (props) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const submit = (e) =>{
        //to prevent page reloading
        e.preventDefault();
        if (!title || !desc){
            alert("Title or description cannot be blank")
        }
        props.addTodo(title, desc);

    }
  return (
    <div className='container my-3'>
        <h3>Add a ToDo</h3>
        <form onSubmit={submit}>
        <div className="mb-3">
            <label for="title" className="form-label">Todo Title</label>
            <input type="text"  value= {title} onChange={(e)=>{setTitle(e.target.value)}} className="form-control" id="title" aria-describedby="emailHelp"/>
        </div>
        <div className="mb-3">
            <label for="desc" className="form-label">Todo Description</label>
            <input type="text" value={desc} onChange={(e)=>{setDesc(e.target.value)}} className="form-control" id="desc"/>
        </div>
    
        <button className = "btn btn-sm btn-success" type="submit" class="btn btn-primary">Add Todo</button>
        </form>
      
    </div>
  )
}

// export default AddTodo
