import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  User,
  UserCredential,
} from 'firebase/auth';

import { getFirestore, doc, getDoc, setDoc, DocumentReference, DocumentData } from 'firebase/firestore';

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
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();

export const signInWithGooglePopup = (): Promise<UserCredential> => signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (
  userAuth: User
): Promise<DocumentReference<DocumentData>> => {
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
      });
    } catch (error: any) {
      console.log('error creating the user', error.message);
    }
  }

  return userDocRef;
};
