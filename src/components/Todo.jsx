// import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo } from '../features/todo/todoSlice'


const Todo = () => {
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()
    return (
        <>
            <ul style={{ width: '100%', display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', padding: '0' }}>
                {todos.map((todo) => (
                    <li key={todo.id} style={{ display: 'flex', textAlign: 'center', gap: '20px' }}>
                        <div>{todo.text}</div>
                        <button
                            onClick={() => dispatch(removeTodo(todo.id))}
                        >X</button>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default Todo
