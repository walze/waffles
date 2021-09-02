import Icon from './icon-base';

type UserInvertedProps = Omit<React.ComponentProps<typeof Icon>, 'children'>;

function UserInverted({ size, ...restProps }: UserInvertedProps) {
  return (
    <Icon viewBox="0 0 18 18" size={size} {...restProps}>
      <path
        fill="currentColor"
        d="M5 18c-.667 0-1-.333-1-1v-5a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v5c0 .667-.333 1-1 1H5zM9 8a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"
      />
    </Icon>
  );
}

export default UserInverted;