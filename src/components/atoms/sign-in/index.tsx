import { useEffect } from 'react';
import { getRedirectResult } from 'firebase/auth';
import React from 'react';
import {
  auth,
  createUserDocumentFromAuth,
  signInWithGooglePopup,
  signInWithGoogleRedirect,
} from 'src/setting/firebase';

export const SignIn: React.FC = () => {
  useEffect(() => {
    const redirectResult = async () => {
      const response = await getRedirectResult(auth);
      if (response) {
        await createUserDocumentFromAuth(response.user);
      }
    };
    redirectResult().catch(console.error);
  }, []);
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
  };

  return (
    <div className="a-sign-in">
      <h1>Signin page</h1>
      <button className="a-sign-in__button" onClick={logGoogleUser}>
        Sign in with google popup
      </button>
      <button className="a-sign-in__button" onClick={signInWithGoogleRedirect}>
        Sign in with google redirect
      </button>
    </div>
  );
};
