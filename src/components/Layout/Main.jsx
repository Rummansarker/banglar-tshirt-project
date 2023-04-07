import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import { ToastContainer} from 'react-toastify';

const Main = () => {
  return (
    <div>
      <ToastContainer></ToastContainer>
      <Header></Header>
      <Outlet></Outlet>
    </div>
  );
};

export default Main;