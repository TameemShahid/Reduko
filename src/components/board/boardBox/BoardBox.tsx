import React, { useState } from 'react';
import './style.css';

interface PropTypes {
  id: string;
  setValue: Function;
}

const BoardBox = ({ id, setValue }: PropTypes) => {
  const [val, setVal] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const x = event.target.value;
    if ((Number(x) > 0 && Number(x) < 10) || x === '') {
      setVal(x);
      setValue(x, id);
    }
  };

  return (
    <td className="p-0 text-center">
      <input
        type="number"
        id={id}
        data-testid={id}
        value={val}
        onChange={handleChange}
        min="1"
        max="9"
      />
    </td>
  );
};

export default BoardBox;
