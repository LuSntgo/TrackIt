import { useState } from "react";
import UserContext from "./contexts/UserContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import SignUpPage from "./components/SignUpPage";
import TodayPage from "./components/TodayPage";

export default function App() {
  const [token, setToken] = useState("");
  const [avatar, setAvatar] = useState();
  const [progress, setProgress] = useState();

  return (
    <UserContext.Provider value={{ avatar, setAvatar, progress, setProgress }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage setToken={setToken} />} />
          <Route path="/sign-up" element={<SignUpPage />} />
          <Route path="/today" element={<TodayPage token={token} />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}
