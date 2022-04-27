import React from 'react';
import { Outlet } from 'react-router-dom';

export const CategoryList: React.FC = ({ children }) => (
  <ul className="m-category-list">
    {children}
    <Outlet />
  </ul>
);
