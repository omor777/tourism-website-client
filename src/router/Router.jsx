import { createBrowserRouter } from "react-router-dom";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";
import TouristSpotDetails from "../components/TouristSpotDetails/TouristSpotDetails";
import Root from "../layouts/Root/Root";
import AddTouristSpot from "../pages/AddTouristSpot/AddTouristSpot";
import AllTouristSpot from "../pages/AllTouristSpot/AllTouristSpot";
import CountryTouristSpot from "../pages/CountryTouristSpot/CountryTouristSpot";
import Error from "../pages/Error/Error";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import MyList from "../pages/MyList/MyList";
import Register from "../pages/Register/Register";
import UpdateMyList from "../pages/UpdateMyList/UpdateMyList";
import API_URL from "../utils/api";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/details/:id",
        element: (
          <PrivateRoute>
            <TouristSpotDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "/allTouristSpot",
        element: <AllTouristSpot />,
      },
      {
        path: "/addTouristSpot",
        element: (
          <PrivateRoute>
            <AddTouristSpot />
          </PrivateRoute>
        ),
      },
      {
        path: "/myList",
        element: (
          <PrivateRoute>
            <MyList />
          </PrivateRoute>
        ),
      },
      {
        path: "/touristSpots/:country",
        element: <CountryTouristSpot />,
      },
      {
        path: "/update_my_list/:id",
        element: (
          <PrivateRoute>
            <UpdateMyList />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`${API_URL}/update_tourist_spot/${params.id}`),
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
