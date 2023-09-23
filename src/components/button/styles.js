import styled from 'styled-components';

export const SButton = styled.button`
  width: 264px;
  height: 40px;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  text-transform: capitalize;
  color: ${(props) => (props.negative ? '#393c41' : '#ffff')};
  background-color: ${(props) =>
    props.negative ? 'rgba(244, 244, 244, 0.8)' : 'rgba(23, 26, 32, 0.8)'};
  cursor: pointer;
`;
