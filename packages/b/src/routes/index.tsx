import React, { lazy, Suspense } from 'react';
import { Signup } from '@root/shared';
import { BrowserRouter, Route, Navigate, Routes } from 'react-router-dom';

const Landing = lazy(() => import('../pages/Landing'));

const DefaultRoutes = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='*' element={<Navigate to='/' replace />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default DefaultRoutes;
