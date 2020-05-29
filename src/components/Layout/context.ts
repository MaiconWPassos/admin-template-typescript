import { createContext } from 'react';

interface AppContext {
  toggleSideBar?(): void;
}
export default createContext<AppContext>({});
