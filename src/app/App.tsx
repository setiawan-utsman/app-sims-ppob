import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppRouting from './AppRouting';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <>
    <Router>
    <Routes>
      {/* <Route path='404' element={<Error404 />} /> */}
      <Route path={'*'} element={<AppRouting/>}></Route>
    </Routes>
  </Router>
      <ToastContainer />
    </>
    
  );
}

export default App;
