export default function ItemList({ todo, index, completeTodo, removeTodo }) {
  return (
    <div className="todo" draggable="true">
      <input className="fl-left" type='checkbox' onClick={(e) => completeTodo(index,e.target.checked)}/>
      <div className='todo-text fl-left' style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}>
        {todo.text}
      </div>
      <div className='fl-right'>
        <button onClick={() => removeTodo(index)}>x</button>
      </div>
    </div>
  );
}