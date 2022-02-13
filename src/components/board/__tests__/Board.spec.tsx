import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../../store/store';
import Board from '../Board';

describe('Board', () => {
  render(
    <Provider store={store}>
      <Board />
    </Provider>,
  );

  it('should render a 9x9 board', () => {
    const inputBoxes = screen.getAllByRole('cell');
    expect(inputBoxes.length).toBe(81);
  });
});
