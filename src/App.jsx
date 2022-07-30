import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomeScreen from './feature-home/ui/HomeScreen.jsx';
import SignInScreen from './feature-auth/ui/SignInScreen';
import SignInModesScreen from './feature-auth/ui/SignInModesScreen';
import SignUpScreen from './feature-auth/ui/SignUpScreen';
import CoursesScreen from './feature-courses/ui/CoursesScreen';
import ApplicantScreen from './feature-applicant/ui/ApplicantScreen';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomeScreen />} />
        <Route path='/sign-in' element={<SignInModesScreen />} />
        <Route path='/sign-in/:mode' element={<SignInScreen />} />
        <Route path='/sign-up' element={<SignUpScreen />} />
        <Route path='/courses' element={<CoursesScreen />} />
        <Route path='/applicants' element={<ApplicantScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
