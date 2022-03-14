import React from 'react'
import {createTheme, ThemeProvider} from '@mui/material/styles'

//source https://mui.com/customization/theming/

interface Props {
  // any props that come into the component
}

const themeOptions = {
  //palette
  palette: {
    type: 'light',
    primary: {
      main: '#EF3333',
    },
    secondary: {
      main: '#F9712D',
    },
    link: {
      main: '#4F3CC9',
    },
    background: {
      default: '#ffffff',
      paper: '#f6f6f6',
    },
    error: {
      main: '#EF3333',
    },
    warning: {
      main: '#FF8717',
    },
    success: {
      main: '#34C759',
    },
    info: {
      main: '#4F3CC9',
    },
  },
  //components
  components: {
    // Name of the component
    MuiButtonBase: {
      defaultProps: {
        // The props to change the default for.
        disableRipple: true, // No more ripple!
      },
    },
  },
}

const theme = createTheme(themeOptions)

const CustomTheme: React.FC<Props> = function Theme({children}) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export default CustomTheme
