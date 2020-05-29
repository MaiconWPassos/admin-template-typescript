import 'styled-components';
declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      primary: string;
      secondary: string;
      pink: string;
      purple: string;
      blue: string;
      grey: string;

      background: string;
      color: string;
    };

    header: {
      background: string;
    };

    sidebar: {
      background: string;
    };

    separator: {
      background: string;
    };
  }
}
