import { Route, Routes } from "react-router-dom";
import Login from "../components/Login/Login";
import Registration from "../components/Registration/Registration";
import Dashboard from "../container/Seller/Dashboad/Dashboard";
import AdminDashboard from "../pages/admin/dashboard/Dashboard";
import LoginForm from "../pages/public/login/Login";

export default function MainRoute() {
  return (
    <Routes>
      <Route path="/admin/*" element={<AdminDashboard />} />
      <Route path="/" element={<LoginForm />} />
      <Route path="/register" element={<Registration />} />
      <Route path="/login" element={<Login />} />
      <Route path="/seller/*" element={<Dashboard />} />
    </Routes>
  );
}
