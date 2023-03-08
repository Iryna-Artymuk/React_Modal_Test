import StyledButton from './StyledIconButton';
const IconButton = ({ children, onClick, ...allyProps }) => {
  console.log(onClick);
  return (
    <StyledButton type="button" onClick={onClick}>
      {children}
    </StyledButton>
  );
};

export default IconButton;
