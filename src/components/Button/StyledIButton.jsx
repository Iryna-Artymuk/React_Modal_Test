import styled from '@emotion/styled';

const StyledButton = styled.button`
  width: 200px;
  margin: auto;
  border-radius: 10px;
  padding: 12px 24px;
  background-color: aqua;
  color: purple;
  font-weight: 800;
  text-transform: uppercase;

  &:hover,
  &:focus {
    background-color: #00e5ff;
  }

  &:active {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  }
`;

export default StyledButton;
