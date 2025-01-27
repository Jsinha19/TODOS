import React, { useState } from 'react';
import Todos from './Todos';

export const AddTodo = ({ addTodo, todos, onDelete }) => {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');

  const submit = (e) => {
    e.preventDefault();
    if (!title || !desc) {
      alert('Title or Description cannot be blank');
    } else {
      addTodo(title, desc);
      setTitle('');
      setDesc('');
    }
  };

  return (
    <div className="container px-4 mt-4 ">
      <div className="row gx-5 -flex align-items-stretch">
        {/* Left Column: Add Todo Form */}
        <div className="col-6">
          <div className="p-3 border border-secondary bg-light rounded">
            <div className="container">
              <h3 style={{ color: 'purple', fontSize: '24px',textAlign:'center'  ,textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)'}}>Add a Todo</h3>
              <form onSubmit={submit}>
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">
                    Todo title
                  </label>
                  <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="form-control"
                    id="title"
                    placeholder="Title"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="desc" className="form-label">
                    Todo Description
                  </label>
                  <input
                    type="text"
                    value={desc}
                    onChange={(e) => setDesc(e.target.value)}
                    className="form-control"
                    id="desc"
                    placeholder="Description"
                  />
                </div>
                <button type="submit" className="btn"style={{backgroundColor: "purple",color: "black", borderRadius: "15px", border: "none",
                  padding: "8px 16px", fontSize: "14px", }}>Submit</button>
              </form>
            </div>
          </div>
        </div>

        {/* Right Column: Todos List */}
        <div className="col-6 ">
          <div className="p-3 border border-secondary bg-light rounded">
            <Todos todos={todos} onDelete={onDelete} />
          </div>
        </div>
      </div>
    </div>
  );
};
