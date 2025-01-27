import React from 'react'
import { TodoItem } from './TodoItem';

export const Todos = (props) => {
  return (
    <div className="container">
      <h3 style={{ color: 'purple', fontSize: '24px' ,textAlign:'center' ,textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)'}}>Todos List</h3>
      {props.todos.length === 0 ? "no todos to display" :
        
          props.todos.map((todo) => {
            return (
              <>
            <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} /> <hr/>
            </>
          )
          })
        } 
      
  </div>
  )
}
export default Todos;



