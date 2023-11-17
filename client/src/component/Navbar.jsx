import { googleLogout } from "@react-oauth/google";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  function logoutHandler() {
    localStorage.clear();
    googleLogout();
    navigate("/login");
  }
  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between bg-[#d7f41ee8] py-2 h-16">
        {/* <!-- LOGO/HOME --> */}
        <div className="h-32">
          <Link to={"/"}>
            <img
              src="https://i.postimg.cc/yNW8r4Rb/34489170-Soundscape-Logo-resize-removebg-preview.png"
              alt="Soundscape Rentals"
              loading="lazy"
              className="h-full"
            />
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <Link to="/" className="text-[#000000] text-2xl">
            Home
          </Link>
        </div>
        <div className="ml-5 flex w-[10%] items-end justify-end gap-[2rem]">
          {/* * <!-- LOGOUT --> * */}
          <div>
            <button onClick={logoutHandler}>LOGOUT</button>
          </div>
        </div>
      </nav>
      {/* <!-- LINE --> */}
      <div className="bg-[#ffffff] h-[0.5rem]"></div>
    </>
  );
};

export default Navbar;
