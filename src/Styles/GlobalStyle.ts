import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

*, *::before, *:after {
    -webkit-tap-highlight-color: transparent;
}

html {
    font-family: 'Instrument Sans', sans-serif;
}

body {
    width: 100vw;
    min-height: 100vh;
    background-color: #fafafa;
    padding: 24px;
}



input,
fieldset,
button {
    border: unset;
    outline: unset;
}


`

export { GlobalStyle }