import React, { useRef } from 'react';

export const TodoForm = props => {
  const ref = useRef(null);

  const handleEnterPress = e => {
    if (e.key === 'Enter') {
      // console.log(title);
      // setTitle('');
      props.onAdd(ref.value);
      ref.value = '';
    }
  };

  return (
    <div className="input-field mt2">
      <input
        // onChange={handleInput}
        onKeyPress={handleEnterPress}
        // value={title}
        ref={ref}
        type="text"
        id="title"
        placeholder="Enter a todo text"
      />
      <label htmlFor="title" className="active">
        Enter a todo text
      </label>
    </div>
  );
};
