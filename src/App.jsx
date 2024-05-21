import { useState } from "react"

function App() {

  const fetchTodos = () => {
    let todos = []
    for (let index = 0; index < localStorage.length; index++) {
      todos.push(localStorage.key(index))
    }
    return todos
  }
  const [todos, setTodos] = useState(fetchTodos())
  const [inputText, setInputText] = useState();

  const handleInputTextChange = (event) => {
    setInputText(event.target.value)
  }

  const handleAddClick = (event) => {
    console.log('handleClickEvent', event)
    setTodos([...todos, inputText])
    localStorage.setItem(inputText, inputText)
    setInputText('')
  }

  const handleRemoveClick = (value) => {
    setTodos((currentTodos) => 
      currentTodos.filter(it => it !== value)
    )
    localStorage.removeItem(value)
  }


  return (
    <>
      <h1>TODO 애플리케이션</h1>
      <hr/>
      <input type="text" value={inputText} onChange={handleInputTextChange} />
      <button onClick={handleAddClick}>추가</button>
      <ul>
        {todos.map((it, index) => {
          return (
            
              <li key={index}>
                <span>{it}</span>
                <button onClick={() => handleRemoveClick(it)}>삭제</button>
              </li>
          )
        })}
      </ul>
    </>
  )
}

export default App
