import React, { Component } from 'react';
import { HashRouter, Route, Switch} from 'react-router-dom';
import './App.css';
import { DefaultLayout } from './container/DefaultLayout';
import { Login,  } from './views/Pages';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import {blue} from './mui'
const theme = createMuiTheme({
  palette: {
    primary: {
      main: blue[700],
    },
    secondary: {
      light: '#daa520',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
    error: {
      main: '#f86c6b'
    },
    success:{
      main: 'green'
    },
    disabled: {
      main:'#daa520'
    },
    textPrimary: {
      main: '#daa520'
    }
  },
  direction: 'ltr',
  overrides: {
    MuiStepLabel: {
        label: {
            backgroundColor: "#d9ecbc",
            color: 'white',
            '&$active': {
                color: 'primary',
                backgroundColor: "#fff",
                border: "2px solid #00913e",
                
            },
            '&$completed': {
                color: '#fff',
                backgroundColor: "#00913e"
            },
        },
    },
    MuiStep:{
      horizontal:{
        paddingLeft: 0,
        paddingRight: 0
      }
    }
},
});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
      <div className="App">
      <HashRouter>
      <Switch>
      <Route exact path="/login" name="Login" component={Login} />
      <Route path="/" name="Home" component={DefaultLayout} />
      </Switch>
      </HashRouter>
      
      </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
