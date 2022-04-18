import { CssBaseline } from "@material-ui/core";
import ReactNotification from "react-notifications-component/dist/js/react-notifications.prod";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import AdminDashboard from "./pages/admin/dashboard/Dashboard";
import BuyerDashboard from "./pages/buyer/dashboard/Dashboard";
import Login from "./pages/public/login/Login";
import SellerDashboard from "./pages/seller/dashboard/Dashboard";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <>
      <ReactNotification />
      <Router>
        <CssBaseline />
        <Layout>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route
              exact
              path="/admin/dashboard"
              element={<AdminDashboard />}
              isPrivate
            />
            <Route
              exact
              path="/buyer/dashboard"
              element={<BuyerDashboard />}
              isPrivate
            />
            <Route
              exact
              path="/seller/dashboard"
              element={<SellerDashboard />}
              isPrivate
            />
            {/* <Route path="products" element={<Products />}>
          <Route path=":id" element={<ProductDetails />} />
        </Route>
        <Route path="create-product" element={<NewProduct />} /> */}
          </Routes>
        </Layout>
      </Router>
    </>
  );
}

export default App;
