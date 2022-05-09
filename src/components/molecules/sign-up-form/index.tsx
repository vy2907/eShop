import React, { useState } from 'react';
import { Button } from 'src/components/atoms/button';
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from 'src/setting/firebase';
import { FormInput } from '../form-input';

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

export const SignUpForm: React.FC = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert('passwords do not match');
      return;
    }

    try {
      const user = await createAuthUserWithEmailAndPassword(email, password);
      if (user) await createUserDocumentFromAuth(user.user, { displayName });
      resetFormFields();
    } catch (error: any) {
      if (error.code === 'auth/email-already-in-use') {
        alert('Cannot create user, email already in use');
      } else {
        console.log('user creation encountered an error', error);
      }
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="m-sign-up-form">
      <h1>Sign up with your email and password</h1>
      <form onSubmit={handleSubmit}>
        <FormInput
          type="text"
          required
          onChange={handleChange}
          name="displayName"
          value={displayName}
          label={'Dispaly name'}
        />

        <FormInput type="email" required onChange={handleChange} name="email" value={email} label={'Email'} />

        <FormInput
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
          label={'Password'}
        />

        <FormInput
          label="Confirm Password"
          type="password"
          required
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        />
        <Button type="submit">Sign up</Button>
      </form>
    </div>
  );
};
