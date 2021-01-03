import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import {ProductProvider} from "./context";

import reportWebVitals from './reportWebVitals';

ReactDOM.render(
    <ProductProvider>
        <Router>
            <App />
        </Router>
    </ProductProvider>
      ,
      document.getElementById('root')
);

reportWebVitals();
