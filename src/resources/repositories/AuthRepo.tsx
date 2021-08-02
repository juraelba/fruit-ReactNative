import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-community/google-signin';
import { FirebaseFirestoreTypes as FFT } from '@react-native-firebase/firestore';
import * as frUserProvider from '../providers/FirestoreUser';
import * as frShopperProvider from '../providers/FirestoreShopper';
import {
  LogoutFunction,
  RegisterFunction,
  SignInWithEmailFunction,
  SignInWithGoogleFunction,
} from '../../common/types/AuthTypes';
import User from '../../common/models/User';
import Shopper from '../../common/models/Shopper';

const signInWithEmail: SignInWithEmailFunction = async (email, password) => {
  await auth().signInWithEmailAndPassword(email, password);
};

const register: RegisterFunction = async (email, password) => {
  await auth().createUserWithEmailAndPassword(email, password);
};

const signInWithGoogle: SignInWithGoogleFunction = async () => {
  const { idToken } = await GoogleSignin.signIn();
  const googleCredential = auth.GoogleAuthProvider.credential(idToken);
  await auth().signInWithCredential(googleCredential);
};

const logout: LogoutFunction = async () => {
  await auth().signOut();
};

const getUser = (uid: string) => frUserProvider.getUser(uid);

const setUser = async (uid: string, data: User): Promise<FFT.DocumentData> => {
  await frUserProvider.setUser(uid, data);
  const userDocument = await frUserProvider.getUser(uid);
  return userDocument;
};

const updateUser = (uid: string, data: Partial<User>) => frUserProvider.updateUser(uid, data);

const getShopper = (uid: string) => frShopperProvider.getShopper(uid);

const setShopper = async (uid: string, data: Shopper): Promise<FFT.DocumentData> => {
  await frShopperProvider.setShopper(uid, data);
  const shopperData = await frShopperProvider.getShopper(uid);
  return shopperData;
};

export {
  signInWithEmail,
  register,
  signInWithGoogle,
  logout,
  getUser,
  setUser,
  updateUser,
  getShopper,
  setShopper,
};
