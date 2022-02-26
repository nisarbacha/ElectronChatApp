
import React from 'react';
import HomeView from './views/Home';
import LoginView from './views/login';
import SettingView from './views/Setting';
import RegisterView from './views/Register';
import ChatView from './views/Chat';
import Navbar from './components/Navbar';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

export default function App() {
    return (
        <div className='content-wrapper'>

            <Router>
                <Navbar />
                <Routes>
                    <Route path="/register" element={<RegisterView />} />
                    <Route path="/login" element={<LoginView />} />
                    <Route path="/settings" element={<SettingView />} />
                    <Route path="/" index element={<HomeView />} />
                    <Route path='/chat/:id' element={<ChatView />} />
                </Routes>
            </Router>
        </div>
    )
}