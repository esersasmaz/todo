import React, { useEffect } from "react";
import "../assets/style.css";
import ItemList from "../components/ItemList";
import Form from "../components/Form";

function Todo() {
  const [todos, setTodos] = React.useState([
    {
      text: "Learn about Javascript",
      isCompleted: false
    },
    {
      text: "Learn about Typescript",
      isCompleted: false
    },
    {
      text: "Learning a new language",
      isCompleted: false
    }
  ]);

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const completeTodo = (index, isCompleted) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = isCompleted;
    setTodos(newTodos);
  };

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="app-cl">
      <div className="todo-list">
        <h4>
          To Do List
        </h4>
        <div className="todo-list-node-box">
        {
        todos.length>0 ? todos.map((todo, index) => (
            <ItemList
              key={index}
              index={index}
              todo={todo}
              completeTodo={completeTodo}
              removeTodo={removeTodo}
            />
          ))
          :
          <div className='empty-text'>Your list empty.</div>
        }
         </div>
        <Form addTodo={addTodo} />
      </div>
    </div>
  );
}

export default Todo;