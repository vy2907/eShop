import React from 'react';
import { mapModifiers } from 'src/libs/component';

export interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'className' | 'onClick'> {
  children: React.ReactNode;
  modifiers?: 'google-sign-in' | 'inverted';
  onClickRequest?: (e: React.MouseEvent<HTMLElement>) => void;
}

export const Button: React.FC<ButtonProps> = ({ children, modifiers, onClickRequest, ...props }) => (
  <button {...props} className={mapModifiers('a-button', modifiers)} onClick={onClickRequest}>
    {children}
  </button>
);
