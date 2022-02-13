import { useDispatch, useSelector } from 'react-redux';
import {
  getBoxValue,
  getInitialBoxValue,
  update,
} from '../../../data/boardSlice';
import { IRootState } from '../../../store/store';
import './style.css';

interface PropTypes {
  id: string;
}

const BoardBox = ({ id }: PropTypes) => {
  const dispatch = useDispatch();
  const value = useSelector<IRootState, string>((state) =>
    getBoxValue(state, id),
  );
  const initialValue = useSelector<IRootState, string>((state) =>
    getInitialBoxValue(state, id),
  );

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if ((Number(value) > 0 && Number(value) < 10) || value === '') {
      dispatch(update({ id, value }));
    }
  };

  return (
    <td className="p-0 text-center">
      <input
        type="number"
        id={id}
        data-testid={id}
        disabled={initialValue !== undefined}
        value={value === undefined ? '' : value}
        onChange={handleChange}
        min="1"
        max="9"
        style={{
          borderRight:
            Number(id.charAt(1)) % 3 === 0
              ? 'solid rgb(222, 226, 230)'
              : 'none',
          borderBottom:
            id.charAt(0) === 'C' || id.charAt(0) === 'F'
              ? 'solid rgb(222, 226, 230)'
              : 'none',
        }}
      />
    </td>
  );
};

export default BoardBox;
