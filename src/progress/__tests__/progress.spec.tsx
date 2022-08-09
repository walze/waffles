import { render } from '@testing-library/react';

import { Progress } from '../index';

const MOCKED_ID = '123abC';

jest.mock('../../hooks', () => {
  return {
    useId: (prefix: string) => {
      return `${prefix}-${MOCKED_ID}`;
    },
  };
});

describe('Progress', () => {
  it('renders svg alongside progress when showSteps is true', () => {
    const { getByTestId } = render(<Progress value={40} max={100} showSteps />);
    const wrapper = getByTestId('progress-wrapper');
    const svg = wrapper.querySelector('svg');
    const progressEl = wrapper.querySelector('progress');

    expect(svg).toBeInTheDocument();
    expect(progressEl).toBeInTheDocument();
  });

  it('renders snapshot of a progress', () => {
    const { getByTestId } = render(<Progress value={40} max={100} />);
    const progress = getByTestId('progress-wrapper');

    expect(progress).toBeInTheDocument();
    expect(progress).toMatchSnapshot();
  });

  it('renders snapshot of an inverted progress', () => {
    const { getByTestId } = render(<Progress inverted value={40} max={100} />);
    const progress = getByTestId('progress-wrapper');

    expect(progress).toBeInTheDocument();
    expect(progress).toMatchSnapshot();
  });

  it('renders snapshot of a progress with steps', () => {
    const { getByTestId } = render(<Progress showSteps value={2} max={5} />);
    const progress = getByTestId('progress-wrapper');

    expect(progress).toBeInTheDocument();
    expect(progress).toMatchSnapshot();
  });
});
