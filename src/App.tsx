import { Routes, Route, Navigate } from "react-router-dom";
import DashboardLayout from "./components/DashboardLayout";
import MaternityDashboard from "./pages/MaternityDashboard";
import NeonatalDashboard from "./pages/NeonatalDashboard";

export default function App() {
  return (
    <DashboardLayout>
      <Routes>
        <Route path="/" element={<Navigate to="/maternity" replace />} />
        <Route path="/maternity" element={<MaternityDashboard />} />
        <Route path="/neonatal" element={<NeonatalDashboard />} />
        <Route path="*" element={<Navigate to="/maternity" replace />} />
      </Routes>
    </DashboardLayout>
  );
}
