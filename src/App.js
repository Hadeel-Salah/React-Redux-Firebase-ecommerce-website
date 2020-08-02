import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home.component';
import Shop from './Pages/Shop/Shop.component'
import Header from './Layout/Header.component';
import SignInUp from './Pages/SignUp-In/SignIn-Up.component';

function App() {
  return (
    <BrowserRouter>
    <Header />
        <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/shop' component={Shop} />
        <Route path='/signin' component={SignInUp} />

      </Switch>
      </BrowserRouter>
  );
}

export default App;