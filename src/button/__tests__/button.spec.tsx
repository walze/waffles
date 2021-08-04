import { render, fireEvent } from '@testing-library/react';

import { Button } from '../index';

describe('Button', () => {
  it('renders correctly', () => {
    const { getByText } = render(<Button>Amazing Label</Button>);

    const button = getByText(/amazing label/i);

    expect(button).toBeInTheDocument();
    expect(button).toMatchSnapshot();
  });

  it('handles click correctly', () => {
    const handleClick = jest.fn();
    const { getByText } = render(
      <Button onClick={handleClick}>Amazing Label</Button>,
    );

    const button = getByText(/amazing label/i);
    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
