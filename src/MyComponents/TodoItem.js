import React from 'react'

export const TodoItem =({todo,onDelete}) =>{
  return (
    <div>
    <h4>{todo.title}</h4>
    <p>{todo.desc}</p>
    <button className='btn btn-sm btn-danger'style={{backgroundColor: "purple",color: "black", borderRadius: "15px", border: "none",
                  padding: "8px 16px", fontSize: "14px", }}onClick={()=>(onDelete(todo))}>Delete</button>
   



    </div>
  )
} 
export default TodoItem;
