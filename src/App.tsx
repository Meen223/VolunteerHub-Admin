// src/App.tsx
import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ActivityList from "./pages/ActivityList";
import ActivityDetail from "./pages/ActivityDetail";
import MyActivities from "./pages/MyActivities";
import LoginPage from "./pages/LoginPage";
import NotFoundPage from "./pages/NotFoundPage";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      {<Navbar />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/activities" element={<ActivityList />} />
        <Route path="/activities/:id" element={<ActivityDetail />} />
        <Route path="/my-activities" element={<MyActivities />} />
        <Route path="/login" element={<LoginPage />} />

        {/* redirect เก่า → ใหม่ (ถ้ามี) */}
        <Route path="/home" element={<Navigate to="/" replace />} />

        {/* 404 */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      {/* ถ้ามี Footer ก็วางไว้ตรงนี้ */}
    </div>
  );
}
