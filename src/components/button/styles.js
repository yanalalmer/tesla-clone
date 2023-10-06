import styled from 'styled-components';

export const SButton = styled.button`
  width: 100%;
  height: 40px;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  text-transform: capitalize;
  color: ${(props) => (props.isnegative ? '#393c41' : '#ffff')};
  background-color: ${(props) =>
    props.isnegative ? 'rgba(244, 244, 244, 0.8)' : 'rgba(23, 26, 32, 0.65)'};
  cursor: pointer;
  &:focus {
    outline: 0;
  }
`;
