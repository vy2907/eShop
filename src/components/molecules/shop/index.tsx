import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Category } from 'src/components/molecules/category';
import { CategoriesPreview } from '../categories-preview';

export const Shop: React.FC = () => {
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};
