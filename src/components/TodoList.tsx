import React from 'react'
import { ITodo } from '../interfaces'

type TodoListProps = {
    todos: ITodo[]
    onToggle(id: number): void
    onRemove(id: number): void
    // onRemove: () => void
}


export const TodoList: React.FC<TodoListProps> = ({ todos, onRemove, onToggle }) => {
    if (todos.length === 0){
        return (
        <div className="center">
        <h3 >Let's get started planning your day!</h3>
        <h5 >Create your first item in the list and press Enter</h5>
        
        </div>
        )
    }

    const removeHandler = (event: React.MouseEvent, id: number ) => {
        event.preventDefault()

        onRemove(id)
    }

    return (
        <ul>
            {todos.map(todo => {
                const classes = ['todo']
                if (todo.completed){
                    classes.push('completed')
                }
                
                return (
                <li className={classes.join(' ')} key={todo.id}>
                   <label>
                       <input type="checkbox" checked={todo.completed} onChange={onToggle.bind(null, todo.id)} />
                            <span><h6>{todo.title}</h6></span>
                       <i className="material-icons red-text" onClick={event => removeHandler(event, todo.id)}>delete</i>
                   </label>
                </li>
                )
            })}
            
        </ul>
    )
}