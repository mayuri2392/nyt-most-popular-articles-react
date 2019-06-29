import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { BrowserRouter } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import theme from './theme.js'

ReactDOM.render(
    <BrowserRouter>
      <div className="App">
        <MuiThemeProvider theme={theme}>
           <App />
        </MuiThemeProvider>
      </div>
    </BrowserRouter>
  , document.getElementById('root'));
  registerServiceWorker();
