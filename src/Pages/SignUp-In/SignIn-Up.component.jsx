import React from 'react';
import SignIn from '../../Components/SignIn/SignIn.component';
import SignUp from '../../Components/SignUp/sign-up.component';
import './SignIn-Up.styles.scss';




const SignInUp = () => (
  <div className='sign-in-and-sign-up'>
    <SignIn />
    <SignUp />
  </div>
);

export default SignInUp;