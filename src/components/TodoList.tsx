import React from "react";
import "../style/TodoList.css";
interface TodoListProps {
  todos: { id: string; text: string }[];
  handleDeleteTodo: (id: string) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, handleDeleteTodo }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          {todo.text}
          <span>
            <button onClick={handleDeleteTodo.bind(null, todo.id)}>
              DELETE
            </button>
          </span>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
