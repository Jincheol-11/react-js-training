import React from 'react';
import { Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import Profile from './Profile';
import Articles from './pages/Articles';
import Article from './pages/Article';
import Layout from './pages/Layout';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/profiles/:id' element={<Profile/>} />
      </Route>
      <Route path='/articles' element={<Articles />}>
      <Route path=':id' element={<Article />} />
      </Route>
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
};

export default App;
