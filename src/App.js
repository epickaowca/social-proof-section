import React from 'react';
import './App.css';
import { ThemeProvider } from 'styled-components'
import * as theme from './styledConfig'
import { Provider } from 'react-redux'
import { store } from './store'
//components
import Home from './View/Home'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
      <Home/>
      </Provider>
    </ThemeProvider>    
  );
}

export default App;
