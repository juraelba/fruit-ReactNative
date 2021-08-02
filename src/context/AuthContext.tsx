import React, {
  Context,
  createContext,
  FC,
  ReactElement,
  ReactNode,
  useState,
} from 'react';
import { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-community/google-signin';
import {
  LogoutFunction,
  RegisterFunction,
  SetAuthDataActionType,
  SetUserDataActionType,
  SetShopperDataActionType,
  SignInWithEmailFunction,
  SignInWithGoogleFunction,
} from '../common/types/AuthTypes';

import {
  logout,
  register,
  signInWithEmail,
  signInWithGoogle,
} from '../resources/repositories/AuthRepo';
import User from '../common/models/User';
import Shopper from '../common/models/Shopper';

// TODO revisar el funcionamiento con los flavor
GoogleSignin.configure({
  webClientId: '903466433675-l2kb3n91fpmung7v1dkdk3k0hge0j3t9.apps.googleusercontent.com',
});
export interface IAuthContext {
  authData?: FirebaseAuthTypes.User | null;
  setAuthData?: SetAuthDataActionType;
  signInWithEmail: SignInWithEmailFunction;
  signInWithGoogle: SignInWithGoogleFunction;
  register: RegisterFunction;
  logout: LogoutFunction;
  user?: User | null;
  setUser?: SetUserDataActionType;
  shopper?: Shopper | null;
  setShopper?: SetShopperDataActionType;
}

type AuthProviderProps = {
  children: ReactNode;
};

const AuthContext: Context<IAuthContext> = createContext<IAuthContext>({
  signInWithEmail,
  signInWithGoogle,
  register,
  logout,
});

const AuthProvider: FC<AuthProviderProps> = (props: AuthProviderProps): ReactElement => {
  const { children } = props;
  const [authData, setAuthData] = useState<FirebaseAuthTypes.User | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [shopper, setShopper] = useState<Shopper | null>(null);

  return (
    <AuthContext.Provider
      value={{
        authData,
        setAuthData,
        signInWithEmail,
        signInWithGoogle,
        register,
        logout,
        user,
        setUser,
        shopper,
        setShopper,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export {
  AuthContext,
  AuthProvider,
};
