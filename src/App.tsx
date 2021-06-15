import React from "react";
import TodoList from "./components/TodoList";
import NewToDo from "./components/NewToDo";

const App: React.FC = () => {
  const todos = [{ id: "t1", text: "Finish the course" }];

  return (
    <div className="App">
      <TodoList todos={todos} />
      <NewToDo />
    </div>
  );
};

export default App;
