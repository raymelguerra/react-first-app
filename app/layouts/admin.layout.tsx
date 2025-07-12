import { Outlet } from "react-router";
import Navbar from "../components/navbar";

const AdminLayout = () => {
  return (
  <>
  <Navbar />
  <Outlet />;
  </>);
}

export default AdminLayout;