import { useState } from 'react';
import AddTodoForm from './AddTodoForm';

const TodoList = () => {
  // Initialize state with demo todos
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Build a Todo App', completed: false },
    { id: 3, text: 'Master React Testing', completed: false }
  ]);

  // Method to add a new todo
  const addTodo = (text) => {
    if (text.trim() === '') return;
    
    const newTodo = {
      id: Date.now(),
      text: text,
      completed: false
    };
    
    setTodos([...todos, newTodo]);
  };

  // Method to toggle todo completion status
  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  // Method to delete a todo
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
      <h1 style={{ textAlign: 'center', color: '#333' }}>Todo List</h1>
      
      {/* Add Todo Form */}
      <AddTodoForm onAddTodo={addTodo} />

      {/* Todo Items List */}
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {todos.map(todo => (
          <li
            key={todo.id}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '12px 15px',
              marginBottom: '10px',
              backgroundColor: '#f9f9f9',
              borderRadius: '5px',
              border: '1px solid #ddd',
              cursor: 'pointer',
              transition: 'background-color 0.2s'
            }}
          >
            <span
              onClick={() => toggleTodo(todo.id)}
              style={{
                flex: 1,
                textDecoration: todo.completed ? 'line-through' : 'none',
                color: todo.completed ? '#888' : '#333',
                userSelect: 'none'
              }}
            >
              {todo.text}
            </span>
            <button
              onClick={(e) => {
                e.stopPropagation();
                deleteTodo(todo.id);
              }}
              style={{
                padding: '5px 12px',
                backgroundColor: '#dc3545',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '14px'
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>

      {/* Empty state message */}
      {todos.length === 0 && (
        <p style={{ textAlign: 'center', color: '#888', marginTop: '30px' }}>
          No todos yet. Add one above!
        </p>
      )}
    </div>
  );
};

export default TodoList;
