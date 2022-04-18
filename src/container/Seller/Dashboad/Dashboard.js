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
            <div className="row">
                <div className="col-3">
                    <Sidebar />
                </div>
                <div className="col-9">
                    <SellerRoute />
                </div>
            </div>
        </div>
    )
}

export default Dashboard;