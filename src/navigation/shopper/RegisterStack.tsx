import React, { FC, ReactElement } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ShopperScreens } from '../../common/navigation/ScreenNames';

import ShopperRegisterScreen from '../../screens/Shopper/ShopperRegisterScreen';

const Stack = createStackNavigator();

export const RegisterStack: FC = (): ReactElement => (
  <Stack.Navigator>
    <>
      <Stack.Screen
        name={ShopperScreens.ShopperRegisterForm}
        component={ShopperRegisterScreen}
        options={{ headerShown: false }}
      />
    </>
  </Stack.Navigator>
);

export default RegisterStack;
