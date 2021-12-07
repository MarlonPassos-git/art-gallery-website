import { createGlobalStyle } from "styled-components";
import { progressiveClamp } from "../progressive/progressive";


export const GlobalStyles = createGlobalStyle`

    :root {
        /* Colors */

        --black: #151515;
        --orange: #D5966C;
        --white: #F2F2F2;
        --black-light: #444444;
        --white-light: #FFFFFF;


        /* Spaces */
        --container-padding: ${progressiveClamp(16, 165, 650)};


        /* Whidth Screens */

        --mobile-width: 375px;
        --tablet-width: 768px;
        --desktop-width: 1440px;
        
    
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, body, #root {
        min-height: 100vh;
        overflow-x: hidden;
    }

    #root {
        max-width: var(--desktop-width);
        margin: 0 auto;
    }

    body {
        background-color: var(--white);
    }

    

`