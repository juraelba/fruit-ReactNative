import React, { FC, ReactElement } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthScreens } from '../common/navigation/ScreenNames';
import LoginScreen from '../screens/Auth/LoginScreen';
import RegisterScreen from '../screens/Auth/RegisterScreen';

const Stack = createStackNavigator();

export const AuthStack: FC = (): ReactElement => (
  <Stack.Navigator>
    <>
      <Stack.Screen
        component={LoginScreen}
        name={AuthScreens.Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        component={RegisterScreen}
        name={AuthScreens.Register}
        options={{ headerShown: false }}
      />
    </>
  </Stack.Navigator>
);

export default AuthStack;
