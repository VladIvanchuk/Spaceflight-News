//Core
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Navigate, Routes, Route, Outlet } from 'react-router-dom';

//Components
import { Article } from './pages/Article';
import { Home } from './pages/Home';

//Styles
import './assets/styles/Application.scss';

const Application: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path='/home' element={<Outlet />}>
          <Route path='' element={<Home />} />
          <Route path='id' element={<Article />} />
        </Route>
        <Route path='*' element={<Navigate to='/home' replace />} />
      </Routes>
    </Router>
  );
};

export default Application;
