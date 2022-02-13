import { render, screen } from '@testing-library/react';
import ButtonStrip from '../ButtonStrip';
import store from '../../../store/store';
import { Provider } from 'react-redux';

describe('ButtonStrip', () => {
  const { debug } = render(
    <Provider store={store}>
      <ButtonStrip />
    </Provider>,
  );

  it('should show difficulty options', () => {
    const buttons = screen.getAllByRole('button');

    expect(buttons[0].textContent).toBe('Easy');
    expect(buttons[1].textContent).toBe('Medium');
    expect(buttons[2].textContent).toBe('Hard');
  });
});
