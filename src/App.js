import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Profile from './components/Profile/Profile';
import Messages from './components/Messages/Messages';
import MainLayout from './Layouts/MainLayout';


const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout/>}>
            <Route path="profile" element={<Profile />} />
            <Route path="dialogs" element={<Messages />} />
            </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

