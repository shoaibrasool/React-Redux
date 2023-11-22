// import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/todo/todoSlice'

const AddTodos = () => {

  const [input, setInput] = useState("")
  const dispatch = useDispatch()

  const addTodoHandler = (e) => {
    e.preventDefault()
    dispatch(addTodo(input))
    setInput(" ")
  }

  return (
    <form style={{ display: 'flex', justifyContent: 'center' }}>
      <input
        type='text'
        placeholder='enter a todo'
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={addTodoHandler}>Add Todo</button>

    </form>
  )
}

export default AddTodos
