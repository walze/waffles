import Icon from './icon-base';

type AddCircleProps = Omit<React.ComponentProps<typeof Icon>, 'children'>;

function AddCircle({ size, ...restProps }: AddCircleProps) {
  return (
    <Icon viewBox="0 0 18 18" size={size} {...restProps}>
      <path
        fill="currentColor"
        d="M9 16A7 7 0 1 0 9 2a7 7 0 0 0 0 14zm0 2A9 9 0 1 1 9 0a9 9 0 0 1 0 18zm1-10h3a1 1 0 0 1 0 2h-3v3a1 1 0 0 1-2 0v-3H5a1 1 0 1 1 0-2h3V5a1 1 0 1 1 2 0v3z"
      />
    </Icon>
  );
}

export default AddCircle;