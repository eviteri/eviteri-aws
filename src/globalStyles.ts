import { createGlobalStyle } from 'styled-components'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const GlobalStyle = createGlobalStyle`
    .js-loading *, 
    .js-loading *:before, 
    .js-loading *:after {
        animation-play-state: paused !important;
    }
    body{
        padding: 0;
        margin: 0;
        font-family: niveau-grotesk, sans-serif;
        font-size: 16px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.5;
        letter-spacing: normal;
        font-display: fallback; /* <- this can be added to each @font-face definition */
    }
    body * {
        box-sizing: border-box;
    }
    .sb-show-main.sb-main-padded {
        padding: 0 !important;
    }
    .hidden{
        height: 0;
        overflow: hidden;
    }
`

export default GlobalStyle
