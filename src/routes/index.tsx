import React from "react";
import { Routes, Route } from "react-router-dom";

import HomePage from './pages/EmptyPage';
import HallPage from './pages/EmptyPage';
import PaymentPage from './pages/EmptyPage';
import TicketPage from './pages/EmptyPage';


const PageRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/hall" element={<HallPage />} />
      <Route path="/payment" element={<PaymentPage />} />
      <Route path="/ticket" element={<TicketPage />} />
    </Routes>
  );
}

export default PageRoutes;
