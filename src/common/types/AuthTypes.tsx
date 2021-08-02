import { FirebaseAuthTypes } from '@react-native-firebase/auth';
import Shopper from '../models/Shopper';
import User from '../models/User';

export type SetAuthDataActionType = (user: FirebaseAuthTypes.User | null) => void;
export type SignInWithEmailFunction = (email: string, password: string) => Promise<void>;
export type SignInWithGoogleFunction = () => Promise<void>;
export type RegisterFunction = (email: string, password: string) => Promise<void>;
export type LogoutFunction = () => Promise<void>;
export type SetUserDataActionType = (user: User | null) => void;
export type SetShopperDataActionType = (shopper: Shopper | null) => void;
