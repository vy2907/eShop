import React, { useCallback } from 'react';
import { useState } from 'react';

const List: React.FC = () => {
  // const [numberlist, setNumberList] = useState(0);
  const [lists, setList] = useState<number[]>([0]);

  const onClick = () => {
    //   setNumberList(numberlist + 1);
    //   setList([...lists, numberlist]);
    setList(v => {
      const last = v.length - 1;
      const gtlast = v[last];
      return [...v, gtlast + 1];
    });
  };

  // console.log(numberlist, lists);
  return (
    <div>
      <h3>List</h3>
      {lists.map((list, index) => (
        <h2 key={index}>{list}</h2>
      ))}
      <button onClick={onClick}>Add</button>
    </div>
  );
};

export default List;
