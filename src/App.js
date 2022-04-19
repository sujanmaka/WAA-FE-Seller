import { CssBaseline } from "@material-ui/core";
import ReactNotification from "react-notifications-component/dist/js/react-notifications.prod";
import { Redirect, Router, Switch } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer/Footer";
import Layout from "./components/layout/Layout";
import ScrollToTop from "./components/scroll-to-top/ScrollToTop";
import EditProduct from "./components/Seller/EditProduct/EditProduct";
import NewProduct from "./components/Seller/NewProduct/NewProduct";
import OrderDetails from "./components/Seller/OrderDetails/OrderDetails";
import ProductDetails from "./components/Seller/ProductDetail/ProductDetail";
import Orders from "./container/Seller/Orders/Orders";
import Products from "./container/Seller/Products/Products";
import AdminDashboard from "./pages/admin/dashboard/Dashboard";
import ForgetPassword from "./pages/public/forget-password/ForgetPassword";
import LoginForm from "./pages/public/login/Login";
import NotAuthorized from "./pages/public/not-authorized/NotAuthorized";
import GlobalPageNotFound from "./pages/public/not-found/GlobalPageNotFound";
import Register from "./pages/public/register/Register";
import ResetPassword from "./pages/public/reset-password/ResetPassword";
import Route from "./routes/Route";
import history from "./services/history";

function App() {
  return (
    <>
      <ReactNotification />
      <Router history={history}>
        <CssBaseline />
        <Layout>
          <Switch>
            <Route exact path="/" component={LoginForm} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/reset" component={ResetPassword} />
            <Route
              exact
              path="/admin/dashboard"
              component={AdminDashboard}
              isPrivate
            />

            <Route
              exact
              path="/page-not-found"
              component={GlobalPageNotFound}
              isWrongLink
            />
            <Route
              exact
              path="/user-not-authorized"
              component={NotAuthorized}
            />
            <Route exact path="/forget-password" component={ForgetPassword} />
            <Route path="/seller/dashboard" component={<Products />} />
            <Route isPrivate path="/seller/products" component={Products} />
            <Route path="/seller/products/:id" component={ProductDetails} />
            <Route
              isPrivate
              path="/seller/edit-product/:id"
              component={EditProduct}
            />
            <Route
              isPrivate
              path="/seller/new-product"
              component={NewProduct}
            />
            <Route exact path="/seller/orders" isPrivate component={Orders} />
            <Route isPrivate path="/seller/orders/:id" component={OrderDetails} />
            <Route component={GlobalPageNotFound} isWrongLink />
          </Switch>
        </Layout>
      </Router>
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;
