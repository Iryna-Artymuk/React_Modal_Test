import styled from '@emotion/styled';

const StyledButton = styled.button`
  /*  
    position: absolute;

    top: 5px;
    right: 5px; */
  /* width: 30px;
  height: 30px; */

  display: flex;
  justify-content: center;
  align-items: center;
  color: inherit;
  background-color: transparent;

  border-radius: 50%;

  svg {
    display: inline-block;
    width: 2em;
    height: 2em;
    stroke-width: 0;
    stroke: currentColor;
    fill: black;
    &:hover,
    &:focus {
      fill: #5b034c;
      stroke: #5b0341;
      font-weight: 700;
    }
  }
`;

export default StyledButton;
