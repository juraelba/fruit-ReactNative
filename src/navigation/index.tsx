import React, { FC, ReactElement } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AuthProvider } from '../context/AuthContext';
import Routes from './Routes';

const AppNavigator: FC = (): ReactElement => (
  <SafeAreaProvider>
    <AuthProvider>
      <Routes />
    </AuthProvider>
  </SafeAreaProvider>

);

export default AppNavigator;
