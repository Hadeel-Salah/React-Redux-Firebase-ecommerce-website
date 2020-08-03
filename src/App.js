import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home.component';
import Shop from './Pages/Shop/Shop.component'
import Header from './Layout/Header.component';
import SignInUp from './Pages/SignUp-In/SignIn-Up.component';
import { auth } from './firebase/firebase.utils';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });

      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
  return (
    <BrowserRouter>
        <Header currentUser={this.state.currentUser} />
        <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/shop' component={Shop} />
        <Route path='/signin' component={SignInUp} />

      </Switch>
      </BrowserRouter>
  )
}
}
export default App;
