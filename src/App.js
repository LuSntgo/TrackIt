import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import SignUpPage from "./components/SignUpPage";
import TodayPage from "./components/TodayPage"

export default function App() {
    const [token, setToken] = useState('');

    return (
        <BrowserRouter>
        <Routes>
        <Route path="/" element={<LoginPage setToken={setToken} />} /> 
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/today" element={<TodayPage token={token} />} />
        </Routes>
        </BrowserRouter>

    );
  }
  