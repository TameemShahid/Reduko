import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from '../Header';

describe('Header', () => {
  it('should show the sudoku logo', () => {
    const { unmount } = render(<Header />);

    const logo = screen.getByTestId('header_logo');
    expect(logo).toBeInTheDocument();

    unmount();
  });

  it('should show header text', () => {
    const { unmount } = render(<Header />);

    const mainText = screen.getByText('REduko');
    const sideText = screen.getByText('Sudoku on React');

    expect(mainText.textContent).toBe('REduko');
    expect(sideText.textContent).toBe('Sudoku on React');

    unmount();
  });
});
