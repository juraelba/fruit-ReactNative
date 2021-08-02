import firestore from '@react-native-firebase/firestore';
import Product from '../../common/models/Product';
import { GetDocumentFunction, SetDocumentFunction } from '../../common/types/FirebaseFunctions';

const COLLECTION = 'Product';

const allProducts = () => firestore()
  .collection(COLLECTION)
  .get();

const getProduct: GetDocumentFunction = (uid) => firestore()
  .collection(COLLECTION)
  .doc(uid)
  .get();

const setProduct: SetDocumentFunction<Product> = (uid, data) => firestore()
  .collection(COLLECTION)
  .doc(uid)
  .set(data);

const updateProduct = (uid: string, data: Partial<Product>) => firestore()
  .collection(COLLECTION)
  .doc(uid)
  .update(data);

export {
  allProducts,
  getProduct,
  setProduct,
  updateProduct,
};
