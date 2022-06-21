import { IProduct } from 'src/setting/context/categories.context';
import { IShopItem } from './../../model/iShopItem';
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  User,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  NextOrObserver,
  signInWithRedirect,
  UserCredential,
  Unsubscribe,
} from 'firebase/auth';

import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
  DocumentReference,
  DocumentData,
} from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCVWFzEkWo27qG4A7dv_Ke9tc7ftBVjaQk',
  authDomain: 'fir-test-fdc08.firebaseapp.com',
  projectId: 'fir-test-fdc08',
  storageBucket: 'fir-test-fdc08.appspot.com',
  messagingSenderId: '893344228448',
  appId: '1:893344228448:web:072d1a0f60dd84dc6ecf05',
};

// Initialize Firebase
initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();

export const signInWithGooglePopup = (): Promise<UserCredential> => signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = (): Promise<never> => signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export const addCollectionAndDocuments = async (
  collectionKey: string,
  objectToAdd: IShopItem[]
): Promise<void> => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  objectToAdd.forEach((object: { title: string }) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  });

  await batch.commit();
};

export const getCategoriesAndDocuments: () => Promise<{
  [key: string]: IProduct[];
}> = async () => {
  const collectionRef = collection(db, 'categories');
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);
  const categoryMap = querySnapshot.docs.reduce((acc: { [key: string]: IProduct[] }, docSnapshot) => {
    const { title, items } = docSnapshot.data();
    const shopItem: IShopItem = { title, items };
    acc[shopItem.title.toLowerCase()] = shopItem.items;
    return acc;
  }, {});

  return categoryMap;
};

export const createUserDocumentFromAuth: (
  userAuth: User,
  // eslint-disable-next-line @typescript-eslint/ban-types
  additionalInformation?: {}
) => Promise<DocumentReference<DocumentData> | undefined> = async (
  userAuth: User,
  additionalInformation = {}
) => {
  if (!userAuth) return;

  const userDocRef = doc(db, 'user', userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      // eslint-disable-next-line no-console
      console.log('error creating the user', error.message);
    }
  }

  return userDocRef;
};

export const createAuthUserWithEmailAndPassword: (
  email: string,
  password: string
) => Promise<UserCredential | undefined> = async (email: string, password: string) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword: (
  email: string,
  password: string
) => Promise<UserCredential | undefined> = async (email: string, password: string) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser: () => Promise<void> = async () => await signOut(auth);

export const onAuthStateChangedListener: (callback: NextOrObserver<User>) => Unsubscribe = (
  callback: NextOrObserver<User>
) => onAuthStateChanged(auth, callback);
