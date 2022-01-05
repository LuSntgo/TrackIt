import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import SignUpPage from "./components/SignUpPage";

export default function App() {
    return (
        <BrowserRouter>
        <Routes>
        <Route path="/" element={<LoginPage />} /> 
        <Route path="/sign-up" element={<SignUpPage />} />
        </Routes>
        </BrowserRouter>

    );
  }
  