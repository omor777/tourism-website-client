import { useEffect, useState } from "react";
import TouristSpotCard from "../../components/TouristSpotCard/TouristSpotCard";
import API_URL from "../../utils/api";

const AllTouristSpot = () => {
  const { url, setUrl } = useState(`${API_URL}/tourist_spots`);
  const [allTouristSpots, setAllTouristSpots] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}/tourist_spots`)
      .then((res) => res.json())
      .then((data) => {
        setAllTouristSpots(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [url]);

  // console.log(allTouristSpots);
  const handleSortTouristSpots = (e) => {
    const value = e.target.value;

    if (value === "averageCost") {
      fetch(`${API_URL}/sorted_tourist_spots`)
        .then((res) => res.json())
        .then((data) => {
          setAllTouristSpots(data);
        })
        .catch((err) => {
          console.error(err);
        });
    } else {
      fetch(`${API_URL}/tourist_spots`)
        .then((res) => res.json())
        .then((data) => {
          setAllTouristSpots(data);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  };

  return (
    <div className="container">
      <div className="mb-10">
        <h1 className="text-6xl font-rancho text-center mb-4 capitalize text-black/70">
          All Tourist Spots
        </h1>
        <p className="max-w-xl mx-auto text-center text-gray-600">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam
          tempore quam aperiam quisquam. Eveniet voluptatibus doloribus
          voluptatem corrupti vitae maiores.
        </p>
      </div>
      <div>
        <div className="flex items-center justify-center">
          <select
            onChange={handleSortTouristSpots}
            className="select select-info bg-primary-main text-white font-semibold focus:outline-none uppercase"
          >
            <option className="text-center font-medium" value="default">
              Default
            </option>
            <option value="averageCost" className="text-center font-medium">
              Average Cost
            </option>
          </select>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-8">
          {allTouristSpots?.map((spot) => (
            <TouristSpotCard key={spot._id} spot={spot} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllTouristSpot;
