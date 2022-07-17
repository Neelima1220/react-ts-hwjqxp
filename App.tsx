import React, { useState } from 'react';
import './style.css';
import { Data } from './data';

export default function App() {
  const [selected, setSelected] = useState(Data[0]);
  const [increment, setIncrement] = useState();
  return (
    <div>
      <h1>Selected user : {`${selected.name} is ${selected.age} years old`}</h1>
      {Data.map((item, key) => (
        <div
          style={{
            display: 'flex',
            alignitems: 'center',
            justifyContent: 'space-between',
            margin: '1rem',
          }}
        >
          <p> {`${item.name} is ${item.age} years old`}</p>
          <button onClick={() => setIncrement(item.age + 1)}>Increment </button>
          <button>Selected </button>
        </div>
      ))}
    </div>
  );
}
