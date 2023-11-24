
import { Outlet } from "react-router-dom";
import Navbar from "../component/Navbar";
import FotterComponent from "../component/FotterComponent";
const Parent = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <FotterComponent/>
    </>
  );
};

export default Parent;
