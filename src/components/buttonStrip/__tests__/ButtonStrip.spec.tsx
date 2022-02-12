import { render, screen } from '@testing-library/react';
import ButtonStrip from '../ButtonStrip';

describe('ButtonStrip', () => {
  const { debug } = render(<ButtonStrip />);

  it('should show difficulty options', () => {
    const buttons = screen.getAllByRole('button');

    expect(buttons[0].textContent).toBe('Easy');
    expect(buttons[1].textContent).toBe('Medium');
    expect(buttons[2].textContent).toBe('Hard');
  });
});
