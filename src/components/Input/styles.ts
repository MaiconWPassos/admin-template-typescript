import styled from 'styled-components';
import { shade, transparentize } from 'polished'

export const Container = styled.div`
  margin: 10px 0;
  width: 100%;
  display:  flex;
  flex-direction: column;

  input{
    padding: 10px 20px;
    width: 100%;
    font-size: 16px;
    height: 50px;
    background-color: ${props => shade(.1,props.theme.colors.background)};
    outline: none;
    border:1px solid transparent;
    color: ${props => props.theme.colors.color};

    border-radius:  5px;
    transition: 0.2s; 
    &:focus, &:active {
      background-color: ${props => transparentize(.9, props.theme.colors.primary)};
      border-color: ${props => transparentize(.8,props.theme.colors.primary)};
    }

    
  
  }
  label{
      font-size: 14px;
      color: ${props => props.theme.colors.color};
      margin: 10px 0;

    }
`;
