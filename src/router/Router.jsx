import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root/Root";
import AddTouristSpot from "../pages/AddTouristSpot/AddTouristSpot";
import AllTouristSpot from "../pages/AllTouristSpot/AllTouristSpot";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import MyList from "../pages/MyList/MyList";
import Register from "../pages/Register/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: "",
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/allTouristSpot",
        element: <AllTouristSpot />,
      },
      {
        path: "/addTouristSpot",
        element: <AddTouristSpot />,
      },
      {
        path: "/myList",
        element: <MyList />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

export default router;
