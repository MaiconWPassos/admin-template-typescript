import { createGlobalStyle } from 'styled-components';

import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    html, body, #root{
      height: 100%;
    }

    body{
      background:${(props) => props.theme.colors.background};
      font-size: 14px;
      color: ${(props) => props.theme.colors.color};
      font-family: 'Roboto', sans-serif;
    }
`;
