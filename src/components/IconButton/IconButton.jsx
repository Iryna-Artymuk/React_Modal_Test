import StyledButton from './StyledIconButton';
const IconButton = ({ children, onClick, ...allyProps }) => {
  return (
    <StyledButton type="button" onClick={onClick} {...allyProps}>
      {children}
    </StyledButton>
  );
};

export default IconButton;
