import firestore from '@react-native-firebase/firestore';
import Shopper from '../../common/models/Shopper';
import { GetDocumentFunction, SetDocumentFunction } from '../../common/types/FirebaseFunctions';

const USER_COLLECTION = 'Shopper';

const getShopper: GetDocumentFunction = (uid) => firestore()
  .collection(USER_COLLECTION)
  .doc(uid)
  .get();

const setShopper: SetDocumentFunction<Shopper> = (uid, data) => firestore()
  .collection(USER_COLLECTION)
  .doc(uid)
  .set(data);

const updateShopper = (uid: string, data: Partial<Shopper>) => firestore()
  .collection(USER_COLLECTION)
  .doc(uid)
  .update(data);

export {
  getShopper,
  setShopper,
  updateShopper,
};
