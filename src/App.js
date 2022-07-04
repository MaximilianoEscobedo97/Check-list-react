import React, {useState, useRef, useEffect} from "react";
import {TodoList} from "./components/todolist";
import { v4 as uuidv4 } from 'uuid';

const KEY = "todoAPP.todos"

function App() {
  const [todos,setTodos] = useState([]);

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(KEY));
    console.log(storedTodos);
    if(storedTodos)
      setTodos(storedTodos);
  }, [])

  useEffect(() => {
    if(todos.length > 0)
      localStorage.setItem(KEY,JSON.stringify(todos))
  },[todos])

  const todoTaskRef = useRef();

  const toggleTodo = (id) =>{
    const newTodos = [...todos];
    const todo = newTodos.find((todo)=> todo.id === id);
    todo.completed = !todo.completed;
    setTodos(newTodos);
  }

  const handleTodoAdd = () =>
  {
    const task = todoTaskRef.current.value;
    if(task === '') return;

    setTodos((prevTodos) => {
      return [...prevTodos,{id:uuidv4(),name:task, completed: false}]
    })

    todoTaskRef.current.value = null;
  }

  const handleClearAll = ()=>
  {
    const newTodos = todos.filter((todo) => !todo.completed);
    setTodos(newTodos);
  } 


  return (
    <React.Fragment>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <input
        type="text"
        placeholder="Nueva tarea"
        ref={todoTaskRef}
      />
      <button onClick={handleTodoAdd}>+</button>
      <button onClick={handleClearAll}>-</button>
      <div>Te quedan {todos.filter((todo) => !todo.completed).length} tareas por terminar</div>


    </React.Fragment>
  );
}

export default App;
