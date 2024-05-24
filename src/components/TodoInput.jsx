import { useState } from "react";

export default function TodoInput({ onTodoAdd }) {
  const [inputText, setInputText] = useState('');

  const handleInputTextChange = (event) => {
    setInputText(event.target.value)
  }

  const handleAddClick = () => {
    onTodoAdd(inputText)
    setInputText('')
  }


  return (
    <>
      <input type="text" value={inputText} onChange={handleInputTextChange} />
      <button onClick={handleAddClick}>추가</button>
    </>
  )
}