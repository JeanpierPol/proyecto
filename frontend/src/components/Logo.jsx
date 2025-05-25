import logo from '/src/assets/react.svg';

const Logo = ({ width, height }) => {
  const alt = 'Logo';
  return (
    <img src={logo} alt={alt} width={width} height={height} />
  );
};

export default Logo;
