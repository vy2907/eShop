import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Category } from './components/atoms/category';
import { CategoryList } from './components/molecules/category-list';
import { categories } from './components/molecules/category-list/index.stories';
import { Checkout } from './components/molecules/checkout';

import { Navigaties } from './components/molecules/navigaties';
import { Shop } from './components/molecules/shop';
import { SignIn } from './components/organisms/sign-in';

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
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;
