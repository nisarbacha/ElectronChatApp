import React, { useEffect } from "react";
import HomeView from "../views/Home";
import WelcomeView from "../views/Welcome";
import SettingView from "../views/Setting";
import ChatView from "../views/Chat";
import BaseLayout from "../Layout/Baselayout"

import { HashRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { listerToAuthChanges } from "../Redux/action/auth";
import Loader from "./shared/loader";


function AuthRoute({ children }) {
  const user = useSelector(({ auth }) => auth.user)
  return user ? children : <Navigate to="/" />;
}
export const ChatRouter = () => {
  const dispatch = useDispatch();

  const isChecking = useSelector(({ auth }) => auth.isChecking)
  useEffect(() => {
    dispatch(listerToAuthChanges());
  }, [dispatch]);
  if (isChecking) {
    return <Loader />
  }
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<WelcomeView />} />
        <Route path="/home" element={<HomeView />} />
        <Route path="/settings" element={
          <AuthRoute>
            <SettingView />
          </AuthRoute>
        } />
        <Route path="/chat/:id" element={
          <AuthRoute>
            <ChatView />
          </AuthRoute>}
        />
      </Routes>
    </Router>

  );
}