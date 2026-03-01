import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from '../components/TodoList';

describe('TodoList Component', () => {
  // Test 1: Initial Render Test
  it('renders the TodoList component correctly', () => {
    render(<TodoList />);
    
    // Check if the heading is rendered
    const heading = screen.getByText(/Todo List/i);
    expect(heading).toBeInTheDocument();
  });

  // Test 2: Verify Initial State
  it('renders initial demo todos', () => {
    render(<TodoList />);
    
    // Check if the initial todos are rendered
    expect(screen.getByText('Learn React')).toBeInTheDocument();
    expect(screen.getByText('Build a Todo App')).toBeInTheDocument();
    expect(screen.getByText('Master React Testing')).toBeInTheDocument();
  });

  // Test 3: Adding Todos
  it('adds a new todo when form is submitted', () => {
    render(<TodoList />);
    
    // Get the input and button elements
    const input = screen.getByPlaceholderText(/Add a new todo/i);
    const addButton = screen.getByText(/Add/i);
    
    // Type a new todo
    fireEvent.change(input, { target: { value: 'New Test Todo' } });
    
    // Click the add button
    fireEvent.click(addButton);
    
    // Check if the new todo appears in the list
    expect(screen.getByText('New Test Todo')).toBeInTheDocument();
    
    // Check if the input is cleared after adding
    expect(input.value).toBe('');
  });

  // Test 4: Prevent Adding Empty Todos
  it('does not add an empty todo', () => {
    render(<TodoList />);
    
    // Get all todo items before attempting to add empty todo
    const initialTodos = screen.getAllByRole('listitem');
    const initialCount = initialTodos.length;
    
    // Get the button and click without entering text
    const addButton = screen.getByText(/Add/i);
    fireEvent.click(addButton);
    
    // Check that no new todo was added
    const finalTodos = screen.getAllByRole('listitem');
    expect(finalTodos.length).toBe(initialCount);
  });

  // Test 5: Toggling Todos
  it('toggles a todo completion status when clicked', () => {
    render(<TodoList />);
    
    // Get the first todo item
    const todoText = screen.getByText('Learn React');
    
    // Initially, it should not have line-through
    expect(todoText).toHaveStyle('text-decoration: none');
    
    // Click to toggle
    fireEvent.click(todoText);
    
    // Now it should have line-through
    expect(todoText).toHaveStyle('text-decoration: line-through');
    
    // Click again to toggle back
    fireEvent.click(todoText);
    
    // Should be back to no line-through
    expect(todoText).toHaveStyle('text-decoration: none');
  });

  // Test 6: Deleting Todos
  it('deletes a todo when delete button is clicked', () => {
    render(<TodoList />);
    
    // Check that the todo exists
    expect(screen.getByText('Learn React')).toBeInTheDocument();
    
    // Get all delete buttons and click the first one
    const deleteButtons = screen.getAllByText(/Delete/i);
    fireEvent.click(deleteButtons[0]);
    
    // Check that the todo is no longer in the document
    expect(screen.queryByText('Learn React')).not.toBeInTheDocument();
  });

  // Test 7: Deleting All Todos Shows Empty State
  it('shows empty state message when all todos are deleted', () => {
    render(<TodoList />);
    
    // Delete all todos
    const deleteButtons = screen.getAllByText(/Delete/i);
    deleteButtons.forEach(button => {
      fireEvent.click(button);
    });
    
    // Check for empty state message
    expect(screen.getByText(/No todos yet/i)).toBeInTheDocument();
  });

  // Test 8: Multiple Todos Can Be Added
  it('allows adding multiple todos', () => {
    render(<TodoList />);
    
    const input = screen.getByPlaceholderText(/Add a new todo/i);
    const addButton = screen.getByText(/Add/i);
    
    // Add first todo
    fireEvent.change(input, { target: { value: 'First Todo' } });
    fireEvent.click(addButton);
    
    // Add second todo
    fireEvent.change(input, { target: { value: 'Second Todo' } });
    fireEvent.click(addButton);
    
    // Check both todos are added
    expect(screen.getByText('First Todo')).toBeInTheDocument();
    expect(screen.getByText('Second Todo')).toBeInTheDocument();
  });

  // Test 9: Todo Text Displays Correctly After Toggle
  it('maintains todo text after toggling completion', () => {
    render(<TodoList />);
    
    const todoText = screen.getByText('Build a Todo App');
    const originalText = todoText.textContent;
    
    // Toggle the todo
    fireEvent.click(todoText);
    
    // Text should remain the same
    expect(todoText.textContent).toBe(originalText);
  });

  // Test 10: Delete Button Only Deletes Specific Todo
  it('deletes only the specific todo when delete is clicked', () => {
    render(<TodoList />);
    
    // Get the second delete button (for "Build a Todo App")
    const deleteButtons = screen.getAllByText(/Delete/i);
    fireEvent.click(deleteButtons[1]);
    
    // Check that only the second todo is deleted
    expect(screen.getByText('Learn React')).toBeInTheDocument();
    expect(screen.queryByText('Build a Todo App')).not.toBeInTheDocument();
    expect(screen.getByText('Master React Testing')).toBeInTheDocument();
  });
});
