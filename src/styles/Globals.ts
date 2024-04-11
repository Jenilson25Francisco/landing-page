import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    html body #root{
        height: 100vh;
    }

    body{
        font-family: 'Poppins', sans-serif;
        -webkit-font-smoothing: antialiased;
        background: #F8FDFF;
;
    }

    button{
        background: none;
        border: none;
        outline: none;
    }

    a{
        text-decoration: none;
        outline: none;
    }
`