import Icon from './icon-base';

type CogProps = Omit<React.ComponentProps<typeof Icon>, 'children'>;

function Cog({ size, ...restProps }: CogProps) {
  return (
    <Icon viewBox="0 0 18 18" size={size} {...restProps}>
      <path
        fill="currentColor"
        d="M7.186 15.621a3.047 3.047 0 0 1 3.628 0l.25.186a7.053 7.053 0 0 0 1.29-.535l.045-.308a3.047 3.047 0 0 1 2.565-2.565l.308-.046c.22-.41.4-.842.535-1.289l-.186-.25a3.047 3.047 0 0 1 0-3.628l.186-.25a7.053 7.053 0 0 0-.535-1.29l-.308-.045A3.047 3.047 0 0 1 12.4 3.036l-.046-.308c-.41-.22-.842-.4-1.289-.535l-.25.186a3.047 3.047 0 0 1-3.628 0l-.25-.186a7.053 7.053 0 0 0-1.29.535l-.045.308A3.047 3.047 0 0 1 3.036 5.6l-.308.046c-.22.41-.4.842-.535 1.289l.186.25a3.047 3.047 0 0 1 0 3.628l-.186.25c.136.447.315.879.535 1.29l.308.045A3.047 3.047 0 0 1 5.6 14.964l.046.308c.41.22.842.4 1.289.535l.25-.186zM7.388 18a9.092 9.092 0 0 1-3.612-1.497l-.184-1.24a1.016 1.016 0 0 0-.856-.855l-1.24-.184A9.092 9.092 0 0 1 0 10.612l.747-1.007c.266-.36.266-.85 0-1.21L0 7.388a9.092 9.092 0 0 1 1.497-3.612l1.24-.184c.442-.066.789-.413.855-.856l.184-1.24A9.092 9.092 0 0 1 7.388 0l1.007.747c.36.266.85.266 1.21 0L10.612 0a9.092 9.092 0 0 1 3.612 1.497l.184 1.24c.066.442.413.789.856.855l1.24.184A9.092 9.092 0 0 1 18 7.388l-.747 1.007c-.266.36-.266.85 0 1.21L18 10.612a9.092 9.092 0 0 1-1.497 3.612l-1.24.184a1.016 1.016 0 0 0-.855.856l-.184 1.24A9.092 9.092 0 0 1 10.612 18l-1.007-.747a1.016 1.016 0 0 0-1.21 0L7.388 18zM9 13.063a4.063 4.063 0 1 1 0-8.126 4.063 4.063 0 0 1 0 8.126zm0-2.032A2.031 2.031 0 1 0 9 6.97a2.031 2.031 0 0 0 0 4.062z"
      />
    </Icon>
  );
}

export default Cog;