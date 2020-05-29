import React from 'react';
import { BsPerson } from 'react-icons/bs';

import MENU from '../../constants/menu';

import {
  Container,
  HeaderUser,
  IconContainer,
  LabelsContainer,
} from './styles';
import { NavLink } from 'react-router-dom';

const Sidebar: React.FC = () => {
  return (
    <Container>
      <HeaderUser className='item'>
        <IconContainer>
          <BsPerson />
        </IconContainer>
        <LabelsContainer>
          <strong>Maicon</strong>
          <small>maicon@mwps.com.br</small>
        </LabelsContainer>
      </HeaderUser>

      {MENU.map((item) => {
        const { link, url, icon: Icon, action, label } = item;
        if (link) {
          return (
            <NavLink to={url} className='item'>
              <IconContainer>
                <Icon />
              </IconContainer>
              <LabelsContainer>
                <strong>{label}</strong>
              </LabelsContainer>
            </NavLink>
          );
        } else {
          return (
            <button onClick={action} className='item' type='button'>
              <IconContainer>
                <Icon />
              </IconContainer>
              <LabelsContainer>
                <strong>{label}</strong>
              </LabelsContainer>
            </button>
          );
        }
      })}
    </Container>
  );
};

export default Sidebar;
