import { createGlobalStyle } from 'styled-components';

import { defaultTheme } from 'theme/color';

const GlobalStyle = createGlobalStyle`

  /* Better Font Rendering =========== */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;


html {
  box-sizing: border-box;
  &:lang(en){
    font-family: Poppins, sans-serif;
    line-height:1.5;
  }
  &:lang(ko){
    font-family:  Pretendard, sans-serif;
    line-height:1.5;
  }
}


*,
*:before,
*:after {
  box-sizing: inherit;
}

html, body {
  color: ${defaultTheme.color.mainFont};
  word-break: keep-all;
}

html:lang(ko-KR) body {
  font-family: Pretendard, sans-serif;
}

html,
body,
h1,
h2,
h3,
h4,
h5,
h6,
p,
ol,
ul,
button,
input,
pre {
  margin: 0;
  padding: 0;
}

body{
    #root {
      height: 100vh;
    }
}

ol,
ul {
  list-style: none;
}

a,
a:hover {
  color: inherit;
  text-decoration: none;
  cursor: pointer;
}

button,
[type="button"],
[type="reset"],
[type="submit"] {  
  -webkit-appearance: button;
}

button {
  color: inherit;
  font-family: inherit;
  border: none;
  background: none;
  cursor: pointer;
  &:disabled{
    cursor: not-allowed;
  }
}

input, textarea, select{
  font-family: inherit !important;
  border: 0;
  background: transparent;
  -webkit-appearance: none;
}

input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active {
  transition: background-color 5000s ease-in-out 0s;
  -webkit-transition: background-color 9999s ease-out;
  -webkit-box-shadow: 0 0 0px 1000px white inset !important;
  font-family: inherit !important;
}

input::-webkit-autofill::first-line {
  font-family: inherit !important;
  font-size: inherit !important;
}

// safari에서 disabled input, textarea text color 설정용
input:disabled, textarea:disabled, input:disabled::placeholder, textarea:disabled::placeholder {
  -webkit-text-fill-color: #bcbcbc; 
}



.mt-20{
  margin-top: 20px;
}
.mb-20{
  margin-bottom: 20px;
}

.mb-30{
  margin-bottom: 30px;
}

.ml-10{
  margin-left: 10px;
}

.sub-font {
  color: ${defaultTheme.color.subfontgray};
}

.flex-center-center{
  display: flex;
  justify-content: center;
  align-items: center;
}

.ellipsis {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}

`;

export default GlobalStyle;
