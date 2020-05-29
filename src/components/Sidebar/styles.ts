import styled from 'styled-components';
import { shade, tint } from 'polished';

export const Container = styled.div`
  height: 100%;

  background: ${(props) => props.theme.sidebar.background};
  border-right: 1px solid
    ${(props) => shade(0.1, props.theme.colors.background)};
  grid-area: sidebar;
  transition: width 0.2s ease-in-out;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  overflow-x: hidden;

  .item {
    height: 60px;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    overflow-x: hidden;
    width: 250px;
    text-decoration: none;
    color: ${(props) => props.theme.colors.color};
    transition: 0.2s;

    &.active {
      color: ${(props) => props.theme.colors.secondary};
      background: ${(props) => shade(0.2, props.theme.sidebar.background)};
      &:hover {
        opacity: 1;
        color: ${(props) => props.theme.colors.secondary};
        background: ${(props) => shade(0.2, props.theme.sidebar.background)};
      }
    }
    svg {
      font-size: 18px;
    }

    &:hover {
      opacity: 0.7;
      color: ${(props) => props.theme.colors.primary};
      background: ${(props) => shade(0.3, props.theme.sidebar.background)};
    }
  }
`;

export const HeaderUser = styled.header`
  background: ${(props) => tint(0.05, props.theme.sidebar.background)};
  height: 120px !important;
`;

export const IconContainer = styled.div`
  width: 60px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LabelsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 10px;
  overflow-x: hidden;

  strong {
    font-size: 14px;
    font-weight: 900;
  }

  small {
    font-size: 10px;
    font-weight: 00;
  }
`;
