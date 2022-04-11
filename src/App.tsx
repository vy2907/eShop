import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from './components/atoms/home';
import { New } from './components/atoms/new';
import { SignIn } from './components/atoms/sign-in';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/news" element={<New />}></Route>
      <Route path="/signin" element={<SignIn />}></Route>
    </Routes>
  );
};

export default App;
