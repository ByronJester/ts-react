import React from 'react'
import axios, { AxiosResponse } from 'axios';
import './styles.css'
import { Todos } from '../interfaces/todos';
import { AiFillDelete, AiOutlineUndo } from 'react-icons/ai'
import { MdOutlineDone } from 'react-icons/md'

type Props = {
    todo: Todos;
    todos: Todos[];
    setTodos: React.Dispatch<React.SetStateAction<Todos[]>>;
}

const endpoint = "http://localhost:4000/";

const SingleTodo = ({ todo, todos, setTodos }: Props) => {

    const handleDone = () => {
        axios.post(endpoint + 'doneTodo', {
            id: todo.id,
            is_done: true
        })
            .then(function (response) {
                setTodos(response.data)
            })
    }

    const handleUndone = () => {
        axios.post(endpoint + 'doneTodo', {
            id: todo.id,
            is_done: false
        })
            .then(function (response) {
                setTodos(response.data)
            })
    }

    const handleDelete = () => {
        axios.post(endpoint + 'deleteTodo', {
            id: todo.id
        })
            .then(function (response) {
                setTodos(response.data)
            })
    }

    return (

        <form className={!todo.is_done ? 'todos__single--undone' : 'todos__single--done'}>
            <span className="todos__single--text">
                {todo.todo}
            </span>

            <div>
                {todo.is_done == false &&
                    <span className="icon" onClick={() => handleDone()}>
                        <MdOutlineDone />
                    </span>
                }

                {todo.is_done == true &&
                    <span className="icon" onClick={() => handleUndone()}>
                        <AiOutlineUndo />
                    </span>
                }

                <span className="icon" onClick={() => handleDelete()}>
                    <AiFillDelete />
                </span>

            </div>

        </form>

    )
}

export default SingleTodo