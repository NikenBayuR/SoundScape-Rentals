
import { createBrowserRouter, redirect } from "react-router-dom";
import LoginAuth from "../views/LoginAuth";
import { GoogleOAuthProvider } from "@react-oauth/google";
import LandingViews from "../views/LandingViews";
import Parent from "../views/NavbarViews";
import CardDetail from "../views/DetailCard";
const router = createBrowserRouter([
  {
    path: "/login",
    element: (
      <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
        <LoginAuth />
      </GoogleOAuthProvider>
    ),
    loader: async () => {
      if (localStorage.access_token) {
        return redirect("/");
      }
      return null;
    },
  },
  {
    element: <Parent />,
    children: [
      {
        path: "/",
        element: <LandingViews />,
      },
      {
        path: "/detail/:id",
        element: <CardDetail />,
      },
    ],
  },
]);

export default router;
