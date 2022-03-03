import React, { useEffect } from "react";
import HomeView from "./views/Home";
import WelcomeView from "./views/Welcome";
import SettingView from "./views/Setting";
import ChatView from "./views/Chat";
import Navbar from "./components/Navbar";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from "./store";
import { listerToAuthChanges } from "./action/auth";

const store = configureStore();
export default function App() {
  useEffect(() => {
    store.dispatch(listerToAuthChanges());
  }, []);
  return (
    <div className="content-wrapper">
      <Provider store={store}>
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
      </Provider>
    </div>
  );
}
