import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  height: 60px;
  background: ${(props) => props.theme.header.background};
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  border-bottom: 1px solid
    ${(props) => shade(0.1, props.theme.colors.background)};
  transition: 0.2s ease-in-out;
`;

export const ButtonToogle = styled.button`
  border: 0;
  outline: none;
  height: 100%;
  background: transparent;
  color: ${(props) => props.theme.colors.color};
  font-size: 30px;
  display: flex;
  align-items: center;
  transition: 0.2s;
  cursor: pointer;

  &:hover {
    opacity: 0.5;
  }
`;

export const Right = styled.div`
  height: 100;
  display: flex;
  justify-content: center;
  align-items: center;
`;
