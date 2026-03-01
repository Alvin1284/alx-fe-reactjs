import { useState } from 'react';

const AddTodoForm = ({ onAddTodo }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (inputValue.trim() !== '') {
      onAddTodo(inputValue);
      setInputValue('');
    }
  };

  return (
    <form 
      onSubmit={handleSubmit}
      style={{
        display: 'flex',
        gap: '10px',
        marginBottom: '20px'
      }}
    >
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Add a new todo..."
        style={{
          flex: 1,
          padding: '10px',
          fontSize: '16px',
          border: '1px solid #ddd',
          borderRadius: '4px',
          outline: 'none'
        }}
      />
      <button
        type="submit"
        style={{
          padding: '10px 20px',
          backgroundColor: '#28a745',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          fontSize: '16px',
          fontWeight: 'bold',
          transition: 'background-color 0.2s'
        }}
        onMouseOver={(e) => e.target.style.backgroundColor = '#218838'}
        onMouseOut={(e) => e.target.style.backgroundColor = '#28a745'}
      >
        Add
      </button>
    </form>
  );
};

export default AddTodoForm;
