import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {
  Login,
} from '../../screens';

const StackAuth = createStackNavigator();

export const AuthStack = () => {
  const navigationOptions = () => ({
    headerShown: false,
    animationEnabled: true,
  });
  return (
    <StackAuth.Navigator initialRouteName="Login">
      <StackAuth.Screen
        name="Login"
        component={ Login }
        options={ navigationOptions }
      />
    </StackAuth.Navigator>
  );
};
