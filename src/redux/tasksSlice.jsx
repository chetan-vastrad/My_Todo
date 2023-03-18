import { createSlice } from "@reduxjs/toolkit";

export const tasksSlice = createSlice({
    name: "tasks",
    initialState:[],
    reducers:{
        addTask: (state, action)=>{
            const newTask = {
                id:Math.random(),
                name: action.payload.task
            }
            state.push(newTask);
        },
        editTodo: (state, action) => {
            const todo = state.find(todo => todo.id === action.payload.id)
            if (todo) {
              todo.text = action.payload.text
            }
          },
    }
});

export const {addTask,editTodo} = tasksSlice.actions;

export default tasksSlice.reducer;