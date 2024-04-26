import { useEffect, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBinFill } from "react-icons/ri";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import API_URL from "../../utils/api";

const MyList = () => {
  const [myTouristSpots, setMyTouristSpots] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    fetch(`${API_URL}/my_tourist_spot/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setMyTouristSpots(data);
      });
  }, [user]);

  const handleDeleteTourisSpot = (id) => {
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
    <div className="container">
      <div className="overflow-x-auto">
        <table className="table border border-collapse border-primary-light rounded ">
          {/* head */}
          <thead>
            <tr className="bg-primary-main text-white">
              <th className="text-base ">ID</th>
              <th className="text-base ">Name</th>
              <th className="text-base ">Country</th>
              <th className="text-base ">TouristSpotName</th>
              <th className="text-base ">Location</th>
              <th className="text-base ">Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {myTouristSpots?.map((spot, index) => (
              <tr key={spot._id}>
                <td className="text-base">{index + 1}</td>
                <td className="text-base">{spot.username}</td>
                <td className="text-base">{spot.country_name}</td>
                <td className="text-base">{spot.tourist_spot_name}</td>
                <td className="text-base">{spot.location}</td>
                <td className="text-base">
                  <button className="bg-primary-main p-2.5 rounded-md mr-4">
                    <FaEdit className="text-xl text-white" />
                  </button>
                  <button
                    onClick={() => handleDeleteTourisSpot(spot._id)}
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
