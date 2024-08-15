import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  addTodo,
  clearCompleted,
  deleteTodo,
  setFilter,
  toggleTodo,
} from './redux/todoSlice';

function App() {
  const [text, setText] = useState('');
  const todos = useSelector((state) => state.todos.todos);
  const filter = useSelector((state) => state.todos.filter);
  const dispatch = useDispatch();

  const filteredTodos = todos.filter((todo) => {
    if (filter === 'completed') return todo.completed;
    if (filter === 'incomplete') return !todo.completed;
    return true;
  });

  const handleAddTodo = () => {
    if (text.trim()) {
      dispatch(addTodo(text));
      setText('');
    }
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add todo..."
      />
      <button onClick={handleAddTodo}>Add Todo</button>
      <div>
        <button onClick={() => dispatch(setFilter('all'))}>All</button>
        <button onClick={() => dispatch(setFilter('completed'))}>
          Completed
        </button>
        <button onClick={() => dispatch(setFilter('incomplete'))}>
          Incomplete
        </button>
        <button onClick={() => dispatch(clearCompleted())}>
          Clear Completed
        </button>
      </div>
      <ul>
        {filteredTodos.map((todo) => (
          <li key={todo.id}>
            <span
              onClick={() => dispatch(toggleTodo(todo.id))}
              style={{
                textDecoration: todo.completed ? 'line-through' : 'none',
              }}
            >
              {todo.text}
            </span>
            <button onClick={() => dispatch(deleteTodo(todo.id))}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
