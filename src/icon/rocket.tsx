import Icon from './icon-base';

type RocketProps = Omit<React.ComponentProps<typeof Icon>, 'children'>;

function Rocket({ size, ...restProps }: RocketProps) {
  return (
    <Icon viewBox="0 0 18 18" size={size} {...restProps}>
      <path
        fill="currentColor"
        d="M13.207 3.127c.132.477.348.856.642 1.15.295.296.675.511 1.152.644.137-.654.225-1.34.263-2.057-.718.037-1.403.125-2.057.263zm-1.914.581a10.03 10.03 0 0 0-3.336 2.22c-.074.074-.614.043-1.62-.094a2 2 0 0 0-1.683.568L2.536 8.521l3.535.707c.35.82.704 1.41 1.061 1.767.357.358.947.711 1.768 1.061l.707 3.536 2.107-2.108a2 2 0 0 0 .565-1.702c-.143-.984-.17-1.521-.08-1.611a10.028 10.028 0 0 0 2.22-3.336c-.78-.225-1.445-.604-1.984-1.143-.538-.538-.918-1.204-1.142-1.984zm2.965 7.786a4 4 0 0 1-1.13 3.404l-2.107 2.108c-1.13 1.13-3.062.544-3.375-1.022l-.512-2.557c-.572-.31-1.042-.643-1.416-1.017-.374-.374-.708-.845-1.018-1.417l-2.556-.511C.577 10.168-.008 8.236 1.122 7.106L3.24 4.988a4 4 0 0 1 3.366-1.135c.216.029.406.053.569.07 2.15-1.87 4.836-2.89 7.984-3.057A2 2 0 0 1 17.26 2.97c-.166 3.156-1.192 5.848-3.072 8.001.017.15.04.326.07.524zM8.9 9.228a1.5 1.5 0 1 1 2.121-2.122A1.5 1.5 0 0 1 8.9 9.228zM3.764 11.82c.242.511.598 1.002 1.07 1.474.471.47.963.828 1.475 1.07l.16 1.338a.5.5 0 0 1-.789.465l-1.367-.982c-1.217.753-1.956 1.012-2.217.775-.261-.237-.053-1.017.624-2.338l-.806-1.19a.5.5 0 0 1 .473-.776l1.377.164z"
      />
    </Icon>
  );
}

export default Rocket;