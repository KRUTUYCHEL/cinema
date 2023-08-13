import React from "react";
import { Routes, Route } from "react-router-dom";

import HomePage from './pages/HomePage';
import HallPage from './pages/HallPage';
import PaymentPage from './pages/PaymentPage';
import TicketPage from './pages/TicketPage';


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
