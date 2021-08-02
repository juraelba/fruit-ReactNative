import React, {
  FC,
  ReactElement,
  useContext,
  useEffect,
  useState,
} from 'react';
import Snackbar from 'react-native-snackbar';
import firestore, { FirebaseFirestoreTypes as FT } from '@react-native-firebase/firestore';

import { AuthContext } from '../context/AuthContext';

import * as authRepo from '../resources/repositories/AuthRepo';
import FirestoreErrorHandler from '../utils/helpers/FirestoreErrorHandler';

import MainLoader from '../components/loaders/MainLoader';

import RegisterStack from './shopper/RegisterStack';
import ShopperStack from './shopper/ShopperStack';
import UserStatus from '../common/enums/UserStatus';
import User from '../common/models/User';

export const AppStack: FC = (): ReactElement => {
  const {
    authData, logout, setUser, shopper, setShopper,
  } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const handleUser = async () => {
    try {
      if (authData) {
        let userData: FT.DocumentData = await authRepo.getUser(authData.uid);

        if (userData.data()) {
          await handleShopperProfile();
          return;
        }

        userData = await createUser();
        setUser?.(userData.data());
      }
    } catch (e) {
      logout();
      Snackbar.show({
        text: FirestoreErrorHandler(e),
      });
    } finally {
      setIsLoading(false);
    }
  };

  async function createUser() {
    const userObject: User = {
      uid: authData!.uid,
      createdAt: firestore.FieldValue.serverTimestamp(),
      updatedAt: null,
      status: UserStatus.active,
      isDealer: false,
      isDriver: false,
      isShopper: false,
      stripe: null,
      termsAgreement: {
        isAccepted: true,
        updatedAt: firestore.FieldValue.serverTimestamp(),
      },
    };
    const userData = await authRepo.setUser(authData!.uid, userObject);
    return userData;
  }

  useEffect(() => {
    handleUser();
  }, []);

  async function handleShopperProfile() {
    const shopperData: FT.DocumentData = await authRepo.getShopper(authData!.uid);
    setShopper?.(shopperData.data());
  }

  if (isLoading) return <MainLoader />;
  if (shopper) return <ShopperStack />;
  return <RegisterStack />;
};

export default AppStack;
