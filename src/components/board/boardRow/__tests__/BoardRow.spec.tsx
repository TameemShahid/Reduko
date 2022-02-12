/* eslint-disable testing-library/no-node-access */
import { render, screen } from '@testing-library/react';
import BoardRow from '../BoardRow';

describe('BoardRow', () => {
  render(
    <table>
      <tbody>
        <BoardRow rowNo="A" setValue={jest.fn} />
      </tbody>
    </table>,
  );
  it('should render 9 board boxes', () => {
    const boardBoxes = screen.getAllByRole('cell');
    expect(boardBoxes.length).toBe(9);
  });
});
