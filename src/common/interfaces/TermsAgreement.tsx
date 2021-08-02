import { FirebaseFirestoreTypes } from '@react-native-firebase/firestore';

interface TermsAgreement {
    isAccepted: boolean;
    updatedAt: FirebaseFirestoreTypes.FieldValue;
 }

export default TermsAgreement;
