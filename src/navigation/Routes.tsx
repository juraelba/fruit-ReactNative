import React, {
  FC,
  ReactElement,
  useContext,
  useEffect,
  useState,
} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import auth, { FirebaseAuthTypes as FAT } from '@react-native-firebase/auth';

import { AuthContext } from '../context/AuthContext';

import { AuthStack } from './AuthStack';
import { AppStack } from './AppStack';

export const Routes: FC = (): ReactElement => {
  const [initializing, setInitializing] = useState<boolean>(true);
  const {
    authData, setAuthData, setShopper, setUser,
  } = useContext(AuthContext);

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  async function onAuthStateChanged(authState: FAT.User | null) {
    setAuthData?.(authState);
    if (!authState) {
      setShopper?.(null);
      setUser?.(null);
    }
    if (initializing) setInitializing(false);
  }

  return (
    <NavigationContainer>
      {authData ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default Routes;
