import React, {useState}  from 'react'
import Todo from './Todo';
import TodoForm from './TodoForm'

function TodoList() {
    const [todos, setTodos] = useState([]);

    const addTodo = e => {
       if (!e.text || /^\s*$/.test(e.text)) {
          return; 
       }

       const newTodos = [e, ...todos];

       setTodos(newTodos);
       console.log(...todos);
    }

    const completeTodo = id => {
        let updateTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete;
            }
            return todo;
        })
        setTodos(updateTodos)
    }

    const removeTodo = id => {
        const removeArr = [...todos].filter(todo => todo.id !== id);
        setTodos(removeArr);
    }

    const updateTodo = (todoId, newValue) => {
        if (!newValue.text || /^\s*$/.test(newValue.text)) {
            return; 
        }
        setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)))
  
    }

    return (
        <div>
            <h1 id="title-main">What is the plan for today</h1>
            <TodoForm onSubmit={addTodo} />
            <div data-testid="todo-list">
               <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} updateTodo={updateTodo}/>
            </div>
        </div>
    )
}

export default TodoList
