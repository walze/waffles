import Icon from './icon-base';

type CreditCardProps = Omit<React.ComponentProps<typeof Icon>, 'children'>;

function CreditCard({ size, ...restProps }: CreditCardProps) {
  return (
    <Icon viewBox="0 0 18 18" size={size} {...restProps}>
      <path
        fill="currentColor"
        d="M3 4a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H3zm0-2h12a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3zM2 6h14v3H2V6z"
      />
    </Icon>
  );
}

export default CreditCard;