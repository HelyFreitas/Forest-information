import { createGlobalStyle } from "styled-components";

import Fundo from "../assets/fundo.jpg";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;

        box-sizing: border-box;
        text-decoration: none;
        list-style: none;
    }

    body{
        min-height: 100vh;
        width: 100%;

        background-image: url(${Fundo});
        background-repeat: no-repeat;
        background-size: cover;

        /* display: flex; */
        /* align-items: center; */
        /* justify-content: center; */

        font-family: 'Poppins', sans-serif;
    }
`;
