import React, {useState} from 'react';
import './App.css';

function App() {

  const [todoArr, setTodoArr] = useState([]);
  const [todo, setTodo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (todo.length === 0){
      return;
    }
     
    setTodoArr ([...todoArr, todo]);
    setTodo("")
  };

  const handleDeleteTodo = (index) => {
    const deleteTodoArr = todoArr.filter((item, idx) => idx !== index);
      setTodoArr(deleteTodoArr);
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <div>
          <h1>Add To The List</h1>
          <input type="text" onChange={(e) => setTodo(e.target.value)} value={todo}></input>
          <button type="submit">Add</button>
          {/* <input type="submit" value="Add"/> */}
        </div>
      </form>
      <h2>Todo List</h2>
      {todoArr.map((todo, index) => (
        <div>
          <p>
          <span>{todo}</span>
          <input type="checkbox"/>
          <button onClick={() => handleDeleteTodo(index)}>
          Delete
          </button>
          </p>
        </div>
      ))}
    </div>
  );
}

export default App;
