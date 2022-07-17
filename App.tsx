import React, { useState } from 'react';
import './style.css';
import { cloneDeep } from 'lodash';
import { Data } from './data';

export default function App() {
  const [dataT, setDataT] = useState(Data);
  // const [cur, setCur] = useState(0);
  const [selected, setSelected] = useState();
  console.log(selected, 'selected');

  const handleClick = (idx) => {
    const tempData = cloneDeep(dataT);
    const n = tempData.map((item) => {
      if (item.id === idx) {
        return { ...item, age: item.age + 1 };
      } else {
        return item;
      }
    });
    setDataT(n);
  };

  const handleSelected = (idx) => {
    console.log(idx);
    setSelected(dataT[idx - 1]);
  };
  return (
    <div>
      <h1>
        Selected user :{' '}
        {`${selected?.name || dataT[0].name} is ${
          selected?.age || dataT[0].age
        } years old`}
      </h1>
      {dataT &&
        dataT.map((item, index) => (
          <div
            style={{
              display: 'flex',
              alignitems: 'center',
              justifyContent: 'space-between',
              margin: '1rem',
            }}
          >
            <p> {`${item.name} is ${item.age} years old`}</p>
            <button onClick={() => handleClick(item.id)}>Increment </button>
            <button onClick={() => handleSelected(item.id)}>Selected </button>
          </div>
        ))}
    </div>
  );
}
