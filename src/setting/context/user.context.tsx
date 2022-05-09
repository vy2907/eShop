import { User } from 'firebase/auth';
import React, { Dispatch, SetStateAction, useEffect } from 'react';
import { createContext, useState } from 'react';
import { createUserDocumentFromAuth, onAuthStateChangedListener } from '../firebase';

interface UserProps {
  setCurrentUser: Dispatch<SetStateAction<User | null>>;
  currentUser: User | null;
}
const INITIAL_USER_CONTEXT: UserProps = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setCurrentUser: (value: SetStateAction<User | null>) => null,
  currentUser: null,
};
export const UserContext = createContext(INITIAL_USER_CONTEXT);

export const UserProvider: React.FC = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(INITIAL_USER_CONTEXT.currentUser);
  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener(user => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
