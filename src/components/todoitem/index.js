import React from "react";

export function TodoItem({id, name, completed, toggleTodo})
{
    const handleTodoClick = () =>
    {
        toggleTodo(id);
    }
    return(
        <li>
            <div>
                <input type="checkbox" checked={completed} onChange={handleTodoClick}/>
                <p>id: {id} <br/> task: {name}</p>
            </div>
        </li>
    )
}