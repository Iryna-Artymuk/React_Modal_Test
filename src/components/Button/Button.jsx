import StyledButton from './StyledIButton';
const Button = ({ children, onClick }) => {
  console.log(onClick);
  return (
    <StyledButton type="button" onClick={onClick}>
      {children}
    </StyledButton>
  );
};

export default Button;
