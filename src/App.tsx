import React, { useState } from "react";
import TodoList from "./components/TodoList";
import NewToDo from "./components/NewToDo";
import { Todo } from "./models/todo.model";

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const todoAddHandler = (text: string) => {
    setTodos((preveTodos) => [
      ...preveTodos,
      { id: Math.random().toString(), text: text },
    ]);
  };

  const deleteTodoHandler = (todoId: string) => {
    setTodos((prevetodos) => {
      return prevetodos.filter((todo) => todo.id !== todoId);
    });
  };

  return (
    <div className="App">
      <NewToDo onAddTodo={todoAddHandler} />
      <TodoList todos={todos} handleDeleteTodo={deleteTodoHandler} />
    </div>
  );
};

export default App;
