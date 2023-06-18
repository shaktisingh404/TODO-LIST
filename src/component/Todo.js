import React, { useState } from 'react';
import './Todo.css';
import { v4 as uuidv4 } from 'uuid';
export default function Todo_l() {
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const handleToggleItem = (item) => {
    setData((currentData) =>
      currentData.map((val) =>
        val.id === item.id ? { ...val, done: !item.done } : val
      )
    );
  };
  const [text, setText] = useState('');
  const [data, setData] = useState([]);
  return (
    <>
      <h1 className='logo'>TO DO LIST</h1>
      <div className='card'>
        <div className='input-add'>
          <textarea
            className='input-text'
            type='text'
            placeholder=' Enter Task'
            rows='1'
            value={text}
            onChange={handleOnChange}
          ></textarea>
          <button
            type='button'
            className='add-btn'
            onClick={() =>
              setData((currentData) => [
                ...currentData,
                { id: uuidv4(), task: text, done: false },
              ])
            }
          >
            Add
          </button>
        </div>
        {data.map((item) => (
          <div
            className='elements'
            key={item.id}
            style={{ display: 'flex', gap: '0.5em' }}
            onClick={() => handleToggleItem(item)}
          >
            <input type='checkbox' checked={item.done} readOnly />
            <label
              className='checkbox'
              style={{ textDecoration: item.done ? 'line-through' : 'none' }}
            >
              {item.task}
            </label>
            <p
              className='delete-btn'
              onClick={() =>
                setData((currentData) =>
                  currentData.filter((val) => !(val.id === item.id))
                )
              }
            >
              Delete
            </p>
          </div>
        ))}
      </div>
    </>
  );
}
