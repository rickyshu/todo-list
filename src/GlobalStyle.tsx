import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
const GlobalStyles = createGlobalStyle` 
    ${reset}
    :root {
  --bluish-gray-10: #f5f7f9;
  --bluish-gray-50: #f2f4f7;
  --bluish-gray-100: #eceef3;
  --bluish-gray-200: #dfe3ec;
  --bluish-gray-300: #ccd3e0;
  --bluish-gray-400: #b2bdd1;
  --bluish-gray-500: #8c9cba;
  --bluish-gray-600: #667ba3;
  --bluish-gray-700: #455573;
  --bluish-gray-800: #262f40;
  --bluish-gray-900: #0f1319;
  --white: #ffffff;
  --gray-10: #f7f7f7;
  --gray-50: #f2f2f2;
  --gray-100: #f0f0f0;
  --gray-200: #e6e6e6;
  --gray-300: #d6d6d6;
  --gray-400: #c2c2c2;
  --gray-500: #a3a3a3;
  --gray-600: #858585;
  --gray-700: #5c5c5c;
  --gray-800: #333333;
  --gray-900: #141414;
  --black: #000000;
  --coz-purple-10: #f3f2fd;
  --coz-purple-50: #efedfc;
  --coz-purple-100: #e8e5fb;
  --coz-purple-200: #d8d3f8;
  --coz-purple-300: #c0b9f4;
  --coz-purple-400: #a296ee;
  --coz-purple-500: #7361e5;
  --coz-purple-600: #452cdd;
  --coz-purple-700: #2c1a9e;
  --coz-purple-800: #190e58;
  --coz-purple-900: #0a0623;
  --coz-blue-10: #f2f5fd;
  --coz-blue-50: #edf1fc;
  --coz-blue-100: #e4ebfb;
  --coz-blue-200: #d2ddf9;
  --coz-blue-300: #b8c9f5;
  --coz-blue-400: #94adf0;
  --coz-blue-500: #5e85e8;
  --coz-blue-600: #295ce0;
  --coz-blue-700: #173ea1;
  --coz-blue-800: #0d2259;
  --coz-blue-900: #050e24;
  --coz-orange-50: #fff2e9;
  --coz-orange-100: #ffebde;
  --coz-orange-200: #ffe1cc;
  --coz-orange-300: #ffcead;
  --coz-orange-400: #ffb685;
  --coz-orange-500: #ff9247;
  --coz-orange-600: #ff6e0a;
  --coz-orange-700: #b84b00;
  --mint-50: #ebfff7;
  --mint-100: #e0fff2;
  --mint-200: #ccffea;
  --mint-300: #adffdd;
  --mint-400: #84ffcb;
  --mint-500: #47ffb2;
  --mint-600: #0aff98;
  --mint-700: #00b86a;
  --mint-800: #00663b;
  --peach-50: #ffeeeb;
  --peach-100: #ffe6e0;
  --peach-200: #ffd5cc;
  --peach-300: #ffbcad;
  --peach-400: #ff9b85;
  --peach-500: #ff6947;
  --peach-600: #ff360a;
  --peach-700: #b82100;
  --blackalpha-10: #00000008;
  --blackalpha-50: #0000000a;
  --blackalpha-100: #0000000f;
  --blackalpha-200: #0000001a;
  --blackalpha-300: #00000029;
  --blackalpha-400: #0000003d;
  --blackalpha-500: #0000005c;
  --blackalpha-600: #0000007a;
  --blackalpha-700: #000000a3;
  --blackalpha-800: #000000cc;
  --blackalpha-900: #000000eb;
  /* boxShadow */
  --15px: 0px 0px 15px 0px #00000026;
  --7px: 0px 0px 7px 0px #00000040;
  --big-box: 0px 3px 6px -4px #0000001f, 0px 6px 16px 0px #00000014,
    0px 9px 28px 8px #0000000d;
    }
    
    a{
        text-decoration: none;
        color: inherit;
    }
    *{
        box-sizing: border-box;
    }
    body {
        display:flex; 
        justify-content:center; 
        align-items:center;      
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        background-color: ${(props) => props.theme.style.backgroundColor};
        color: ${(props) => props.theme.style.color};
        padding-top: 50px;
    }
    #root{
        margin-top:20rem;
    }
`;

export default GlobalStyles;
