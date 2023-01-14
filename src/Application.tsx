//Core
import React from 'react';
import {
  Navigate,
  Routes,
  Route,
  BrowserRouter as Router,
} from 'react-router-dom';
import { QueryClientProvider, QueryClient } from 'react-query';

//Components
import { Article } from './pages/Article';
import { Home } from './pages/Home';

//Styles
import './assets/styles/Application.scss';

const Application: React.FC = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
        <Router>
          <Routes>
            <Route path='/news' element={<Home />} />
            <Route path='/news/:id' element={<Article />} />
            <Route path='*' element={<Navigate to='/news' />} />
          </Routes>
        </Router>
    </QueryClientProvider>
  );
};

export default Application;
