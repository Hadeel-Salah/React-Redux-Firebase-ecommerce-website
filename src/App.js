import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home.component';
import Shop from './Pages/Shop/Shop.component'

function App() {
  return (
    <BrowserRouter>
        <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/shop' component={Shop} />
      </Switch>
      </BrowserRouter>
  );
}

export default App;