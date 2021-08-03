import {render, fireEvent} from '@testing-library/react';

import { Button } from '../index';

describe('Button', function() {
  it('renders correctly', function() {
    const { getByText } = render(<Button>Amazing Label</Button>);

    const label = getByText(/amazing label/i);

    expect(label).toBeInTheDocument();
  });

  it('handles click correctly', function() {
    const handleClick = jest.fn();
    const { getByText } = render(<Button onClick={handleClick}>Amazing Label</Button>);

    const label = getByText(/amazing label/i);
    fireEvent.click(label);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
