import * as React from 'react'
import "./styles.css"

interface Props {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    addTodo: (e: React.FormEvent) => void;
}
const InputField: React.FC<Props> = ({ todo, setTodo, addTodo }) => {
    return <form className='input' onSubmit={addTodo}>
        <input type="input" placeholder="Create Todo" className='input__text'
            value={todo} onChange={(e) => setTodo(e.target.value)} />

        <button className='input__submit'>
            Go
        </button>
    </form>;
}

export default InputField