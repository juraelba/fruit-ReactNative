import { FirebaseFirestoreTypes } from '@react-native-firebase/firestore';
import NamesAndSurnames from '../interfaces/NamesAndSurnames';
import Phone from '../interfaces/Phone';
import ZipCode from '../interfaces/ZipCode';

interface Shopper {
    uid: string;
    createdAt: FirebaseFirestoreTypes.FieldValue;
    updatedAt: FirebaseFirestoreTypes.FieldValue | null;
    pictureSrc: string | null;
    email: string;
    phone: Phone;
    fullName: NamesAndSurnames;
    zipCode: ZipCode;
    deviceToken: string | null;
 }

export default Shopper;
