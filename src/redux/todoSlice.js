import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todos: [],
  filter: 'all', // all, completed,incomplete
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push({
        id: Date.now(),
        text: action.payload,
        completed: false,
      });
    },
    toggleTodo: (state, action) => {
      const todo = state.todos.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
    clearCompleted: (state, action) => {
      const completedTodos = state.todos.filter((todo) => todo.completed);
      state.todos = state.todos.map((todo) => {
        if (todo.completed) {
          todo.completed = false;
        }
        return todo;
      });
    },
  },
});

export const { addTodo, toggleTodo, deleteTodo, setFilter, clearCompleted } =
  todoSlice.actions;

export default todoSlice.reducer;
