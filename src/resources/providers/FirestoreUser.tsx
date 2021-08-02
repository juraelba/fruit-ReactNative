import firestore from '@react-native-firebase/firestore';
import User from '../../common/models/User';
import { GetDocumentFunction, SetDocumentFunction } from '../../common/types/FirebaseFunctions';

const USER_COLLECTION = 'User';

const getUser: GetDocumentFunction = (uid) => firestore()
  .collection(USER_COLLECTION)
  .doc(uid)
  .get();

const setUser: SetDocumentFunction<User> = (uid, data) => firestore()
  .collection(USER_COLLECTION)
  .doc(uid)
  .set(data);

const updateUser = (uid: string, data: Partial<User>) => firestore()
  .collection(USER_COLLECTION)
  .doc(uid)
  .update(data);

export {
  getUser,
  setUser,
  updateUser,
};
