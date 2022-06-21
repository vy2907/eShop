import React, { useState } from 'react';
import { Button } from 'src/components/atoms/button';
import { signInAuthUserWithEmailAndPassword, signInWithGooglePopup } from 'src/setting/firebase';
import { FormInput } from '../form-input';

const defaultFormFields = {
  email: '',
  password: '',
};

export const SignInForm: React.FC = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  };

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();

    try {
      const user = await signInAuthUserWithEmailAndPassword(email, password);
      resetFormFields();
      // eslint-disable-next-line no-empty
    } catch (error: any) {
      switch (error.code) {
        case 'auth/wrong-password':
          alert('incorrect password for email');
          break;
        case 'auth/user-not-found':
          alert('no user associated with this email');
          break;
        default:
          // eslint-disable-next-line no-console
          console.log(error);
      }
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="m-sign-in-form">
      <h1>Sign in with your email and password</h1>
      <form onSubmit={handleSubmit}>
        <FormInput type="email" required onChange={handleChange} name="email" value={email} label={'Email'} />

        <FormInput
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
          label={'Password'}
        />
        <div className="m-sign-in-form__button-container">
          <Button type="submit">Sign in</Button>
          <Button type="button" modifiers="google-sign-in" onClickRequest={signInWithGoogle}>
            Google sign in
          </Button>
        </div>
      </form>
    </div>
  );
};
