import './App.css'
import AddTodos from './components/AddTodos'
import Todo from './components/Todo'

function App() {

  return (
    <>
      <h1 style={{ textAlign: 'center' }}>Todos</h1>
      <AddTodos />
      <Todo />
    </>
  )
}

export default App
