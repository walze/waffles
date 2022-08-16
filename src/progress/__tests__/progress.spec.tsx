import { render } from '@testing-library/react';

import { Progress } from '../index';

const MOCKED_ID = '123abC';

jest.mock('nanoid', () => {
  return {
    nanoid: () => MOCKED_ID,
  };
});

describe('Progress', () => {
  it('renders svg alongside progress when in steps mode', () => {
    const { getByTestId } = render(
      <Progress
        value={4}
        max={5}
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

  it('renders label and progress with linked id', () => {
    const { getByTestId } = render(
      <Progress
        value={40}
        max={100}
        aria-label="Progress and label with matching id"
      />,
    );
    const wrapper = getByTestId('progress-wrapper');
    const label = wrapper.querySelector('label');
    const progressEl = wrapper.querySelector('progress');

    expect(label).toBeInTheDocument();
    expect(progressEl).toBeInTheDocument();

    expect(progressEl?.id).toEqual(label?.htmlFor);
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

  it('renders snapshot of a progress with no label', () => {
    const { getByTestId } = render(
      <Progress
        value={40}
        max={100}
        aria-label="Progress with no label"
        hideLabel
      />,
    );
    const progress = getByTestId('progress-wrapper');
    const label = progress.querySelector('label');

    expect(label).not.toBeInTheDocument();
    expect(progress).toBeInTheDocument();
    expect(progress).toMatchSnapshot();
  });

  it('renders snapshot of a progress with custom label', () => {
    const { getByTestId, getByText } = render(
      <Progress
        value={40}
        max={100}
        aria-label="Progress with no label"
        customLabel="Custom Label"
      />,
    );
    const progress = getByTestId('progress-wrapper');
    const label = getByText('Custom Label');

    expect(label).toBeInTheDocument();
    expect(progress).toBeInTheDocument();
    expect(progress).toMatchSnapshot();
  });
});
