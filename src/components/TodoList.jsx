function TodoList({ todos, onTodoRemove }) {
  return (
      <ul>
        {todos.map((it, index) => {
          return (
              <li key={index}>
                <span>{it}</span>
                <button onClick={() => onTodoRemove(it)}>삭제</button>
              </li>
          )
        })}
      </ul>
  )
}

export default TodoList