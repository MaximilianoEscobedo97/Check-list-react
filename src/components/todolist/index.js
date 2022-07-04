import React from "react";
import { TodoItem } from "../todoitem";

export function TodoList({todos, toggleTodo})
{
    return (<ul>
        { todos.map((todo)=> (
            <TodoItem
                key={todo.id}   
                id={todo.id}
                name={todo.name}
                completed={todo.completed}
                toggleTodo = {toggleTodo}
            />
        ))}
    </ul>)
}