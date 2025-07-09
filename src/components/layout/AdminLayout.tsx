// src/layouts/AdminLayout.jsx
import {Outlet} from "react-router-dom";
import NavBar from "../AdminNavbar";

const AdminLayout = () => {
  return (
    <NavBar>
      <Outlet />
    </NavBar>
  );
};

export default AdminLayout;
