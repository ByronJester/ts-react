import React, { useState, useEffect } from 'react';
import axios, { AxiosResponse } from 'axios';
import './App.css';
import { Todos } from './interfaces/todos';

/*
* Imported Components
*/
import InputField from './components/InputField';
import TodoList from './components/TodoList';

const endpoint = "http://localhost:4000/";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("")
  const [todos, setTodos] = useState<Todos[]>([])

  const addTodo = (e: React.FormEvent) => {
    e.preventDefault()

    if (todo !== "") {
      axios.post(endpoint + 'createTodo', {
        todo: todo
      })
        .then(function (response) {
          getTodos()
          setTodo("")
        })
    }
  }

  const getTodos = async () => {
    await axios.get<Todos[]>(endpoint + 'todos')
      .then((response: AxiosResponse) => {
        setTodos(response.data)
      })
  }

  useEffect(() => {
    getTodos()
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        Todo App

        <InputField todo={todo} setTodo={setTodo} addTodo={addTodo} />
        <TodoList todos={todos} setTodos={setTodos} />
      </header>
    </div>
  );
}

export default App;
