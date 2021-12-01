import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Root from './pages/index';
import { AppProvider} from "./utils/store";


ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
    <Root />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

