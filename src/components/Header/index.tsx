import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import Switch from 'react-switch';
import { shade } from 'polished';

import { Container, ButtonToogle, Right } from './styles';
import AppContext from '../../services/context';
import LayoutContext from '../Layout/context';

import { BsList, BsPower, BsGearFill } from 'react-icons/bs';
import Dropdown from '../UI/Dropdown';

interface AppContext {
  toggleTheme(): void;
}

const Header: React.FC = () => {
  const { colors, title } = useContext(ThemeContext);
  const { toggleTheme } = useContext(AppContext);
  const { toggleSideBar } = useContext(LayoutContext);

  return (
    <Container>
      <div>
        <ButtonToogle onClick={toggleSideBar}>
          <BsList />
        </ButtonToogle>
      </div>
      <Right>
        <Switch
          onChange={toggleTheme}
          checked={title === 'dark'}
          checkedIcon={false}
          uncheckedIcon={false}
          height={10}
          width={40}
          handleDiameter={20}
          offColor={shade(0.3, colors.secondary)}
          onColor={shade(0.3, colors.secondary)}
        />
        <Dropdown icon={<BsGearFill />} iconSize={22}>
          <button onClick={() => (window.location.href = '/')}>
            <span className='icon'>
              <BsPower />
            </span>
            Sair
          </button>
        </Dropdown>
      </Right>
    </Container>
  );
};

export default Header;
