/* eslint-disable testing-library/no-node-access */
import { render, screen } from '@testing-library/react';
import store from '../../../../store/store';
import { Provider } from 'react-redux';
import BoardRow from '../BoardRow';

describe('BoardRow', () => {
  render(
    <Provider store={store}>
      <table>
        <tbody>
          <BoardRow rowNo="A" />
        </tbody>
      </table>
    </Provider>,
  );
  it('should render 9 board boxes', () => {
    const boardBoxes = screen.getAllByRole('cell');
    expect(boardBoxes.length).toBe(9);
  });
});
