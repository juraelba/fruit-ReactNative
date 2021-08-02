import { FirebaseFirestoreTypes as FFT } from '@react-native-firebase/firestore';
import * as frProductProvier from '../providers/FirestoreProduct'; 
import Product from '../../common/models/Product';

const getProduct = (uid: string) => frProductProvier.getProduct(uid);

const setProduct = async (uid: string, data: Product): Promise<FFT.DocumentData> => {
  await frProductProvier.setProduct(uid, data);
  const productDocument = await frProductProvier.getProduct(uid);
  return productDocument;
};

const updateProduct = (uid: string, data: Partial<Product>) => frProductProvier.updateProduct(uid, data);


export {
  getProduct,
  setProduct,
  updateProduct
};
