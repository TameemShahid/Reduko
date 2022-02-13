/* eslint-disable testing-library/no-debugging-utils */
import '@testing-library/react/dont-cleanup-after-each';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Footer from '../Footer';

describe('Footer', () => {
  const { debug } = render(<Footer />);
  it('should show doc links', () => {
    const link = screen.getByRole('link');
    expect(link.textContent).toBe('Docs');
    expect(link).toHaveAttribute(
      'href',
      'https://github.com/TameemShahid/reduko',
    );
  });

  it('should show developer name', () => {
    const name = screen.getByTestId('author');
    expect(name.textContent).toBe('© Tameem Shahid');
  });
});
