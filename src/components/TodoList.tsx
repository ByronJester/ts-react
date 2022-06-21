import React from 'react'
import './styles.css'
import { Todos } from '../interfaces/todos';
import SingleTodo from './SingleTodo'

interface Props {
    todos: Todos[],
    setTodos: React.Dispatch<React.SetStateAction<Todos[]>>
}

const TodoList: React.FC<Props> = ({ todos, setTodos }) => {
    return (
        <div className="todos">
            <div className="--col">
                {todos.filter(x => { return !x.is_done }).map(todo => (
                    <SingleTodo todo={todo} todos={todos} setTodos={setTodos} />
                ))}
            </div>

            <div className="--col">
                {todos.filter(x => { return x.is_done }).map(todo => (
                    <SingleTodo todo={todo} todos={todos} setTodos={setTodos} />
                ))}
            </div>
        </div>
    )
}

export default TodoList