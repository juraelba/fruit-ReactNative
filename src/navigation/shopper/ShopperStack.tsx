import React, { FC, ReactElement } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {ShopperScreens} from '../../common/navigation/ScreenNames';

import FeedScreen from '../../screens/Shopper/FeedScreen';
import SearchScreen from '../../screens/Shopper/SearchScreen';
import VendorProfileScreen from '../../screens/Shopper/VendorProfileScreen';

const Stack = createStackNavigator();

export const ShopperStack: FC = (): ReactElement => (
  <Stack.Navigator>
    <>
      <Stack.Screen
        name={ShopperScreens.Feed}
        component={FeedScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={ShopperScreens.Search}
        component={SearchScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={ShopperScreens.VendorProfile}
        component={VendorProfileScreen}
        options={{ headerShown: false }}
      />
    </>
  </Stack.Navigator>
);

export default ShopperStack;
