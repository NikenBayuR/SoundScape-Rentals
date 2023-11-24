import { createBrowserRouter, redirect } from "react-router-dom";
import LoginAuth from "../views/LoginAuth";
import LandingViews from "../views/LandingViews";
import Parent from "../views/NavbarViews";
import CardDetail from "../views/DetailCard";
import RegisterViews from "../views/RegisterPage";
const router = createBrowserRouter([
  {
    path: "/login",
    element: (
      <LoginAuth />
    ),
    loader: async () => {
      if (localStorage.access_token) {
        return redirect("/");
      }
      return null;
    },
  },
  {
    path: "/register",
    element: <RegisterViews />,
  },
  {
    element: <Parent />,
    children: [
      {
        path: "/",
        element: <LandingViews />,
      },
      {
        path: "/packagesDetails/:id",
        element: <CardDetail />,
      },
    ],
  },
]);

export default router;
