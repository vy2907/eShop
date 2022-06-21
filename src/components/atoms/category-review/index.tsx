import React from 'react';
import { mapModifiers } from 'src/libs/component';

export interface CategoryReviewProps {
  children: React.ReactNode;
  modifiers?: 'red' | 'blue' | 'green';
}

export const CategoryReview: React.FC<CategoryReviewProps> = props => (
  <div className={mapModifiers('a-category-review', props.modifiers)}>{props.children}</div>
);
