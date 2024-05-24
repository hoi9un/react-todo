import { useState } from "react"
import TodoHeader from "./components/TodoHeader"
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"

const fetchTodos = () => {
  let todos = []
  for (let index = 0; index < localStorage.length; index++) {
    todos.push(localStorage.key(index))
  }
  return todos
}

function App() {
  const [todos, setTodos] = useState(fetchTodos())

  const removeTodo = (todo) => {
    localStorage.removeItem(todo)
    setTodos((currentTodos) =>
      currentTodos.filter(it => it !== todo)
    )
  }

  const addTodo = (todo) => {
    setTodos([...todos, todo])
    localStorage.setItem(todo, todo)
  }


  return (
    <>
      <TodoHeader />
      <hr/>
      <TodoInput onTodoAdd={addTodo}/>
      <TodoList todos={todos} onTodoRemove={removeTodo} />
    </>
  )
}

export default App
