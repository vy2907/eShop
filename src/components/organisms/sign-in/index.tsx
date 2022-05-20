import React from 'react';
import { SignInForm } from 'src/components/molecules/sign-in-form';
import { SignUpForm } from 'src/components/molecules/sign-up-form';

export const SignIn: React.FC = () => {
  // //Sign In With Redirect
  // useEffect(() => {
  //   const redirectResult = async () => {
  //     const response = await getRedirectResult(auth);
  //     if (response) {
  //       await createUserDocumentFromAuth(response.user);
  //     }
  //   };
  //   redirectResult().catch(console.error);
  // }, []);

  return (
    <div className="o-sign-in">
      <SignInForm />
      <SignUpForm />
    </div>
  );
};
