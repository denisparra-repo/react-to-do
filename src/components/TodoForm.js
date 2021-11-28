import React , {useState, useEffect, useRef} from 'react'

function TodoForm(props) {
    const [input, setInput] = useState(props.edit ? props.edit.value : '')

    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus()
    })

    const handleChange = e => {
       setInput(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault();
        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        })
        setInput('')
    }
    return (
        <form className='todo-form' onSubmit={handleSubmit}>
        {props.edit ? (
            <><input id="input-update" type='text' placeholder='Update your item' value={input} name='text' className='todo-input' onChange={handleChange} ref={inputRef} data-testid="input-edit"></input><button id="button-update" className='todo-button edit' data-testid="button-update">Update todo</button></>
        ) : (
            <><input id="input-add" type='text' placeholder='Add a todo' value={input} name='text' className='todo-input' onChange={handleChange} ref={inputRef} data-testid="input-add"></input><button id="button-add" className='todo-button' data-testid="button-add">Add todo</button></>
        )}
          
        </form>
    )
}

export default TodoForm
