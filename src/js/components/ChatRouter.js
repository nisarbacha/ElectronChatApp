import React, { useEffect } from "react";
import HomeView from "../views/Home";
import WelcomeView from "../views/Welcome";
import SettingView from "../views/Setting";
import ChatView from "../views/Chat";
import Navbar from "../components/Navbar";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { listerToAuthChanges } from "../Redux/action/auth";
import Loader from "./shared/loader";

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
      <Navbar />
      <Routes>
        {/* <Route path="/register" element={<RegisterView />} /> */}
        <Route path="/" index element={<WelcomeView />} />
        <Route path="/home" index element={<HomeView />} />
        <Route path="/settings" element={<SettingView />} />
        <Route path="/chat/:id" element={<ChatView />} />
      </Routes>
    </Router>

  );
}