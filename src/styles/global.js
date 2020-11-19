import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body{
    font-family: 'Source Sans Pro', sans-serif;
    color: #333;
  }
  input:focus{
    outline: none;
}
`;
