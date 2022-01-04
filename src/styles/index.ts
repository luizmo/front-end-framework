import { createGlobalStyle } from 'styled-components';

export function px2rem(size: number, context = 16) {
  return `${size / context}rem`;
}

const GlobalStyle = createGlobalStyle`
  //resets//
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    -ms-box-sizing: border-box;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    font-smoothing: subpixel-antialiased;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-touch-callout:  none;
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
    -ms-flex-negative: 1;
    font-family: 'Roboto', sans-serif;
    @media screen and (max-width: 997px) {
      -webkit-tap-highlight-color: rgba(0,0,0,0);
      -moz-tap-highlight-color: rgba(0,0,0,0);
    }
  }
  :root{
    --primary: #7900df;
    --white: #FFFFFF;
    --alert: #FF0000;
    --green: #029914;
    --white-text: #FFFFFF;
    --dark-title: #061938;
    --neutral-grey: #D3D8DD;
    --dark-grey: #6B778C;
  }
  body{
    font-family: 'Roboto', sans-serif;
  }
  h1, h2, h3, h4, h5, h6, p, button, input, select, textarea { padding: 0; }
  hr, img { border: none; }
  label { appearance: none; -webkit-appearance: none; -moz-appearance: none; }
  input:focus, textarea:focus, select:focus, button:focus { outline: 0; }
  input:invalid, textarea:invalid { box-shadow: none; }
  a { text-decoration: none; color: inherit; }
  a:active, a:hover {
    outline: 0;
  }
  a, select { cursor: pointer; }
  input, select, textarea { appearance: none; font: inherit; border-radius: 0;
    &::placeholder { color: inherit; opacity: 1; }
  }
  button, input, select, textarea, optgroup { background: transparent; border: none; font: inherit; color: inherit; }
  textarea { overflow-y: auto; resize: none; }
  select::-ms-expand { display: none; }
  article, aside, details, figcaption, figure,
  footer, header, hgroup, main, menu, nav, section, summary {display: block; }
  ol, ul { list-style: none; }
  caption, th, td { text-align: left; font-weight: normal; }
  audio, canvas, progress, video { display: inline-block; vertical-align: baseline; }
  audio:not([controls]) { display: none; height: 0; }
  b, strong {font-weight: bold; }
  svg:not(:root) { overflow: hidden;  }
  button, input[type="button"], input[type="reset"], input[type="submit"] {-webkit-appearance: button; cursor: pointer; }
  input[type="search"]::-webkit-search-cancel-button, input[type="search"]::-webkit-search-decoration { -webkit-appearance: none; }
  input:-webkit-autofill{ -webkit-text-fill-color: #000!important;  transition: background-color 50000s ease-in-out 0s; font: inherit; }
  html{
    @media screen and (min-width: 1440px) {
      font-size: 16px !important;
    }
    @media screen and (max-width: 1439px) and (min-width: 1281px) {
      font-size: 13.5px !important;
    }
    @media screen and (max-width: 1280px) and (min-width: 1024px) {
      font-size: 12.5px !important;
    }
    @media screen and (max-width: 1023px) and (min-width: 998px) {
      font-size: 12px !important;
    }
    @media screen and (max-width: 997px){
      font-size: 16px !important;
    }
  }
`;

export default GlobalStyle;