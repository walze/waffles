import { render } from '@testing-library/react';

import { Progress } from '../index';

describe('Progress', () => {
  it('renders a progress bar', () => {
    const { getByTestId } = render(<Progress value="40" max="100" />);
    const progress = getByTestId('progress-wrapper');

    expect(progress).toBeInTheDocument();
    expect(progress).toMatchSnapshot();
  });

  it('renders snapshot of an inverted progress bar', () => {
    const { getByTestId } = render(<Progress inverted value="40" max="100" />);
    const progress = getByTestId('progress-wrapper');

    expect(progress).toBeInTheDocument();
    expect(progress).toMatchSnapshot();
  });

  it('renders snapshot of a progress bar with steps', () => {
    const { getByTestId } = render(<Progress showSteps value="2" max="5" />);
    const progress = getByTestId('progress-wrapper');

    expect(progress).toBeInTheDocument();
    expect(progress).toMatchSnapshot();
  });
});
