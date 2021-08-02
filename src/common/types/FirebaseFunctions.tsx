import { FirebaseFirestoreTypes as FT } from '@react-native-firebase/firestore';

export type GetDocumentFunction = (docId: string) => Promise<FT.DocumentSnapshot<FT.DocumentData>>;
export type SetDocumentFunction<T> = (docId: string, data: T) => Promise<void>;
