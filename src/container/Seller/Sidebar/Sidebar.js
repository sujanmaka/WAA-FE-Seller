import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = (props) => {
    const sidebarState = useSelector(state => state.sidebar.current);
    const userState = useSelector(state => state.auth.user);
    const [showDropdown, setShowDropdown] = useState(false);
    const toggleHandle = () => {
        // style={position: "absolute", inset: "auto auto 0px 0px", margin: "0px", transform: "translate(0px, -34px)"};
        setShowDropdown(!showDropdown)
    }
    return (
        <div className="d-flex flex-column flex-shrink-0 p-3 bg-light text-start" >
            <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
                <span className="fs-4">Seller</span>
            </a>
            <hr />
            <ul className="nav nav-pills flex-column mb-auto">
                <li className="nav-item">
                    <Link to="/seller/products" className={sidebarState == "products" ? 'nav-link active' : 'nav-link link-dark'} aria-current="page">
                        Products
                    </Link>
                </li>
                <li>
                    <Link to="/seller/orders" className={sidebarState == "orders" ? 'nav-link active' : 'nav-link link-dark'}>
                        Orders
                    </Link>
                </li>
            </ul>
            <hr />
            <div className="dropdown">
                <a href="#" className="d-flex align-items-center link-dark text-decoration-none dropdown-toggle show" id="dropdownBtn" data-bs-toggle="dropdown" aria-expanded="true" onClick={toggleHandle}>
                    <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2"/>
                    <strong>{userState.email}</strong>
                </a>
                <ul className={`dropdown-menu text-small shadow ${showDropdown ? 'show' : ""}`} aria-labelledby="dropdownBtn" data-popper-placement="top-start" id="menu">
                    <li><a className="dropdown-item" href="#">Profile</a></li>
                    <li><hr className="dropdown-divider"/></li>
                    <li><a className="dropdown-item" href="#">Sign out</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar;