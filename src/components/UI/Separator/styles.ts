import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 0.5px;
  margin: 10px 0px;
  background-color: ${(props) => props.theme.separator.background};
`;
