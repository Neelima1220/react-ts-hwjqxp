import React, { useState } from 'react';
import './style.css';
import { cloneDeep } from 'lodash';
import { Data } from './data';

export default function App() {
  const [dataT, setDataT] = useState(Data);
  const [selectedId, setSelectedId] = useState();

  const selectedUser = dataT.find((item) => item.id === selectedId);

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
  console.log(selectedUser, 'selectedUserselectedUser');

  const handleSelected = (idx) => {
    setSelectedId(idx);
    // setSelectedUser(dataT.find((item) => item.id === idx));
  };
  return (
    <div>
      <h1>
        Selected user :
        {selectedUser
          ? `${selectedUser?.name} is ${selectedUser?.age} years old`
          : 'none'}
      </h1>
      {dataT &&
        dataT.map((item) => (
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
