import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';

const show = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0px);
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  width: auto;
  button.dropdomn {
    background-color: transparent;
    padding: 8px;
    border: 1px solid transparent;
    font-size: 30px;
    cursor: pointer;
    border: 1px solid transparent;
    border-radius: 0.55rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px;
    transition: all 0.25s ease-in-out;
    color: ${(props) => props.theme.colors.color};
    outline: none;
    &:hover,
    &:focus,
    &:active {
      box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.12);
      opacity: 0.5;
    }
    .labels {
      margin-left: 5px;

      display: flex;
      justify-content: center;
      align-items: flex-start;
      flex-direction: column;
      p {
        font-size: 14px;
      }
      small {
        font-size: 10px;
      }
    }
  }
  .menu {
    position: absolute;
    right: 0;
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 200px;
    top: 80%;
    z-index: 999;
    background-color: transparent;
    animation: ${show} 0.25s linear;
    /* border-radius: 0.55rem; */
    cursor: pointer;
    button,
    a {
      background-color: ${(props) => props.theme.colors.background};
      padding: 10px 15px;
      text-decoration: none;
      border: 1px solid transparent;
      cursor: pointer;
      border: 1px solid transparent;
      border-radius: 0.55rem;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      flex-direction: row;
      margin: 2px 0px;
      transition: all 0.25s ease-in-out;
      color: ${(props) => props.theme.colors.color};
      box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.12);
      position: relative;
      font-size: 16px;
      font-weight: 500;
      &:hover {
        color: ${(props) => props.theme.colors.primary};
        background-color: ${(props) =>
          shade(0.03, props.theme.colors.background)};
        box-shadow: 1px 1px 10px
          ${(props) => shade(0.3, props.theme.colors.background)};
      }
      .icon {
        margin: 0;
        margin-right: 10px;
        /* position: absolute; */
      }
    }
  }
`;
