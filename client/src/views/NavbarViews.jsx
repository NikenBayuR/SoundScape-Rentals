import { Outlet } from "react-router-dom";
import Navbar from "../component/Navbar";
const Parent = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default Parent;
