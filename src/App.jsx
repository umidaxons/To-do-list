import React, { useState } from "react";
import "./App.css";

export default function App() {
  const [todos, setTodos] = useState([]);

  function addTodo(todo) {
    const result = [...todos, todo];
    setTodos(result);
  }

  function removeTodo(id) {
    const result = todos.filter((el) => el.id !== id);
    setTodos(result);
  }

  function editTodo(id) {
    const result = todos.map((el) => {
      if (el.id === id) {
        return { title: prompt("Yangi element kiriting:"), id: el.id };
      } else {
        return el;
      }
    });
    setTodos(result);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const res = { title: formData.get("title"), id: Date.now() };
    addTodo(res);
    e.target.reset();
  }

  return (
    <div className="app">
      <div className="card">
        <h1 className="title">To-do Ro'yxati</h1>
        <form onSubmit={handleSubmit} className="form">
          <input
            placeholder="Matn kiriting"
            type="text"
            name="title"
            className="input"
            required
          />
          <button className="btn">Qo‘shish</button>
        </form>
        <ul className="list">
          {todos.length > 0 ? (
            todos.map(({ title, id }) => (
              <li key={id} className="item">
                <span>{title}</span>
                <div className="btn-group">
                  <button onClick={() => removeTodo(id)} className="delete">
                    O‘chirish
                  </button>
                  <button onClick={() => editTodo(id)} className="edit">
                    Tahrirlash
                  </button>
                </div>
              </li>
            ))
          ) : (
            <h2 className="empty">Ma'lumot mavjud emas</h2>
          )}
        </ul>
      </div>
    </div>
  );
}
