import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../screens/Login';
import Signup from '../screens/SignUp';

export type authStackScreen = {
  Login: any;
  Signup: any;
};

const Stack = createStackNavigator<authStackScreen>();

const AuthStack = () => {
  return (
    <>
      <Stack.Screen name={'Login'} component={Login} />
      <Stack.Screen name={'Signup'} component={Signup} />
    </>
  );
};

export default AuthStack;
