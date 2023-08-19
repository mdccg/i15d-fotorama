import { createGlobalStyle } from 'styled-components'
import BoldFont from './Raleway-Bold.ttf'
import RegularFont from './Raleway-Regular.ttf'

export const FontStyles = createGlobalStyle`
    @font-face {
        font-family: 'bold';
        src: url(${BoldFont});
    }
    @font-face {
        font-family: 'regular';
        src: url(${RegularFont});
    }
`
