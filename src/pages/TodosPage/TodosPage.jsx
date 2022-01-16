import React, { useState, useEffect } from 'react';

import TodoForm from '../../components/TodoForm';
import TodoList from '../../components/TodoList';

const TodosPage = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('todosList') || '[]');
    setTodos(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem('todosList', JSON.stringify(todos));
  }, [todos]); // [todos]-запускается при изменении todos

  const handlerAddTodo = title => {
    const newTodo = {
      title,
      id: Date.now(),
      completed: false,
    };

    setTodos(state => [newTodo, ...state]);
  };

  const handlerToggle = id => {
    setTodos(prev =>
      prev.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      }),
    );
  };

  const handlerRemove = id => {
    // const shouldTodoBeDeleted = confirm(
    //   'Are you really want to delete this too?',
    // );
    // if (shouldTodoBeDeleted) {
    setTodos(state => state.filter(todo => todo.id !== id));
    // }
  };

  return (
    <>
      <TodoForm onAdd={handlerAddTodo} />

      <TodoList
        todos={todos}
        onToggle={handlerToggle}
        onRemove={handlerRemove}
      />
    </>
  );
};

export default TodosPage;
