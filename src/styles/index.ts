import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  
  html {
    font-size: 62.5%;
    font-family: 'Roboto', sans-serif;

    body {
      font-size: 1.6rem;

      * {
        color: ${({ theme }) => theme.colors.text}
      }
    }
  }

  a {
    text-decoration: none;
  }

  li {
    list-style-type: none;
  }

  button {
    cursor: pointer;
    
    border: none;
    background-color: transparent;
  }

  input[type="checkbox"] {
    &, &:focus, &:hover {
      box-shadow: initial;
    }
  }
`
