import styled from '@emotion/styled';

const StyledButton = styled.button`
  position: absolute;
  top: ${props => {
    if (props.type === 'modal') {
      return '10px';
    }
    if (props.type === 'todoItem') {
      return '25%';
    }
  }};
  right: ${props => {
    if (props.type === 'modal') {
      return '10px';
    }
    if (props.type === 'todoItem') {
      return '5px';
    }
  }};
  background-color: transparent;
  svg {
    display: inline-block;
    width: 1em;
    height: 1em;
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
