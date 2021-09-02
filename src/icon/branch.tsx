import Icon from './icon-base';

type BranchProps = Omit<React.ComponentProps<typeof Icon>, 'children'>;

function Branch({ size, ...restProps }: BranchProps) {
  return (
    <Icon viewBox="0 0 18 18" size={size} {...restProps}>
      <path
        fill="currentColor"
        d="M2.002 7.83A3.001 3.001 0 1 1 5.83 4H12c.057 0 .112.005.166.014A3.001 3.001 0 0 1 18 5a3 3 0 0 1-5.834.986A.915.915 0 0 1 12 6H5.83a3.008 3.008 0 0 1-1.828 1.829v3.232a1 1 0 0 0 1 1h7.148A3.001 3.001 0 0 1 18 13a3 3 0 0 1-5.807 1.061h-7.19a3 3 0 0 1-3-3V7.83zM3 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm12 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"
      />
    </Icon>
  );
}

export default Branch;