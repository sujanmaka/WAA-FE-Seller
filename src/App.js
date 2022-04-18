import logo from './logo.svg';
import './App.css';
import { AppBar } from '@mui/material';
import Products from './container/Seller/Products/Products';
import SellerDashboard from './container/Seller/Dashboad/Dashboard';
import { BrowserRouter } from 'react-router-dom';
import MainRoute from './routes/MainRouter';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <AppBar />
        <MainRoute />
      </div>
    </BrowserRouter>
  );
}

export default App;
