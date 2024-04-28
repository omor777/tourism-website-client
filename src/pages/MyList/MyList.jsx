import { useEffect, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBinFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import API_URL from "../../utils/api";

const MyList = () => {
  const [myTouristSpots, setMyTouristSpots] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    fetch(`${API_URL}/tourist_spots/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setMyTouristSpots(data);
      });
  }, [user]);

  const handleDeleteTouristSpot = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want delete this spot!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`${API_URL}/tourist_spots/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              // filter out spot
              const remainingTouristSpots = myTouristSpots.filter(
                (spot) => spot._id !== id
              );
              setMyTouristSpots(remainingTouristSpots);

              Swal.fire({
                title: "Deleted!",
                text: "Your Spot has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };

  return (
    <div className="container min-h-[calc(100vh-632px)]  mt-40">
      <div className="overflow-x-auto w-full">
        <table className="md:table table-sm border border-primary-extraLight text-center">
          {/* head */}
          <thead>
            <tr className="bg-primary-main text-white">
              <th className="md:text-base ">Name</th>
              <th className="md:text-base ">Country</th>
              <th className="md:text-base ">TouristSpotName</th>
              <th className="md:text-base ">Location</th>
              <th className="md:text-base ">Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {myTouristSpots?.map((spot, index) => (
              <tr key={spot._id}>
                <td className="md:text-base">{spot.username}</td>
                <td className="md:text-base">{spot.country_name}</td>
                <td className="md:text-base">{spot.tourist_spot_name}</td>
                <td className="md:text-base">{spot.location}</td>
                <td className="md:text-base ">
                  <Link to={`/update_my_list/${spot._id}`}>
                    <button className="bg-primary-main p-2.5 rounded-md mb-3 lg:mb-0 md:mr-4">
                      <FaEdit className="text-xl text-white" />
                    </button>
                  </Link>
                  <button
                    onClick={() => handleDeleteTouristSpot(spot._id)}
                    className="p-2.5 bg-error rounded-md"
                  >
                    <RiDeleteBinFill className="text-xl text-white" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyList;
