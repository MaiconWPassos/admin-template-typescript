import styled from 'styled-components';
import { Form as Unform } from '@unform/web';

import { shade } from 'polished';

export const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.colors.background};
`;

export const ButtonToggleTheme = styled.button`
  border: 0;
  background: transparent;
  color: ${(props) => props.theme.colors.color};
  cursor: pointer;
  outline: none;
  font-size: 40px;
  position: fixed;
  right: 20px;
  bottom: 20px;
  transition: 0.2s ease-in-out;

  &:hover {
    color: ${(props) => props.theme.colors.secondary};
  }
`;

export const CardLogin = styled.div`
  width: 100%;
  max-width: 400px;
  height: 100%;
  max-height: 400px;
  background-color: ${(props) => props.theme.colors.background};
  padding: 20px 30px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  box-shadow: 1px 3px 10px
    ${(props) => shade(0.3, props.theme.colors.background)};

  .logo {
    width: 100px;
  }
`;

export const Form = styled(Unform)`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const ButtonSubmit = styled.button`
  background: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.color};
  padding: 10px 20px;
  font-size: 16px;
  font-weight: 500;
  height: 50px;
  border: 1px solid ${(props) => props.theme.colors.primary};
  width: 100%;
  margin: 10px 0;
  border-radius: 2px;
  outline: none;
  transition: 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  svg {
    position: absolute;
    right: 20px;
  }

  &:hover {
    background-color: ${(props) => props.theme.colors.secondary};
    border-color: ${(props) => props.theme.colors.secondary};
  }
`;
