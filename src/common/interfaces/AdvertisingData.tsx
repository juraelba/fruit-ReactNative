import { FirebaseFirestoreTypes } from '@react-native-firebase/firestore';

interface AdvertisingData {
    value: number;// TODO Cual es la prioridad del orden entre varios publcitados  ¿Es valor?
    startDate: FirebaseFirestoreTypes.FieldValue;
    endDate: FirebaseFirestoreTypes.FieldValue | null;
 }

export default AdvertisingData;
