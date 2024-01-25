import React from 'react';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Profile from './components/Profile/Profile';
import Messages from './components/Messages/Messages';
import MainLayout from './Layouts/MainLayout';


const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
       <Routes>
        <Route path="/" element={<MainLayout />}>
        </Route>
        <Route path="/profile" element={<Profile />}>
        </Route>
        <Route path="/dialogs" element={<Messages/>}>
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
};


export default App;

