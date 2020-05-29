import React from 'react';
import { Container, Content } from './styles';
import Header from '../Header';
import Sidebar from '../Sidebar';
import usePersistedState from '../../utils/usePersistedState';
import LayoutContext from './context';

interface LayoutProps {
  children?: any;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [sidebar, setSidebar] = usePersistedState<Boolean>('sidebar', true);

  const toggleSideBar = () => {
    setSidebar(!sidebar);
  };

  return (
    <LayoutContext.Provider value={{ toggleSideBar }}>
      <Container sideBar={sidebar}>
        <Sidebar />
        <Header />
        <Content>{children}</Content>
      </Container>
    </LayoutContext.Provider>
  );
};

export default Layout;
