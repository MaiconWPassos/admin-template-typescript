import styled from 'styled-components';

interface ContainerLayout {
  sideBar: Boolean;
}

export const Container = styled.div<ContainerLayout>`
  width: 100%;
  height: 100%;

  display: grid;

  grid-template-columns: ${(props) => (props.sideBar ? 250 : 60)}px 1fr;
  grid-template-rows: 60px 1fr;

  grid-template-areas: 'sidebar header ' 'sidebar content';
  grid-gap: 20px;

  transition: 0.2s ease-in-out;
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  grid-area: content;
  padding: 10px;
  transition: 0.2s ease-in-out;
`;
