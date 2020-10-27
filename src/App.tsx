import React from 'react';
import { BrowserRouter, } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


import Routes from './routes'

const App: React.FC = () => (
  <BrowserRouter>
    <Routes />
  </BrowserRouter>
)

export default App;
