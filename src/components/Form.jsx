import { useState } from 'react';
import uuid from 'react-uuid';
import './Form.css';
import PropTypes from 'prop-types';

const Form = ({ addTask }) => {
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState(false);

  const changeInputHandler = (e) => {
    setInputValue(e.target.value);
    setError(false);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (inputValue.trim() === '') {
      setError(true);
      return;
    }

    const task = {
      id: uuid(),
      text: inputValue,
      done: false
    };

    addTask(task);

    setInputValue('');
  };

  return (
    <form onSubmit={(e) => submitHandler(e)}>
      <input
        type="text"
        placeholder="Add new task"
        value={inputValue}
        onChange={(e) => changeInputHandler(e)}
      />
      <button className="submit">Add task</button>
      {error && <p className="error">PLease add a text</p>}
    </form>
  );
};

PropTypes;
export default Form;
