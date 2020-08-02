import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';

import Home from './Pages/Home/Home.component';

const HatsPage = () => (
  <div>
    <h1>HATS PAGE </h1>
  </div>
);

function App() {
  return (
    <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/hats' component={HatsPage} />
        </Switch>
      </BrowserRouter>
  );
}

export default App;