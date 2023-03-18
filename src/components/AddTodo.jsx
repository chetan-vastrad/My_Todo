import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask,editTodo } from "../redux/tasksSlice";
import "./AddTodo.css";
import { useSelector } from "react-redux";
const AddTodo = () => {
  const todos = useSelector((state) => {
    return state.tasks;
  });
  const [dragging, setDragging] = useState(false);
  // const [value, setValue] = useState(todo.text);
  const [text, setText] = useState(todos)
  const dispatch = useDispatch();
  
  const changeHandler = (event) => {
    setText(event.target.value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(addTask({ task: text }));
   if(text.length===0){
    return alert("hello");
   }
    setText("");
  };
  const handleDragStart = (event) => {
    setDragging(true);
    event.dataTransfer.setData("text/plain", event.target.id);
  }

  const handleDragOver = (event) => {
    event.preventDefault();
  }

  const handleDrop = (event) => {
    event.preventDefault();
    const id = event.dataTransfer.getData("text");
    const draggableElement = document.getElementById(id);
    const dropzone = event.target;
    dropzone.appendChild(draggableElement);
    setDragging(false);
  }
  const handleDragOverSecond =(event) =>{
    event.preventDefault();
  }
  const handleDropSecond = (event) =>{
    event.preventDefault();
    const id = event.dataTransfer.getData("text");
    const draggableElement = document.getElementById(id);
    const dropzone = event.target;
    dropzone.appendChild(draggableElement);
    setDragging(false);
  }
  
  return (
    <div className="todo-doing-done">
      <div className="todo-main-div">
        <h1 className="app-title">ToDo</h1>
        <div>
          {todos.map((todo, index) => (
            <div
              key={index}
              id="draggable"
              draggable
              onDragStart={handleDragStart}
            >
              <li className="todo-list">{todo.name}</li>
              <button className="edit_btn" >edit</button>
            </div>
          ))}
        </div>
        <div className="add-todo">
          <input
            type="text"
            className="addtodo-input"
            placeholder="Add task"
            value={text}
            onChange={changeHandler}
          />
          <button className="task-button" onClick={onSubmit}>
            Add Card
          </button>
        </div>
      </div>
      <div
        className="doing"
        id="dropzone"
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        <h1>Doing</h1>
      </div>
      <div className="done"
      id="dropzone"
      onDragOver={handleDragOverSecond}
      onDrop={handleDropSecond}>
        <h1>Done</h1>
      </div>
    </div>
  );
};

export default AddTodo;
