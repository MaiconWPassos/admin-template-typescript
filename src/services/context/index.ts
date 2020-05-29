import { createContext } from 'react';

interface AppContext {
  toggleTheme(): void;
}
export default createContext<AppContext>({
  toggleTheme: () => {},
});
