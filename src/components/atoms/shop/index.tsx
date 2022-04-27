import React from 'react';
import { mapModifiers } from 'src/libs/component';

export interface ShopProps {
  children?: React.ReactNode;
  modifiers?: 'red' | 'blue' | 'green';
}

export const Shop: React.FC<ShopProps> = props => (
  <div className={mapModifiers('a-shop', props.modifiers)}>Shop page</div>
);
