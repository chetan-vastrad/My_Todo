import React from "react";
import AddTodo from "./components/AddTodo";

import "./App.css";
const App = () => {
  return (
    <div className="app">
      <div className="todo-man-div">
                <AddTodo />
      </div>
    </div>
  );
};

export default App;
