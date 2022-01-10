import { useState } from "react";
import UserContext from "./contexts/UserContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import SignUpPage from "./components/SignUpPage";
import TodayPage from "./components/TodayPage";
import HabitsPage from "./components/HabitsPage";
import HistoryPage from "./components/HistoryPage";

export default function App() {
  const [token, setToken] = useState("");
  const [avatar, setAvatar] = useState();
  const [progress, setProgress] = useState();

  return (
    <UserContext.Provider
      value={{ avatar, setAvatar, progress, setProgress, token, setToken }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
          <Route path="/today" element={<TodayPage />} />
          <Route path="/habits" element={<HabitsPage />} />
          <Route path="/history" element={<HistoryPage />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}
