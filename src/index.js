import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';

const theme = createMuiTheme({
    palette: {
      primary: purple,
      secondary: green,
    },
    status: {
      danger: 'orange',
    },
  });

ReactDOM.render( 
    // <h1>Hello again, Ming Ming!!!</h1>,
    <MuiThemeProvider theme={theme}>
        <App />
    </MuiThemeProvider>,
    document.getElementById('root'))