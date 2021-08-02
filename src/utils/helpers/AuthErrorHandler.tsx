import { FirebaseAuthTypes } from '@react-native-firebase/auth';

type handleFireAuthErrorFunction = (error: FirebaseAuthTypes.NativeFirebaseAuthError) => string;

const handleFireAuthError: handleFireAuthErrorFunction = (e): string => {
  console.log(e);
  switch (e.code) {
    case 'auth/wrong-password':
      return 'The password is invalid or the user does not have a password';
    case 'auth/user-not-found':
      return 'User not found';
    case 'auth/email-already-in-use':
      return ' The email address is already in use by another account';
    case 'auth/account-exists-with-different-credential':
      return 'Mail registered with another provider (Google or Facebook)';
    case 'auth/invalid-credential':
      return 'The credential is malformed or has expired';
    case 'auth/user-disabled':
      return 'The user corresponding to the given credential has been disabled';
    case 'auth/invalid-email':
      return 'Invalid email';
    default:
      return 'Authentication error, please try again later';
  }
};

export default handleFireAuthError;
