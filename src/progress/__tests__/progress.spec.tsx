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
  it('renders svg alongside progress when in steps mode', () => {
    const { getByTestId } = render(
      <Progress
        value={40}
        max={100}
        mode="steps"
        aria-label="Progress in steps mode"
      />,
    );
    const wrapper = getByTestId('progress-wrapper');
    const svg = wrapper.querySelector('svg');
    const progressEl = wrapper.querySelector('progress');

    expect(svg).toBeInTheDocument();
    expect(progressEl).toBeInTheDocument();
  });

  it('renders snapshot of a progress', () => {
    const { getByTestId } = render(
      <Progress value={40} max={100} aria-label="Default progress" />,
    );
    const progress = getByTestId('progress-wrapper');

    expect(progress).toBeInTheDocument();
    expect(progress).toMatchSnapshot();
  });

  it('renders snapshot of an inverted progress', () => {
    const { getByTestId } = render(
      <Progress inverted value={40} max={100} aria-label="Inverted progress" />,
    );
    const progress = getByTestId('progress-wrapper');

    expect(progress).toBeInTheDocument();
    expect(progress).toMatchSnapshot();
  });

  it('renders snapshot of a progress in steps mode', () => {
    const { getByTestId } = render(
      <Progress
        mode="steps"
        value={2}
        max={5}
        aria-label="Progress in steps mode"
      />,
    );
    const progress = getByTestId('progress-wrapper');

    expect(progress).toBeInTheDocument();
    expect(progress).toMatchSnapshot();
  });
});
