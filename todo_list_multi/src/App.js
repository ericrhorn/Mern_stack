import React, { useState } from "react";
import "./App.css";

function App() {
  const [todoArr, setTodoArr] = useState([]);
  const [todo, setTodo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (todo.length === 0) {
      return;
    }

    const newTodo = {
      text: todo,
      conplete: false,
    };

    setTodoArr([...todoArr, newTodo]);
    setTodo("");
  };

  const handleDeleteTodo = (index) => {
    const deleteTodoArr = todoArr.filter((item, idx) => idx !== index);
    setTodoArr(deleteTodoArr);
  };

    const handleCheckbox = (index) => {
      const checkTodo = { ...todoArr[index]};
        checkTodo.complete = !checkTodo.complete;
        setTodoArr([...todoArr.slice(0, index), checkTodo].concat(todoArr.slice(index + 1)));
    }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <div>
          <h1>Add To The List</h1>
          <input
            type="text"
            onChange={(e) => setTodo(e.target.value)}
            value={todo}
          ></input>
          <button type="submit">Add</button>
          {/* <input type="submit" value="Add"/> */}
        </div>
      </form>
      <h2>Todo List</h2>
      {todoArr.map((todo, index) => (
        <div>
          <p>
            <span style={{ textDecoration: todo.complete && "line-through" }}>
              {todo.text}
            </span>
            <input
              type="checkbox"
              checked={todo.complete}
              onChange={() => handleCheckbox(index)}
            />
            <button onClick={() => handleDeleteTodo(index)}>Delete</button>
          </p>
        </div>
      ))}
    </div>
  );
}

export default App;
