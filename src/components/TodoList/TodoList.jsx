import React from 'react';
import classNames from 'classnames';

export const TodoList = ({ todos, onToggle, onRemove }) => {
  const removeHandler = (e, id) => {
    e.preventDefault();
    onRemove(id);
  };

  if (todos.length === 0) {
    return <p className="center">List is empty, boss</p>;
  }

  return (
    <ul>
      {todos.map(todo => {
        return (
          <li
            className={classNames('todo', {
              completed: todo.completed,
            })}
            key={todo.id}
          >
            <label>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => onToggle(todo.id)}
              />
              <span>{todo.title}</span>
              <i
                className="material-icons red-text"
                onClick={e => removeHandler(e, todo.id)}
              >
                delete
              </i>
            </label>
          </li>
        );
      })}
    </ul>
  );
};
