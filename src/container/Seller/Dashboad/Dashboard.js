import { useState } from "react";
import SellerRoute from "../../../routes/SellerRoute";
import Sidebar from "../Sidebar/Sidebar";

const Dashboard = () => {
    const [value, setValue] = useState('1');
    const [menuState, setMenuState] = useState("list")

    const handleChange = (event, newValue) => {
        setValue(newValue);
      };
      
    
    return (
        <div className="container">
        </div>
    )
}

export default Dashboard;