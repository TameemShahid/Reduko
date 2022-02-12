import { render, screen } from '@testing-library/react';
import Board from '../Board';

describe('Board', () => {
  render(<Board />);

  it('should render a 9x9 board', () => {
    const inputBoxes = screen.getAllByRole('cell');
    expect(inputBoxes.length).toBe(81);
  });
});
