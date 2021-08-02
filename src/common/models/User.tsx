import { FirebaseFirestoreTypes } from '@react-native-firebase/firestore';

import UserStatus from '../enums/UserStatus';
import TermsAgreement from '../interfaces/TermsAgreement';
import UserStripe from '../interfaces/stripe/UserStripe';

interface User {
    uid: string;
    createdAt: FirebaseFirestoreTypes.FieldValue;
    updatedAt: FirebaseFirestoreTypes.FieldValue | null;
    status: UserStatus;
    isShopper: boolean;
    isDealer: boolean;
    isDriver: boolean;
    termsAgreement: TermsAgreement;
    stripe: UserStripe | null;
 }

export default User;
