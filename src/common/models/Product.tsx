import { FirebaseFirestoreTypes } from '@react-native-firebase/firestore';
import AdvertisingData from '../interfaces/AdvertisingData';
import Inventory from '../interfaces/Inventory';
import Money from '../interfaces/Money';
import ProductBadge from '../interfaces/ProductBadge';
import ProductImage from '../interfaces/ProductImage';
import Category from './Category';

interface Product {
   id: string;
   createdAt: FirebaseFirestoreTypes.FieldValue;
   updatedAt: FirebaseFirestoreTypes.FieldValue | null
   dealerUid: string;
   name: string;
   description: string;
   images: ProductImage[];
   inventory: Inventory;
   price: Money;
   badge: ProductBadge[];
   isSponsored: boolean;
   advertisingData: AdvertisingData[];
   categoriesId: string[];
}

export default Product;
