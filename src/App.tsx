import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Category } from './components/atoms/category';
import { SignIn } from './components/atoms/sign-in';
import { CategoryList } from './components/molecules/category-list';
import { categories } from './components/molecules/category-list/index.stories';

import { Navigaties } from './components/molecules/navigaties';
import { Shop } from './components/molecules/shop';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigaties />}>
        <Route
          index
          element={
            <CategoryList>
              {categories.map(category => (
                <Category key={category.id} category={category} />
              ))}
            </CategoryList>
          }
        />
        <Route path="shop" element={<Shop />} />
        <Route path="sign-in" element={<SignIn />} />
      </Route>
    </Routes>
  );
};

export default App;
